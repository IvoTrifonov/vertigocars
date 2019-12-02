import React from 'react';
import { BrowserRouter as Router } from "react-router-dom";
import './site.css';
import Header from './components/header';
import Main from './components/main';
import Footer from './components/footer';
import isAuthTokenAvailable from './helpers/isLoggedIn';

class App extends React.Component {
  state = {
    isLogged: isAuthTokenAvailable(),
    username: localStorage.getItem('username') || undefined
  }

  changeLogin = (status) => {
    this.setState({
      isLogged: status,
      username: status ? localStorage.getItem('username') : undefined
    });
  }

  render() {
    const { isLogged } = this.state;
    return (
    <div className="App">
      <Router>
        <Header username={this.state.username} isLogged={isLogged}/>
        <Main isLogged={isLogged} changeLogin={this.changeLogin}/>
      </Router>
      <Footer/>
    </div>
  );
  }
}

export default App;
