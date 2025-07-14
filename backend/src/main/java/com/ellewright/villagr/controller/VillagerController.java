package com.ellewright.villagr.controller;

import java.util.List;

import org.bson.types.ObjectId;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.ellewright.villagr.dto.VillagerDTO;
import com.ellewright.villagr.entity.Villager;
import com.ellewright.villagr.service.VillagerService;

@RestController
@RequestMapping("api/villagers")
@CrossOrigin(origins = "http://localhost:5173", allowCredentials = "true")
public class VillagerController {
    @Autowired
    private VillagerService villagerService;

    @GetMapping
    public ResponseEntity<List<VillagerDTO>> getAllVillagers() {
        try {
            return new ResponseEntity<List<VillagerDTO>>(villagerService.allVillagers(), HttpStatus.OK);
        } catch (Exception e) {
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }
    }

    @GetMapping("/gender/{gender}")
    public ResponseEntity<List<VillagerDTO>> getVillagersByGender(@PathVariable String gender) {
        try {
            return new ResponseEntity<List<VillagerDTO>>(villagerService.allVillagersByGender(gender), HttpStatus.OK);
        } catch (Exception e) {
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }
    }

    @GetMapping("/job/{id}")
    public ResponseEntity<List<VillagerDTO>> getVillagersByJobId(@PathVariable String id) {
        try {
            ObjectId jobId = new ObjectId(id);
            return new ResponseEntity<List<VillagerDTO>>(villagerService.allVillagersByJob(jobId),
                    HttpStatus.OK);
        } catch (Exception e) {
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }
    }

    @GetMapping("/{name}")
    public ResponseEntity<VillagerDTO> getVillagerByName(@PathVariable String name) {
        try {
            return new ResponseEntity<VillagerDTO>(villagerService.fetchVillagerByName(name), HttpStatus.OK);
        } catch (Exception e) {
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }
    }

    @PutMapping("/{id}")
    public ResponseEntity<Villager> updateVillager(@PathVariable String id, @RequestBody Villager updatedVillager) {
        try {
            ObjectId villagerId = new ObjectId(id);
            return new ResponseEntity<Villager>(villagerService.patchVillager(villagerId, updatedVillager),
                    HttpStatus.OK);
        } catch (Exception e) {
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }
    }
}
