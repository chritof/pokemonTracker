package com.backend.backend.model;

import jakarta.persistence.*;
import lombok.Getter;
import lombok.Setter;
import java.sql.Timestamp;


@Entity @Table(name="samling")
@Getter @Setter
public class Samling {
    @Id @GeneratedValue(strategy=GenerationType.IDENTITY)
    private Integer id;

    @ManyToOne(fetch = FetchType.LAZY) @JoinColumn(name="owner_id")
    private Bruker owner;

    private String navn;
    private Boolean isPublic;
    private Timestamp opprettet;
    private Timestamp oppdatert;
}
