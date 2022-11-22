import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import About from "./pages/About";
import Works from "./pages/Works";
import Contact from "./pages/Contact";
import Resume from "./pages/Resume";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

function App() {
  return (
    <Router>
      <div className='App'>
        <Navbar />

        <Routes>
          <Route exact path='/' element={<About />} />
          <Route path='/works' element={<Works />} />

          <Route path='/contact' element={<Contact />} />
          <Route path='/resume' element={<Resume />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
