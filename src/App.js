import React from 'react';
import { Link } from 'react-scroll';
import './App.css';
import Home from './Home';
import BeforeAfterSlider from './BeforeAfterSlider';
import CardComponent from './CardComponent';
import Image from './images/logo.png';

function App() {
  return (
    <div className="wrapper">
      <nav>
      <Link to="home" spy={true} smooth={true} offset={-70} duration={500}>
        <img src={Image} alt='logo' />
        </Link>
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
        <div className="App">
          <h2>Contact Us</h2>
          <CardComponent
            name="John Doe"
            email="john.doe@example.com"
            phone="123-456-7890"
            profileImage="https://randomuser.me/api/portraits/men/75.jpg"
          />
        </div>
      </div>
    </div>
  );
}

export default App;
