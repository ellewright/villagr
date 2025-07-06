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

import com.ellewright.villagr.dto.TradeDTO;
import com.ellewright.villagr.service.TradeService;

@RestController
@RequestMapping("api/trades")
@CrossOrigin(origins = "http://localhost:5173", allowCredentials = "true")
public class TradeController {
    @Autowired
    private TradeService tradeService;

    @GetMapping
    public ResponseEntity<List<TradeDTO>> getAllTrades() {
        try {
            return new ResponseEntity<List<TradeDTO>>(tradeService.allTrades(), HttpStatus.OK);
        } catch (Exception e) {
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }
    }

    @GetMapping("/{id}")
    public ResponseEntity<List<TradeDTO>> getTradesByVillagerId(@PathVariable String id) {
        try {
            ObjectId villagerId = new ObjectId(id);
            return new ResponseEntity<List<TradeDTO>>(tradeService.fetchTradesByVillagerId(villagerId), HttpStatus.OK);
        } catch (Exception e) {
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }
    }
}
