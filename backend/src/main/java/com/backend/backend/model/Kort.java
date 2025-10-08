package com.backend.backend.model;

import jakarta.persistence.*;
import lombok.Getter;
import lombok.Setter;
import java.sql.Timestamp;


@Entity @Table(name="kort")
@Getter @Setter
public class Kort {
    @Id @GeneratedValue(strategy=GenerationType.IDENTITY)
    private Integer id;
    private String externalId;
    private String navn;

    @ManyToOne(fetch = FetchType.LAZY) @JoinColumn(name="set_id")
    private Kortsett sett;

    private String rarity;
    private String supertype;
    private String subtype;
    private String nummerISett;
    private String bildeLiten;
    private String bildeStor;
    private String tcgplayerId;
    private String cardmarketId;
    private Timestamp opprettet;
}