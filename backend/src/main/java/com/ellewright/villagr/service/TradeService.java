package com.ellewright.villagr.service;

import java.util.List;
import java.util.stream.Collectors;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.ellewright.villagr.dto.TradeDTO;
import com.ellewright.villagr.entity.Trade;
import com.ellewright.villagr.repository.TradeRepository;

@Service
public class TradeService {
    @Autowired
    private TradeRepository tradeRepository;

    public List<TradeDTO> allTrades() {
        List<Trade> trades = tradeRepository.findAll();
        return trades.stream().map(TradeDTO::new).collect(Collectors.toList());
    }
}
