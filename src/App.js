import './App.css';
// import Particles from 'react-particles-js';
import NavBar from './components/Navbar/Navbar'
import Landing from './components/Landing/Landing'
import Tale from './components/Tale/Tale'
import Ready from './components/Ready/Ready'
import Tracks from './components/Tracks/Tracks'
import Sponsors from './components/Sponsors/Sponsors'
import Community from './components/Community/Community'
import OC from './components/OC/OC'
import Prizes from './components/Prizes/Prizes'
import FAQ from './components/FAQ/FAQ'
import CTA from './components/CTA/CTA'
import Footer from './components/Footer/Footer'



import AOS from "aos";
import "aos/dist/aos.css";
AOS.init();

function App() {
    return ( 
    <div className = "App" >
        <NavBar / >
        <Landing / >
        <Tale / >
        <Ready / >
        <Tracks / >
        <Sponsors / >
        <Community / >
        <OC / >
        <Prizes / >
        <FAQ / >
        <CTA / >
        <Footer / >
        </div>
    );
}

export default App;