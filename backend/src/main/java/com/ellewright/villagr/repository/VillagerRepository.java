package com.ellewright.villagr.repository;

import org.bson.types.ObjectId;
import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;

import com.ellewright.villagr.entity.Villager;

@Repository
public interface VillagerRepository extends MongoRepository<Villager, ObjectId> {

}
