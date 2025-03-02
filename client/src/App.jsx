import Navbar from "./components/Navbar"
import Home from "./pages/Home"
import Submit from "./pages/Submit"
import Story from "./pages/Story"
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
            <Route path="/story/:id" element={<Story />} />
          </Routes>
        </div>
      </div>
    </Router>
  )
}

export default App
