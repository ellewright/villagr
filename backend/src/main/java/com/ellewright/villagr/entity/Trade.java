package com.ellewright.villagr.entity;

import org.bson.types.ObjectId;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Document(collection = "trades")
@Data
@NoArgsConstructor
@AllArgsConstructor
public class Trade {
    @Id
    private ObjectId id;
    private ObjectId villagerId;
    private ObjectId jobId;
    private int bidQuantity;
    private String bid;
    private int askQuantity;
    private String ask;
}
