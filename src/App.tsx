import Header from "./components/Header"
import MonthView from "./components/MonthView"
import "./App.css"

function App() {
  return (
    <div className="app">
      <Header />
      <main className="calendar-container">
        <MonthView referenceDate={new Date()} />
      </main>
    </div>
  )
}

export default App
