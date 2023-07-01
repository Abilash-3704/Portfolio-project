import './App.css';
import {useState} from 'react';
import About from './components/About';
import Facts from './components/Facts';
import HamNav from './components/HamNav';
import Header from './components/Header';
import SideNav from './components/SideNav';
import Skills from './components/Skills';
import Resume from './components/Resume';

import {HashRouter as Router, Routes, Route, Link} from 'react-router-dom';
import Services from './components/Services';
import Testimonials from './components/Testimonials';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  // const [state,setState]=useState(false);
  // const themehandler=()=>{
  //   setState(!state)
  //   if(state===false){
  //     document.body.style.backgroundColor='black';
  //     document.body.style.color='white';
  //     document.querySelector('.ham').style.backgroundColor='black';
  //     document.querySelector('.theme').style.backgroundColor='black';
  //     document.querySelector('.theme').style.color='white';

  //   }
  //   else{
  //     document.body.style={backgroundColor:'none',color:'none'};
  //     document.querySelector('.ham').style.backgroundColor='white';
  //     document.querySelector('.theme').style.backgroundColor='#f2f3f5';
  //     document.querySelector('.theme').style.color='#45505b';

  //   }

  return (
    <>
      <Router>
        {/* <button className='theme' onClick={()=>themehandler()}><i class="fas fa-adjust"></i></button> */}
        <Header />
        <HamNav />
        <SideNav />
        <About />
        {/* <Facts/> */}
        <Skills />
        <Resume />
        {/* <Services/> */}
        {/* <Testimonials/> */}
        <Contact />
        {/* <Footer /> */}
      </Router>
    </>
  );
}

export default App;
