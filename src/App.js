import React from 'react';
import { BrowserRouter as Router } from "react-router-dom";
import './site.css';
import Header from './components/header';
import Main from './components/main';
import Footer from './components/footer';


function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <Main/>
        <Footer/>
      </Router>
    </div>
  );
}

export default App;
