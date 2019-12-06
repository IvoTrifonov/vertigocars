import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import "./site.css";
import Header from "./components/header";
import Main from "./components/main";
import Footer from "./components/footer";
import ContextWrapper from "./components/contextWrapper";

const App = () => {
  return (
    <ContextWrapper>
      <div className="App">
        <Router>
          <Header />
          <Main />
        </Router>
        <Footer />
      </div>
    </ContextWrapper>
  );
};

export default App;
