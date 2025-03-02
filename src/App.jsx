import Navbar from "./components/Navbar"
import Home from "./pages/Home"
import './App.css'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"

function App() {

  return (
    
    <Router>
      <div>
        <div className="App">
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
          </Routes>
        </div>
      </div>
    </Router>
  )
}

export default App
