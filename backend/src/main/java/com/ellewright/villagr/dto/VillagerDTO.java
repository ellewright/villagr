package com.ellewright.villagr.dto;

import org.bson.types.ObjectId;

import com.ellewright.villagr.entity.Villager;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
public class VillagerDTO {
    private String id;
    private String jobId;
    private String name;
    private String gender;

    // Custom constructor to map from Villager entity
    public VillagerDTO(Villager villager) {
        Object idObj = villager.getId();
        if (idObj instanceof ObjectId) {
            this.id = ((ObjectId) idObj).toHexString();
        } else if (idObj != null) {
            this.id = idObj.toString();
        } else {
            this.id = null;
        }

        Object jobIdObj = villager.getJobId();
        if (jobIdObj instanceof ObjectId) {
            this.jobId = ((ObjectId) jobIdObj).toHexString();
        } else if (jobIdObj != null) {
            this.jobId = jobIdObj.toString();
        } else {
            this.jobId = null;
        }

        this.name = villager.getName();
        this.gender = villager.getGender();
    }
}