package com.ellewright.villagr;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.core.env.Environment;
import org.springframework.stereotype.Component;

import jakarta.annotation.PostConstruct;

@Component
public class EnvLogger {
    @Autowired
    Environment env;

    @PostConstruct
    public void logMongoDatabase() {
        System.out.println("Loaded mongo DB from Spring Environment: " + env.getProperty("env.MONGO_DATABASE"));
    }
}
