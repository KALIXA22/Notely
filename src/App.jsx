
import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'; // Import BrowserRouter
import './App.css';
import Home from '../src/pages/Home';

function App() {
  return (
    <>
    <Router> 
      <Routes>
        <Route path='/' exact Component={Home}></Route>
      </Routes>
      </Router>

      </>
  )}
  export default App;