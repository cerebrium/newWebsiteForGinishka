import React from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom';

class App extends React.Component {
  render () {
    return (
      <Router>
        <nav><Link to='/' >Home</Link> | <Link to='/mainblog' >Main Blog</Link> | <Link to='/favoritemovie' >Favorite Movie</Link> | <Link to='/favoritefood' >Favorite Food</Link> | <Link to='/about' >About</Link> | </nav>
      </Router>
    )
  }
}

export default App;
