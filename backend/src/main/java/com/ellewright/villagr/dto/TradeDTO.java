package com.ellewright.villagr.dto;

import org.bson.types.ObjectId;

import com.ellewright.villagr.entity.Trade;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
public class TradeDTO {
    private String id;
    private String villagerId;
    private String jobId;
    private int bidQuantity;
    private String bid;
    private int askQuantity;
    private String ask;

    public TradeDTO(Trade trade) {
        Object idObj = trade.getId();
        if (idObj instanceof ObjectId) {
            this.id = ((ObjectId) idObj).toHexString();
        } else if (idObj != null) {
            this.id = idObj.toString();
        }

        Object villagerIdObj = trade.getVillagerId();
        if (villagerIdObj instanceof ObjectId) {
            this.villagerId = ((ObjectId) villagerIdObj).toHexString();
        } else if (villagerIdObj != null) {
            this.villagerId = villagerIdObj.toString();
        }

        Object jobIdObj = trade.getJobId();
        if (jobIdObj instanceof ObjectId) {
            this.jobId = ((ObjectId) jobIdObj).toHexString();
        } else if (jobIdObj != null) {
            this.jobId = jobIdObj.toString();
        }

        this.bidQuantity = trade.getBidQuantity();
        this.bid = trade.getBid();
        this.askQuantity = trade.getAskQuantity();
        this.ask = trade.getAsk();
    }
}
