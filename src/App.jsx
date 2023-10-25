import { useState } from 'react';
import reactLogo from './assets/react.svg';
import { Navbar, Footer } from './components/';
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import { Home, About, Learn, Stories, Products, Motivation } from "./pages";
import './App.css';


function App() {

  return (
    <div className="App flex-col">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/stories" element={<Stories />} />
        <Route path="/about" element={<About />} />
        <Route path="/learn" element={<Learn />} />
        <Route path="/products" element={<Products />} />
        <Route path="/motivation" element={<Motivation />} />
      </Routes>
      <Footer className="sticky" />
    </div>
  )
}

export default App;
