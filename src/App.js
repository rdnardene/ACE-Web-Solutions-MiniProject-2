import React from 'react';
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import './App.css';
import Home from './pages/Home';
import Portfolio from './pages/Portfolio';
import About from './pages/About';
import Contact from './pages/Contact';
import Signup from './pages/Signup';
import Thankyou from './pages/Thankyou';
import FooterSection from './components/Footer';

function App() {
  return (
    <>
      <Router>
      <Navbar />
        <Routes>
          <Route exact path = '/' element = {<Home />} />
          <Route exact path = '/Portfolio' element = {<Portfolio />} />
          <Route exact path = '/About' element = {<About />} />
          <Route exact path = '/Contact' element = {<Contact />} />
          <Route exact path = '/Signup' element = {<Signup />} />
          <Route exact path= '/Thankyou' element ={<Thankyou/>} />
        </Routes>
      <FooterSection/>
    </Router>
    </>
  );
}

export default App;
