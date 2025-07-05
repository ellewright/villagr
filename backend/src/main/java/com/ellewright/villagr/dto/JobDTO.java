package com.ellewright.villagr.dto;

import org.bson.types.ObjectId;

import com.ellewright.villagr.entity.Job;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
public class JobDTO {
    private String id;
    private String title;
    private String workstation;

    public JobDTO(Job job) {
        Object idObj = job.getId();

        if (idObj instanceof ObjectId) {
            this.id = ((ObjectId) idObj).toHexString();
        } else if (idObj != null) {
            this.id = idObj.toString();
        } else {
            this.id = null;
        }

        this.title = job.getTitle();
        this.workstation = job.getWorkstation();
    }
}
