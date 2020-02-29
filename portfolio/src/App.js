import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import {BrowserRouter as Router, Route, Link } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import NavbarBrand from 'react-bootstrap/NavbarBrand';
import Nav from 'react-bootstrap/Nav';

import Footer from './components/Footer';
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import ContactPage from './pages/ContactPage';

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
     <Router>
       <Container className="p-0" fluid={true}>
        <Navbar className="border-bottom" bg="transparent" expand="lg">
          <Navbar.Brand> Joel Falk </Navbar.Brand>
            
            <Navbar.Toggle className="border-0" aria-controls="navbar-toggle" />
              <Navbar.Collapse id="navbar-toggle">
                <Nav className="ml-auto">
                  <Link className="nav-link" to="/">Home</Link>
                  <Link className="nav-link" to="/about">About</Link>
                  <Link className="nav-link" to="/contact">Contact</Link>
                
                
                </Nav>
              </Navbar.Collapse>
            </Navbar>
            <Route path="/" exact render={() => <HomePage title={this.state.home.title} subTitle={this.state.home.subTitle} texts={this.state.home.texts}/>}/>
            <Route path="/contact" exact render={() => <ContactPage title={this.state.contact.title} subTitle={this.state.about.subTitle} />}/>
            <Route path="/about" exact render={() => <AboutPage title={this.state.about.title} subTitle={this.state.about.subTitle}/>}/>

        <Footer/>
       </Container>
      </Router>
    );
  }
}

export default App;
