package com.ellewright.villagr.controller;

import java.util.List;

import org.bson.types.ObjectId;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.ellewright.villagr.dto.JobDTO;
import com.ellewright.villagr.service.JobService;

@RestController
@RequestMapping("api/jobs")
@CrossOrigin(origins = "http://localhost:5173", allowCredentials = "true")
public class JobController {
    @Autowired
    private JobService jobService;

    @GetMapping
    public ResponseEntity<List<JobDTO>> getAllJobs() {
        try {
            return new ResponseEntity<List<JobDTO>>(jobService.allJobs(), HttpStatus.OK);
        } catch (Exception e) {
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }
    }

    @GetMapping("/{id}")
    public ResponseEntity<JobDTO> getJobById(@PathVariable String id) {
        try {
            ObjectId jobId = new ObjectId(id);
            return new ResponseEntity<JobDTO>(jobService.fetchJob(jobId), HttpStatus.OK);
        } catch (Exception e) {
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }
    }
}
