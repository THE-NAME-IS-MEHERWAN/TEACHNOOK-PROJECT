import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navigation from './components/Navigation';
import Home from './pages/Home';
import AboutUs from './pages/AboutUs';
import Products from './pages/Products';
import Product1 from './pages/Product1';
import Product2 from './pages/Product2';
import Product3 from './pages/Product3';
import CompareAll from './pages/CompareAll';
import PreBook from './pages/PreBook';
import ContactUs from './pages/ContactUs';
import Rentals from './pages/Rentals';
import NotFound from './pages/NotFound';
import './App.css';

const App = () => {
  return (
    <Router>
      <Navigation />
      <Header />
      <Main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<AboutUs />} />
          <Route path="/products" element={<Products />} />
          <Route path="/product1" element={<Product1 />} />
          <Route path="/product2" element={<Product2 />} />
          <Route path="/product3" element={<Product3 />} />
          <Route path="/compare-all" element={<CompareAll />} />
          <Route path="/pre-book" element={<PreBook />} />
          <Route path="/contact" element={<ContactUs />} />
          <Route path="/rentals" element={<Rentals />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Main>
    </Router>
  );
};

const Header = () => {
  return (
    <header>
      <h1>Comparison Table</h1>
    </header>
  );
};

const Main = ({ children }) => {
  return <main>{children}</main>;
};

export default App;
