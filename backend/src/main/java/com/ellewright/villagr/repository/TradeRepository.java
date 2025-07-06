package com.ellewright.villagr.repository;

import java.util.List;

import org.bson.types.ObjectId;
import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;

import com.ellewright.villagr.entity.Trade;

@Repository
public interface TradeRepository extends MongoRepository<Trade, ObjectId> {
    List<Trade> findByVillagerId(ObjectId villagerId);
}
