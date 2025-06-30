package com.ellewright.villagr.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.ellewright.villagr.entity.Villager;
import com.ellewright.villagr.repository.VillagerRepository;

@Service
public class VillagerService {
    @Autowired
    private VillagerRepository villagerRepository;

    public List<Villager> allVillagers() {
        return villagerRepository.findAll();
    }
}
