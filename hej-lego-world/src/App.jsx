import { useState } from 'react';

import HeroHeader from "./components/HeroHeader"
import Sidebar from "./components/Sidebar"
import SetOverzicht from "./components/SetOverzicht"
import sets from"./assets/data/sets.json"


function App() {
  const [searchTerm, setSearchTerm] = useState("");
  const filteredSets = sets.sets.filter(set => {
    return set.name.toLowerCase().includes(searchTerm) || set.setNumber.includes(searchTerm);
  });

  return (
    <div className="app-shell">
      <HeroHeader />
      <main className="layout">
        <Sidebar searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
        <SetOverzicht sets={filteredSets} />
      </main>
    </div>
  )
}

export default App
