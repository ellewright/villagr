// package com.ellewright.villagr.entity;

// import jakarta.persistence.Column;
// import jakarta.persistence.Entity;
// import jakarta.persistence.Id;
// import jakarta.persistence.Table;

// I have no idea why this file currently makes the entire API fail to
// disconnect,
// but I quite frankly don't have the time to figure it out right now. If I
// can't
// figure it out soon I'll probably just restart using MongoDB instead of
// PostgreSQL

// @Entity
// @Table
// public class Villager {
// @Id
// @Column(name = "id")
// private int id;

// @Column(name = "name")
// private String name;

// @Column(name = "job")
// private String job;

// public Villager() {
// }

// public Villager(int id, String name, String job) {
// this.id = id;
// this.name = name;
// this.job = job;
// }

// public int getId() {
// return id;
// }

// public void setId(int id) {
// this.id = id;
// }

// public String getName() {
// return name;
// }

// public void setName(String name) {
// this.name = name;
// }

// public String getJob() {
// return job;
// }

// public void setJob(String job) {
// this.job = job;
// }
// }