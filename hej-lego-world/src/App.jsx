import HeroHeader from "./components/HeroHeader"
import Sidebar from "./components/Sidebar"
import SetOverzicht from "./components/SetOverzicht"
import sets from"./assets/data/sets.json"


function App() {

  return (
    <div className="app-shell">
      <HeroHeader />
      <main className="layout">
        <Sidebar />
        <SetOverzicht sets={sets.sets} />
      </main>
    </div>
  )
}

export default App
