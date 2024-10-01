import React from 'react';
import { Link } from 'react-scroll';
import './App.css';
import Home from './Home';
import BeforeAfterSlider from './BeforeAfterSlider';

function App() {
  return (
    <div className="wrapper">
      <nav>
        <ul>
          <li>
            <Link to="home" spy={true} smooth={true} offset={-70} duration={500}>
              Home
            </Link>
          </li>
          <li>
            <Link to="about" spy={true} smooth={true} offset={-70} duration={500}>
              About Us
            </Link>
          </li>
          <li>
            <Link to="contacts" spy={true} smooth={true} offset={-70} duration={500}>
              Contacts
            </Link>
          </li>
        </ul>
      </nav>

      <div id="home" className="section">
        <Home />
      </div>

      <div id="about" className="section">
        <h2>About Us</h2>
        <p>We are a company dedicated to providing the best services.</p>
        <BeforeAfterSlider />
      </div>

      <div id="contacts" className="section">
        <h2>Contacts</h2>
        <p>Contact us at contact@ourcompany.com.</p>
      </div>
    </div>
  );
}

export default App;
