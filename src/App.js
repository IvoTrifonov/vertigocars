import React from 'react';
import './site.css';
import Header from './Header';
import Main from './Main';
import { BrowserRouter as Router } from "react-router-dom";
import Footer from './Footer';

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
