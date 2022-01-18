import './App.css';
import About from './components/About';
import Facts from './components/Facts';
import HamNav from './components/HamNav';
import Header from './components/Header';
import SideNav from './components/SideNav';
import Skills from './components/Skills';
import Resume from './components/Resume';

import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";
import Services from './components/Services';
import Testimonials from './components/Testimonials';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <>
    <Router>
    <Header/>
    <HamNav/>
    <SideNav/>
    <About/>
    <Facts/>
    <Skills/>
    <Resume/>
    <Services/>
    <Testimonials/>
    <Contact/>
    <Footer/>
    </Router>
    
    </>
  );
}

export default App;
