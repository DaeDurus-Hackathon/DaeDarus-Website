import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./App.css";
import NavBar from "./components/Navbar/Navbar";
import Landing from "./components/Landing/Landing";
import Register from "./components/Register/Register";
import Tale from "./components/Tale/Tale";
import Ready from "./components/Ready/Ready";
import Tracks from "./components/Tracks/Tracks";
import Sponsors from "./components/Sponsors/Sponsors";
import Community from "./components/Community/Community";
import OC from './components/OC/OC'
import Speakers from "./components/Speakers/Speakers";
import Prizes from "./components/Prizes/Prizes";
import FAQ from "./components/FAQ/FAQ";
import CTA from "./components/CTA/CTA";
import Footer from "./components/Footer/Footer";
import Video from "./components/Video/Video";
import JM from "./components/JM/JM";

import AOS from "aos";
import "aos/dist/aos.css";
AOS.init();

function App() {
  return (
    <Router>
      <div className="App">
        <NavBar />

        <div className="content">
          <Switch>

            <Route path="/register">
              <Register/>
            </Route>

            <Route path="/organizers">
              <OC/>
            </Route>

            <Route path="/">
              <Landing />
              <Tale />
              <Ready />
              <Video url = "https://www.youtube.com/watch?v=vLDuc15hA-o"/>
              <Tracks />
              <Sponsors />
              <Community />
              <JM />
              <Speakers />
              <Prizes />
              <FAQ />
              <CTA />
            </Route>
          </Switch>
        </div>

        <Footer />
      </div>
    </Router>
  );
}

export default App;
