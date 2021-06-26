import React from 'react'
import './App.css';
import NavBar from './components/Navbar/Navbar'
import Landing from './components/Landing/Landing'
import Tale from './components/Tale/Tale'
import Ready from './components/Ready/Ready'
import Tracks from './components/Tracks/Tracks'
import Sponsors from './components/Sponsors/Sponsors'
import Community from './components/Community/Community'
// import OC from './components/OC/OC'
import Speakers from './components/Speakers/Speakers';
import Prizes from './components/Prizes/Prizes'
import FAQ from './components/FAQ/FAQ'
import CTA from './components/CTA/CTA'
import Footer from './components/Footer/Footer'
// import Preloader from './components/Preloader/Preloader';


import AOS from "aos";
import "aos/dist/aos.css";
AOS.init();

function App() {
    return ( 
    <div className = "App" >
        {/* <Preloader/> */}
        <NavBar />
        <Landing />
        <Tale />
        <Ready />
        <Tracks />
        <Sponsors />
        <Community />
        {/* <OC / > */}
        <Speakers/>
        <Prizes />
        <FAQ />
        <CTA />
        <Footer />
        </div>
    );
}

export default App;