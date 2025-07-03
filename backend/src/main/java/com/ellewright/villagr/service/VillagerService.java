package com.ellewright.villagr.service;

import java.util.List;
import java.util.Optional;

import org.bson.types.ObjectId;
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

    public List<Villager> allVillagersByGender(String gender) {
        return villagerRepository.findByGender(gender);
    }

    public List<Villager> allVillagersByJob(String job) {
        return villagerRepository.findByJob(job);
    }

    public Villager fetchVillager(ObjectId id) throws Exception {
        Optional<Villager> optional = villagerRepository.findById(id);

        if (optional.isPresent()) {
            return optional.get();
        }

        throw new Exception("Villager not found!");
    }
}
