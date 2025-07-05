package com.ellewright.villagr.service;

import java.util.List;
import java.util.Optional;

import org.bson.types.ObjectId;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.ellewright.villagr.entity.Job;
import com.ellewright.villagr.repository.JobRepository;

@Service
public class JobService {
    @Autowired
    private JobRepository jobRepository;

    public List<Job> allJobs() {
        return jobRepository.findAll();
    }

    public Job fetchJob(ObjectId id) throws Exception {
        Optional<Job> optional = jobRepository.findById(id);

        if (optional.isPresent()) {
            Job job = optional.get();
            return job;
        }

        throw new Exception("Job not found!");
    }
}
