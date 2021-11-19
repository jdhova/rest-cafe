import './App.css';
// import Navbar from './components/Navbar';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
//import { Routes ,Route } from 'react-router-dom';
import Mainpage from './components/Mainpage';
import Soups from './components/Soups';
import Rice from './components/Rice';
import Swallow from './components/Swallow';
// import Footer from './components/Footer';
// import Drinks from './components/Drinks';
import Menu from './components/Menu';

const App = () => {
  return (
    <div className='App'>
      <Router>
        <Routes>
          <Route path='/' exact element={<Mainpage />} />
          <Route path='/soups' exact element={<Soups />} />
          <Route path='/Swallow' exact element={<Swallow />} />
          <Route path='/Rice' exact element={<Rice />} />
          <Route path='/soups' exact element={<Soups />} />
          <Route path='/menu' exact element={<Menu />} />
          {/* this returns the exact home component when we vsit '/' */}
          {/* Route exact path="/" component={Home} /> */}
        </Routes>
      </Router>
    </div>
  );
};

export default App;

// implement primary colors on the hover for nav link
// improve on colors and nav bar links add effects and
// what it should be

// menu soups etc  fix so they show with photos//
// arrange background phootos for each section and back link
// designs as well.

// indent CSS to be clear and demacated.

// check for respoinsiveness when all is done

// add price tags and incoporate shopping cart.

//add slides

//fix photos for soup rice main menu then homepage and footer
// start incoporating shopping cart
