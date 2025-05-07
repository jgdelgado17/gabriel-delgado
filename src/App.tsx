import './App.css';
import {HashRouter as Router, Routes, Route} from "react-router-dom";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Technologies from "./components/Technologies";
import Skills from "./components/Skills";
import Contact from "./components/Contact";
import Experience from './components/Experience';

function App() {
    return (
        <Router>
            <Navbar/>
                <Routes>
                    <Route path="*" element={<Hero/>}/>
                    <Route path="/about" element={<About/>}/>
                    <Route path="/experience" element={<Experience/>}/>
                    <Route path="/technologies" element={<Technologies/>}/>
                    <Route path="/skills" element={<Skills/>}/>
                    <Route path="/contact" element={<Contact/>}/>
                </Routes>
        </Router>
    );
}

export default App;
