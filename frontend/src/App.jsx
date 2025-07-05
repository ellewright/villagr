import React, { useEffect, useState } from "react";
import styles from "./App.module.css";
import { fetchVillagers } from "./api/villager";
import { fetchJobs } from "./api/job";
import HomePage from "./pages/HomePage/HomePage";

function App() {
  return (
    <>
      <HomePage />
    </>
  )
}

export default App;