import logo from './logo.svg';
import './App.css';
import Navbar from './Components/Navbar';
import About from './Pages/About';
import Contact from './Pages/Contact';
import Home from './Pages/Home';
import Skills from './Pages/Skiils';
import Projects from './Pages/Projects';
import Footer from './Pages/Footer';
import { useState } from 'react';



function App() {

  const [loading,setLoading] = useState(true);
  const container = document.getElementById("container-section");
  if(container)
  {
    setTimeout(()=>{
      container.style.display = 'none';
      setLoading(false);
    },5000)
  }

  return (
    !loading && (<div className="App">
    <Navbar />
    <Home/>
    <About />
    <Skills />
    <Projects/>
    <Contact/>
    <Footer/>
  </div>)
  );
}

export default App;
