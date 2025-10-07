DROP SCHEMA IF EXISTS pokemoncards CASCADE;
CREATE SCHEMA pokemoncards;
SET search_path TO pokemoncards;

-- ========== Brukere ==========
CREATE TABLE brukere(
                        id SERIAL PRIMARY KEY,
                        email VARCHAR(100) UNIQUE NOT NULL,
                        display_name VARCHAR(50) NOT NULL,
                        opprettet TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- ========== Følgere ==========
CREATE TABLE follows(
                        id SERIAL PRIMARY KEY,
                        follower_id INT NOT NULL REFERENCES brukere(id) ON DELETE CASCADE,
                        followee_id INT NOT NULL REFERENCES brukere(id) ON DELETE CASCADE,
                        opprettet TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
                        CONSTRAINT no_self_follow CHECK (follower_id <> followee_id)
);

-- ========== Samlinger ==========
CREATE TABLE samling(
                        id SERIAL PRIMARY KEY,
                        owner_id INT NOT NULL REFERENCES brukere(id) ON DELETE CASCADE,
                        navn VARCHAR(100) NOT NULL,
                        is_public BOOLEAN DEFAULT FALSE,
                        opprettet TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
                        oppdatert TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- ========== Sett ==========
CREATE TABLE kortsett(
                         id SERIAL PRIMARY KEY,
                         external_id VARCHAR(50) UNIQUE NOT NULL,  -- f.eks. "base1"
                         navn VARCHAR(100) NOT NULL,
                         serie VARCHAR(100),
                         release_date DATE,
                         total INT,
                         opprettet TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- ========== Kort ==========
CREATE TABLE kort(
                     id SERIAL PRIMARY KEY,
                     external_id VARCHAR(50) UNIQUE NOT NULL,  -- f.eks. "base1-4"
                     navn VARCHAR(100) NOT NULL,
                     set_id INT NOT NULL REFERENCES kortsett(id) ON DELETE RESTRICT,
                     rarity VARCHAR(50),
                     supertype VARCHAR(50),
                     subtype VARCHAR(50),
                     nummer_i_sett VARCHAR(20),
                     bilde_liten VARCHAR(200),
                     bilde_stor VARCHAR(200),
                     tcgplayer_id VARCHAR(50),
                     cardmarket_id VARCHAR(50),
                     opprettet TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- ========== Samling -> Kort ==========
CREATE TABLE samling_kort(
                             id SERIAL PRIMARY KEY,
                             samling_id INT NOT NULL REFERENCES samling(id) ON DELETE CASCADE,
                             kort_id INT NOT NULL REFERENCES kort(id) ON DELETE RESTRICT,
                             antall INT DEFAULT 1 CHECK (antall > 0),
                             kommentar VARCHAR(200)
);

-- ========== Nåværende priser ==========
CREATE TABLE pris_navaerende(
                                id SERIAL PRIMARY KEY,
                                kort_id INT NOT NULL REFERENCES kort(id) ON DELETE CASCADE,
                                kilde VARCHAR(50) NOT NULL,          -- 'pokemontcg', 'tcgplayer', 'cardmarket'
                                valuta CHAR(3) NOT NULL,             -- f.eks. 'USD'
                                markedspris NUMERIC(12,2),
                                lavpris NUMERIC(12,2),
                                midpris NUMERIC(12,2),
                                hoypris NUMERIC(12,2),
                                oppdatert TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- ========== Prishistorikk ==========
CREATE TABLE pris_historikk(
                               id SERIAL PRIMARY KEY,
                               kort_id INT NOT NULL REFERENCES kort(id) ON DELETE CASCADE,
                               kilde VARCHAR(50) NOT NULL,
                               valuta CHAR(3) NOT NULL,
                               pristype VARCHAR(20) CHECK (pristype IN ('market','low','mid','high')),
                               pris NUMERIC(12,2) NOT NULL,
                               registrert TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);
