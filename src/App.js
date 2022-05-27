import React from 'react'
// import logo from './logo.svg';
import { BrowserRouter as Router } from "react-router-dom"
import './App.css'

import Footer from "./components/Footer"
import NavBar from "./components/Navbar"
import Main from "./components/Main"

function App() {
  return (
    <Router>
      <div className="App">
        <NavBar />
        <Main />
        <Footer />
      </div>
    </Router>
  );
}

export default App;
