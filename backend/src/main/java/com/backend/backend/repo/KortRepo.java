package com.backend.backend.repo;

import com.backend.backend.model.Kort;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;

public interface KortRepo extends JpaRepository<Kort,Integer> {
    Page<Kort> findByNavnContainingIgnoreCase(String q, Pageable p);
}