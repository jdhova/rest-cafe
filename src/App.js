import './App.css';
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
//import { Routes ,Route } from 'react-router-dom';
import Mainpage from './components/Mainpage';

const App = () => {
  return (
    <div className='App'>
      <Router>
        <Navbar />
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
// Make responsive
// Make video overlap with nav.
