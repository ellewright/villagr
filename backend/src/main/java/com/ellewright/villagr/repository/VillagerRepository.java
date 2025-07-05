package com.ellewright.villagr.repository;

import java.util.List;

import org.bson.types.ObjectId;
import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;

import com.ellewright.villagr.entity.Villager;

@Repository
public interface VillagerRepository extends MongoRepository<Villager, ObjectId> {
    List<Villager> findByGender(String gender);

    List<Villager> findByJobId(ObjectId jobId);

    Villager findByName(String name);
}
