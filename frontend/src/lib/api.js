// src/lib/api.js

// Les base-URL fra .env.local (f.eks. VITE_API_BASE_URL=http://localhost:8080)
// Faller tilbake til '' => relative paths => Vite proxy kan ta over.
const RAW_BASE = import.meta.env.VITE_API_BASE_URL?.trim();
export const API_BASE = RAW_BASE ? RAW_BASE.replace(/\/+$/, "") : "";

/**
 * Bygg full URL fra path + query params.
 * Bruker env-base når den finnes, ellers relative paths (proxy).
 */
function buildUrl(path, params) {
  const qs = params ? `?${new URLSearchParams(params).toString()}` : "";
  return API_BASE ? `${API_BASE}${path}${qs}` : `${path}${qs}`;
}

/**
 * GET med timeout, ryddig JSON-parse og god feilmelding.
 */
async function httpGet(path, params, { timeoutMs = 10000, headers = {} } = {}) {
  const url = buildUrl(path, params);
  const controller = new AbortController();
  const t = setTimeout(() => controller.abort(), timeoutMs);

  let res;
  try {
    res = await fetch(url, {
      method: "GET",
      headers: { Accept: "application/json", ...headers },
      signal: controller.signal,
    });
  } catch (e) {
    clearTimeout(t);
    if (e.name === "AbortError") {
      throw new Error("API timeout – prøv igjen.");
    }
    throw new Error(`Nettverksfeil: ${e.message || e}`);
  } finally {
    clearTimeout(t);
  }

  // Forsøk å lese body som tekst først, for bedre feilmeldinger
  const text = await res.text();
  const asJson = (() => {
    try {
      return text ? JSON.parse(text) : null;
    } catch {
      return null;
    }
  })();

  if (!res.ok) {
    const backendMsg =
      (asJson && (asJson.message || asJson.error)) ||
      res.statusText ||
      "Ukjent feil";
    throw new Error(`API ${res.status}: ${backendMsg}`);
  }

  return asJson;
}

/* =====================
   Endpoints
   ===================== */

/**
 * Søk etter kort (Spring Page<Kort> som respons).
 */
export async function searchCards(q = "", page = 0, size = 24) {
  const params = {};
  if (q) params.q = q;
  params.page = page;
  params.size = size;

  return httpGet("/api/cards", params);
}

/**
 * Trending-kort (liste med Kort).
 * Backend-endpoint:
 *   GET /api/cards/trending
 * returnerer List<Kort>
 */
export async function getTrendingCards() {
  return httpGet("/api/cards/trending");
}

/* (valgfritt) flere helpers du kan trenge senere */

export async function getCardById(id) {
  return httpGet(`/api/cards/${encodeURIComponent(id)}`);
}

export async function getPublicCollections() {
  return httpGet("/api/collections/public");
}
