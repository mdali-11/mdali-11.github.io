// import logo from './logo.svg';
import './App.css';
// import Navbar from './Old_Component/Navbar';
import Navbar  from './Components/Navbar';
import About from './Components/About';
import { Contact } from "./Components/Contacts";
import Projects from './Components/Projects';
import Github from './Components/Github';
import Skills from './Components/Skills';
import {useEffect} from "react"



function App() {

  useEffect(()=>{
    document.title="Md Ali Portfolio"
  },[])
  return (
    <div className='App' style={{background:"#E4E6EB"}}>
    <Navbar />
    <About />
    <Projects />
    <Skills />
    <Github />
    <Contact />

    </div>
  );
}

export default App;
