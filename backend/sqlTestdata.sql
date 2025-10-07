-- ========== Eksempeldata ==========

-- Brukere
INSERT INTO brukere (email, display_name) VALUES
                                              ('ash.ketchum@example.com', 'Ash'),
                                              ('misty.waterflower@example.com', 'Misty'),
                                              ('brock.stone@example.com', 'Brock');

-- Følgerelasjoner
INSERT INTO follows (follower_id, followee_id) VALUES
                                                   (1, 2),  -- Ash følger Misty
                                                   (1, 3);  -- Ash følger Brock

-- Kortsett
INSERT INTO kortsett (external_id, navn, serie, release_date, total)
VALUES
    ('base1', 'Base Set', 'Original Series', '1999-01-09', 102);

-- Kort
INSERT INTO kort (external_id, navn, set_id, rarity, supertype, subtype, nummer_i_sett, bilde_liten, bilde_stor)
VALUES
    ('base1-4', 'Charizard', 1, 'Rare Holo', 'Pokémon', 'Fire', '4/102',
     'https://images.pokemontcg.io/base1/4.png',
     'https://images.pokemontcg.io/base1/4_hires.png'),
    ('base1-58', 'Pikachu', 1, 'Common', 'Pokémon', 'Electric', '58/102',
     'https://images.pokemontcg.io/base1/58.png',
     'https://images.pokemontcg.io/base1/58_hires.png');

-- Samlinger
INSERT INTO samling (owner_id, navn, is_public)
VALUES
    (1, 'Ash’s Rare Cards', TRUE),
    (2, 'Misty’s Water Deck', FALSE);

-- Kort i samlinger
INSERT INTO samling_kort (samling_id, kort_id, antall, kommentar) VALUES
                                                                      (1, 1, 1, 'Mint condition!'),
                                                                      (1, 2, 3, 'Pikachu army ⚡'),
                                                                      (2, 2, 1, 'Backup card');

-- Nåværende priser
INSERT INTO pris_navaerende (kort_id, kilde, valuta, markedspris, lavpris, midpris, hoypris)
VALUES
    (1, 'pokemontcg', 'USD', 420.00, 300.00, 400.00, 450.00),
    (2, 'pokemontcg', 'USD', 5.00, 3.00, 4.50, 6.00);

-- Prishistorikk
INSERT INTO pris_historikk (kort_id, kilde, valuta, pristype, pris, registrert)
VALUES
    (1, 'pokemontcg', 'USD', 'market', 380.00, '2024-09-01'),
    (1, 'pokemontcg', 'USD', 'market', 420.00, '2024-10-01'),
    (2, 'pokemontcg', 'USD', 'market', 4.00, '2024-09-01'),
    (2, 'pokemontcg', 'USD', 'market', 5.00, '2024-10-01');
