package com.ellewright.villagr.repository;

import org.bson.types.ObjectId;
import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;

import com.ellewright.villagr.entity.Job;

@Repository
public interface JobRepository extends MongoRepository<Job, ObjectId> {

}
