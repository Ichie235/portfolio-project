import React from 'react';
import './App.css';
import Home from './page/Home';
import About from './components/About';
import Contact from './components/Contact';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Footer from './components/Footer'
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";

function App() {
  return (
    <React.Fragment>
    <Router>
      <header class="header">
    <nav class="navbar container">

     <div class="logo">Ichie Chinemerem</div> 

    <ul class="navbar-list">
      <input type="checkbox" id="checkbox_toggle"/>
      <label for="checkbox_toggle" class="hamburger">&#9776;</label>
      <div class="menu">
      <li class="list">
      <Link class="navbar-link" to="/">Home</Link>
      </li>
      <li class="list">
      <Link class="navbar-link" to="/about">About</Link>
    </li>
      <li class="list">
      <Link class="navbar-link" to="/contact">Contact</Link>
      </li>
      <li class="list">
      <Link class="navbar-link" to="/project">Projects</Link>
      </li>
      <li class="list">
      <Link class="navbar-link" to="/skill">Skills</Link>
      </li>
      </div>
    </ul>
  </nav>
  <Routes>
      <Route exact path='/' element={<Home />}></Route>
      <Route exact path='/about' element={<About />}></Route>
      <Route exact path='/contact' element={<Contact />}></Route>
      <Route exact path='/skill' element={<Skills />}></Route>
      <Route exact path='/project' element={<Projects />}></Route>
      <Route exact path='/footer' element={<Footer />}></Route>
      </Routes>
      </header>
  </Router>
  <Footer />
  </React.Fragment>

    
  );
}

export default App;
