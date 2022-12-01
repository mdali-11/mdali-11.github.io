// import logo from './logo.svg';
import './App.css';
// import Navbar from './Old_Component/Navbar';
// import Navbar  from './Components/Navbar';
// import About from './Components/About';
// import Contact from './Components/Contact';
// import Projects from './Components/Projects';
// import Github from './Components/Github';
// import Skills from './Components/Skills';
import {useEffect} from "react"
import Navbar from './NewComp/Navbar';
import About from './NewComp/About';
import Projects from './NewComp/Projects';
import Skills from './NewComp/Skills';
import Github from './NewComp/Github';
import Contact from './NewComp/Contact';





function App() {

  useEffect(()=>{
    document.title="Md Ali Portfolio"
  },[])
  return <div id="app">
  <Navbar />
  <About />
  <Projects />
  <Skills />
  <Github />
  <Contact />

  
    {/* <About />
    <Projects />
    <Skills />
    <Github />
    <Contact />  */}
    </div>
}

export default App;
