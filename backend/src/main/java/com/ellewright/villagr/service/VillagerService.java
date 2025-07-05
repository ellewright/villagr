package com.ellewright.villagr.service;

import java.util.List;
import java.util.Optional;
import java.util.stream.Collectors;

import org.bson.types.ObjectId;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.ellewright.villagr.dto.VillagerDTO;
import com.ellewright.villagr.entity.Villager;
import com.ellewright.villagr.repository.VillagerRepository;

@Service
public class VillagerService {
    @Autowired
    private VillagerRepository villagerRepository;

    public List<VillagerDTO> allVillagers() {
        List<Villager> villagers = villagerRepository.findAll();
        return villagers.stream().map(VillagerDTO::new).collect(Collectors.toList());
    }

    public List<Villager> allVillagersByGender(String gender) {
        return villagerRepository.findByGender(gender);
    }

    public List<Villager> allVillagersByJob(ObjectId jobId) {
        return villagerRepository.findByJobId(jobId);
    }

    public Villager fetchVillager(ObjectId id) throws Exception {
        Optional<Villager> optional = villagerRepository.findById(id);

        if (optional.isPresent()) {
            return optional.get();
        }

        throw new Exception("Villager not found!");
    }

    public Villager patchVillager(ObjectId villagerId, Villager updatedVillager) throws Exception {
        Optional<Villager> optional = villagerRepository.findById(villagerId);

        if (optional.isPresent()) {
            Villager villager = optional.get();

            villager.setJobId(updatedVillager.getJobId());
            villager.setGender(updatedVillager.getGender());
            villager.setName(updatedVillager.getName());

            villagerRepository.save(villager);
            return villager;
        }

        throw new Exception("Villager not found!");
    }
}
