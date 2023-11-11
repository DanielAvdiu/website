import { useState } from 'react';
import { Navbar, Footer } from './components/';
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import { Home, About, Learn, Stories, Products, Motivation, StoryForm, Treatments } from "./pages";
import './App.css';


function App() {

  return (
    <div className="App flex-col">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/stories" element={<Stories />} />
        <Route path="/treatments" element={<Treatments />} />
        <Route path="/about" element={<About />} />
        <Route path="/learn" element={<Learn />} />
        <Route path="/motivation" element={<Motivation />} />
        <Route path="/form" element={ <StoryForm /> } />
      </Routes>
      <Footer className="sticky" />
    </div>
  )
}

export default App;
