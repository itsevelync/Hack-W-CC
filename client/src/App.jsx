import Navbar from "./components/Navbar"
import Home from "./pages/Home"
import Submit from "./pages/Submit"
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
            <Route path="/submit" element={<Submit />} />
          </Routes>
        </div>
      </div>
    </Router>
  )
}

export default App
