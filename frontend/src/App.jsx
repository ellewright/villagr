import { useEffect, useState } from 'react'
import './App.css'
import { fetchVillagers } from './api/config';

function App() {
  const [villagers, setVillagers] = useState([]);

  useEffect(() => {
    async function loadData() {
      const data = await fetchVillagers();
      setVillagers(data);
    }

    loadData()
  }, [])

  return (
    <>
      {villagers.map((villager) => (
        <h1 key={villager.id}>
          {villager.name}
        </h1>
      ))}
    </>
  )
}

export default App
