package com.backend.backend.model;

import jakarta.persistence.*;
import lombok.Getter;
import lombok.Setter;
import java.sql.Timestamp;


@Entity
@Table(name = "kort", schema = "pokemoncards")
@Getter @Setter
public class Kort {
    @Id @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer id;

    @Column(name = "external_id")
    private String externalId;

    @Column(name = "navn")
    private String navn;

    // Viktig: unngå JSON-serialisering av lazy-relasjoner nå
    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "set_id")
    @com.fasterxml.jackson.annotation.JsonIgnore
    private Kortsett sett;

    private String rarity;
    private String supertype;
    private String subtype;

    @Column(name = "nummer_i_sett")
    private String nummerISett;

    @Column(name = "bilde_liten")
    private String bildeLiten;

    @Column(name = "bilde_stor")
    private String bildeStor;

    @Column(name = "tcgplayer_id")
    private String tcgplayerId;

    @Column(name = "cardmarket_id")
    private String cardmarketId;

    @Column(name = "opprettet")
    private java.sql.Timestamp opprettet;
}
