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
  return (
    <div className="App">
      <MobileOverlay />
      <Navbar />
      <Header />
      <Skills />
      <Workflow />
      <Projects />
      <Footer />
    </div>    
  );
}
export default App;
