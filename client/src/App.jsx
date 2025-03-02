import Home from "./pages/Home"
import About from "./pages/About"
import Submit from "./pages/Submit"
import Story from "./pages/Story"
import './App.css'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"

function App() {

  return (
    
    <Router>
      <div>
        <div className="App">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/submit" element={<Submit />} />
            <Route path="/story/:id" element={<Story />} />
          </Routes>
        </div>
      </div>
    </Router>
  )
}

export default App
