import Header from "./components/Header"
import "./App.css"

function App() {
  return (
    <div className="app">
      <Header />
      <main className="calendar-container">
        <p className="placeholder">El calendario va a vivir acá</p>
      </main>
    </div>
  )
}

export default App
