import React, { Component } from 'react';
import './App.css';
import {BrowserRouter as Router} from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';

import Footer from './components/Footer';
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import ContactPage from './pages/ContactPage';
import PortfolioPage from "./pages/PortfolioPage";

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      title: 'Joel Falk',
      headerLinks: [
        { title: 'Home', path: '/'},
        { title: 'About', path: '/about'},
        { title: 'Contact', path: '/contact'}
      ],
      home: {
        title: 'Portfolio',
        subTitle: 'Current and previous projects',
        texts: 'Enough said'
      },
      about: {
        title: 'about me'
      },

      contact: {
        title: 'Let\'s keep in contact'
      }
    }
  }

  render() {
    return (
       <Container className="p-0" fluid={true}>
        <Navbar className="border-bottom"  bg="transparent" expand="lg">
            <Navbar.Toggle className="border-0" aria-controls="navbar-toggle" />
              <Navbar.Collapse id="navbar-toggle" className="d-flex justify-content-center">
                <Nav className="ml-auto">
                  <a className="nav-link" href="#home">Home</a>
                  <a className="nav-link" href="#portfolio">Portfolio</a>
                  <a className="nav-link" href="#about">About</a>
                  <a className="nav-link" href="#contact">Contact</a>
                </Nav>
              </Navbar.Collapse>
            </Navbar>

           <HomePage id="home" />
           <PortfolioPage id="portfolio" title={this.state.home.title} subTitle={this.state.home.subTitle} texts={this.state.home.texts}/>
           <AboutPage id="about" title={this.state.about.title} subTitle={this.state.about.subTitle}/>
           <ContactPage id="contact" title={this.state.contact.title} subTitle={this.state.about.subTitle} />
           <Footer/>
       </Container>
    );
  }
}

export default App;
