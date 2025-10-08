package com.backend.backend.controller;

import com.backend.backend.model.Kort;
import com.backend.backend.model.Samling;
import com.backend.backend.repo.KortRepo;
import com.backend.backend.repo.SamlingRepo;
import lombok.RequiredArgsConstructor;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequestMapping("/api")
@RequiredArgsConstructor
public class PublicController {
    private final KortRepo kortRepo;
    private final SamlingRepo samlingRepo;

    @GetMapping("/cards")
    public Page<Kort> searchCards(@RequestParam(defaultValue="") String q,
                                  @RequestParam(defaultValue="0") int page,
                                  @RequestParam(defaultValue="20") int size) {
        return kortRepo.findByNavnContainingIgnoreCase(q, PageRequest.of(page, size));
    }

    @GetMapping("/collections/public")
    public List<Samling> publicCollections() {
        return samlingRepo.findByIsPublicTrueOrderByOppdatertDesc();
    }
}
