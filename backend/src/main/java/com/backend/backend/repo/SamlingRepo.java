package com.backend.backend.repo;

import com.backend.backend.model.Samling;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface SamlingRepo extends JpaRepository<Samling,Integer> {
    List<Samling> findByIsPublicTrueOrderByOppdatertDesc();
    List<Samling> findByOwnerId(Integer ownerId);
}
