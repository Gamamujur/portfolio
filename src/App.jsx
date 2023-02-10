import Navbar from "./components/Navbar";
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from "react";
import Home from "./components/Home";
import About from "./components/About";
import Skills from "./components/Skills";
import Portfolio from "./components/Portfolio";
import Contact from "./components/Contact";



function App() {
  useEffect(() => {
    AOS.init({
      duration: 800
    });
  }, []);
  return (
    
    <div className="w-full h-full">
      
      <Navbar/>
      <Home/>
      <About/>
      <Skills/>
      <Portfolio/>
      <Contact/>
      
    </div>
    
  );
}

export default App;
