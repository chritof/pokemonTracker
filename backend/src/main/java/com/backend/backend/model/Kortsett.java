package com.backend.backend.model;

import jakarta.persistence.*;
import lombok.Getter;
import lombok.Setter;
import java.sql.Timestamp;
import java.time.LocalDate;


@Entity
@Table(name = "kortsett", schema = "pokemoncards")
@Getter @Setter
public class Kortsett {
    @Id @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer id;

    @Column(name = "external_id")
    private String externalId;

    private String navn;
    private String serie;

    @Column(name = "release_date")
    private java.time.LocalDate releaseDate;

    private Integer total;

    @Column(name = "opprettet")
    private java.sql.Timestamp opprettet;
}
