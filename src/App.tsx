import './App.css';
import {HashRouter as Router, Routes, Route} from "react-router-dom";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Technologies from "./components/Technologies";
import Skills from "./components/Skills";
import Contact from "./components/Contact";
import Experience from './components/Experience';
import {useEffect, useState} from "react";

function App() {
    const [darkMode, setDarkMode] = useState(() => {
        return localStorage.getItem('theme') === 'dark';
    });

    useEffect(() => {
        if (darkMode) {
            document.documentElement.classList.add('dark');
            localStorage.setItem('theme', 'dark');
        } else {
            document.documentElement.classList.remove('dark');
            localStorage.setItem('theme', 'light');
        }
    }, [darkMode]);

    return (
        <Router>
            <Navbar toggleTheme={() => setDarkMode(!darkMode)} isDark={darkMode} />
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
