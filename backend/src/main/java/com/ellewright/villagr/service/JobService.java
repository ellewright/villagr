package com.ellewright.villagr.service;

import java.util.List;
import java.util.Optional;
import java.util.stream.Collectors;

import org.bson.types.ObjectId;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.ellewright.villagr.dto.JobDTO;
import com.ellewright.villagr.entity.Job;
import com.ellewright.villagr.repository.JobRepository;

@Service
public class JobService {
    @Autowired
    private JobRepository jobRepository;

    public List<JobDTO> allJobs() {
        List<Job> jobs = jobRepository.findAll();
        return jobs.stream().map(JobDTO::new).collect(Collectors.toList());
    }

    public JobDTO fetchJob(ObjectId id) throws Exception {
        Optional<Job> optional = jobRepository.findById(id);

        if (optional.isPresent()) {
            Job job = optional.get();
            return new JobDTO(job);
        }

        throw new Exception("Job not found!");
    }

    public JobDTO fetchJobByTitle(String title) throws Exception {
        Optional<Job> optional = jobRepository.findByTitle(title);

        if (optional.isPresent()) {
            Job job = optional.get();
            return new JobDTO(job);
        }

        throw new Exception("Job not found!");
    }
}
