package com.ellewright.villagr.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.ellewright.villagr.entity.Villager;
import com.ellewright.villagr.service.VillagerService;

@RestController
@RequestMapping("api/villagers")
public class VillagerController {
    @Autowired
    private VillagerService villagerService;

    @GetMapping
    public ResponseEntity<List<Villager>> getAllMovies() {
        return new ResponseEntity<List<Villager>>(villagerService.allVillagers(), HttpStatus.OK);
    }
}
