import Header from "./components/Header"
import WeekView from "./components/WeekView"
import "./App.css"

function App() {
  return (
    <div className="app">
      <Header />
      <main className="calendar-container">
        <WeekView referenceDate={new Date()} />
      </main>
    </div>
  )
}

export default App
