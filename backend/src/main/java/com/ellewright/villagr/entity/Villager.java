package com.ellewright.villagr.entity;

import org.bson.types.ObjectId;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

import lombok.Data;
import lombok.NoArgsConstructor;
import lombok.AllArgsConstructor;

@Document(collection = "villagers")
@Data
@NoArgsConstructor
@AllArgsConstructor
public class Villager {
    @Id
    private ObjectId id;
    private ObjectId jobId;
    private String gender;
    private String name;
}
