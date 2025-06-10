import Home from "./pages/Home.jsx";
import About from "./pages/About.jsx";
import Courses from "./pages/Courses.jsx";
import Instructors from "./pages/Instructors.jsx";
import { BrowserRouter as Router, Route,Routes } from "react-router-dom";
import Login from "./pages/Login.jsx";
import Signup from "./pages/Signup.jsx";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
         <Route path="/about" element={<About/>} />
         <Route path="/courses" element={<Courses/>} />
         <Route path="/instructors" element={<Instructors/>} />
         <Route path="/login" element={<Login/>} />
         <Route path="/signup" element={<Signup/>}/>
      </Routes>
  
    </Router>
  )
}

export default App
