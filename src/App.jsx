import Home from "./pages/Home.jsx";
import About from "./pages/About.jsx";
import Courses from "./pages/Courses.jsx";
import { BrowserRouter as Router, Route,Routes } from "react-router-dom";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
         <Route path="/about" element={<About/>} />
         <Route path="/courses" element={<Courses/>} />
      </Routes>
  
    </Router>
  )
}

export default App
