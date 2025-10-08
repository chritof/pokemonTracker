package com.backend.backend.model;

import jakarta.persistence.*;
import lombok.Getter;
import lombok.Setter;
import java.sql.Timestamp;
import java.time.LocalDate;


@Entity @Table(name="kortsett")
@Getter @Setter
public class Kortsett {
    @Id @GeneratedValue(strategy=GenerationType.IDENTITY)
    private Integer id;
    private String externalId;
    private String navn;
    private String serie;
    private LocalDate releaseDate;
    private Integer total;
    private Timestamp opprettet;
}