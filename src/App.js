import { BrowserRouter as Router } from 'react-router-dom';
import Home from './pages/Home';
import Teams from './pages/Teams';
import Schedule from './pages/Schedule';
import Contact from './pages/Contact';
import Navbar from './pages/Navbar';  // Ensure your Navbar component is well-configured
import Footer from './pages/Footer';  // Import the Footer component
import 'bootstrap/dist/css/bootstrap.min.css';  // Import Bootstrap CSS
import './index.css';

function App() {
  return (
    <Router>
      <div>
        <Navbar />  {/* Fixed navbar */}
        <div data-bs-spy="scroll" data-bs-target=".navbar" data-bs-offset="0" className="scrollspy-example" tabIndex="0">
          <section id="home-section">
            <Home />
          </section>
          <section id="teams-section">  {/* Rearranged order */}
            <Teams />
          </section>
          <section id="schedule-section">  {/* Rearranged order */}
            <Schedule />
          </section>
          <section id="contact-section">
            <Contact />
          </section>
        </div>
        <Footer /> {/* Footer added */}
      </div>
    </Router>
  );
}

export default App;
