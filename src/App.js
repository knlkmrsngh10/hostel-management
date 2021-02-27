import './App.css';
import React from 'react';
import MainPage from './MainPage';
import MNNIT_Logo from './MNNIT_Logo';
import Footer from './Footer';

class App extends React.Component {
  render() {
      return(
          <div className="Index">
          <MNNIT_Logo/>
          <MainPage/>
          <Footer/>
          </div>
      );
  }
}

export default App;