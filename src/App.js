import './App.css';
import NavBar from './components/Navbar/Navbar'
import Landing from './components/Landing/Landing'
import Tale from './components/Tale/Tale'
import Ready from './components/Ready/Ready'
import Tracks from './components/Tracks/Tracks'
import Sponsors from './components/Sponsors/Sponsors'

function App() {
  return (
    <div className="App">
      <NavBar />
      <Landing />
      <Tale />
      <Ready />
      <Tracks />
      <Sponsors />
    </div>
  );
}

export default App;
