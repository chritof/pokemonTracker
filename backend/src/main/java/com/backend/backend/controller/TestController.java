package com.backend.backend.controller;

import com.backend.backend.model.Bruker;
import com.backend.backend.model.Kort;
import com.backend.backend.model.Kortsett;
import com.backend.backend.model.Samling;
import com.backend.backend.repo.BrukerRepo;
import com.backend.backend.repo.KortRepo;
import com.backend.backend.repo.KortsettRepo;
import com.backend.backend.repo.SamlingRepo;
import lombok.RequiredArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.stereotype.Controller;

import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@Controller
@RequiredArgsConstructor
public class TestController {

    private final BrukerRepo brukerRepo;
    private final KortRepo kortRepo;
    private final KortsettRepo kortsettRepo;
    private final SamlingRepo samlingRepo;

    @GetMapping("/brukere")
    public String seBrukere(Model model) {
        List<Bruker> brukere = brukerRepo.findAll();
        model.addAttribute("brukere", brukere);
        return "brukerTest";
    }

    @GetMapping("/kort")
    public String seKort(Model model) {
        List<Kort> kort = kortRepo.findAll();
        model.addAttribute("kort", kort);
        return "kortTest";
    }

    @GetMapping("/kortsett")
    public String seKortsett(Model model) {
        List<Kortsett> kortsett = kortsettRepo.findAll();
        model.addAttribute("kortsett", kortsett);
        return "kortsettTest";
    }

    @GetMapping("/samling")
    public String seSamling(Model model) {
        List<Samling> samling = samlingRepo.findAll();
        model.addAttribute("samling", samling);
        return "samlingTest";
    }
}
