import { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import MobileOverlay from './components/MobileOverlay';
import Navbar from './components/Navbar';
import Header from './components/Header';
import Skills from './components/Skills';
import Workflow from './components/Workflow';
import Projects from './components/Projects';
import Footer from './components/Footer';

function App() {
  const [isMobileOverlayVisible, setMobileOverlayVisible] = useState(false);

  const toggleMobileOverlay = () => {
    setMobileOverlayVisible(!isMobileOverlayVisible);
  };

  return (
    <div className="App">
      <MobileOverlay isVisible={isMobileOverlayVisible} toggleMobileOverlay={toggleMobileOverlay}  />
      <Navbar toggleMobileOverlay={toggleMobileOverlay} />
      <Header />
      <Skills />
      <Workflow />
      <Projects />
      <Footer />
    </div>    
  );
}
export default App;
