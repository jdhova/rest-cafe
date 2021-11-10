import './App.css';
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
//import { Routes ,Route } from 'react-router-dom';
import Mainpage from './components/Mainpage';
import Footer from './components/Footer';
import Drinks from './components/Drinks';
import Menu from './components/Menu';

const App = () => {
  return (
    <div className='App'>
      <Router>
        <Routes>
          <Route path='/' exact element={<Mainpage />} />
          {/* this returns the exact home component when we vsit '/' */}
          {/* Route exact path="/" component={Home} /> */}
        </Routes>
      </Router>
    </div>
  );
};

export default App;

// Make nav bar
// Put Nav bar in app.js and create routes
// Create Basic Home page with video and center

// Routing
// Home page displays all Routes
// Individial routes displays individial components

// Day 2
// Ovelap video, fixup css, responsive, primay color,
// use props for navlinks and colors etc  think something

// create other sections menu and slide bar on home page

// Make responsive
// Make video overlap with nav.
// implement primary colors on the hover for nav link
