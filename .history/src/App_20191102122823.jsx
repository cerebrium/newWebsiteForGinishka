import React from 'react';
import './styles/App.css'
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom';
import About from './Routes/About'
import Recruitment from './Routes/Recruitment'
import Testimonials from './Routes/Testimonials'
import Policies from './Routes/Policies'
import Home from './Routes/Home'
import Contact from './Routes/Contact'

class App extends React.Component {
  render () {
    return (
      <Router>
        <div className='mainContainer'>
          <div className='navContainer'>
            <div className='nav'><Link to='/' >Home</Link> <div>|</div> </div><div className='nav'><Link to='/about' >About</Link> | </div><div className='nav'><Link to='/recruitment' >Recruitment</Link> | </div><div className='nav'><Link to='/testimonials' >Testimonials</Link> | </div><div className='nav'><Link to='/policies' >Policies</Link> | </div><div className='nav'><Link to='/contact'>Contact</Link></div>
          </div>
          <Route exact path='/' component={Home}/>
          <Route exact path='/about' component={About}/>
          <Route exact path='/recruitment' component={Recruitment}/>
          <Route exact path='/testimonials' component={Testimonials}/>
          <Route exact path='/policies' component={Policies}/>
          <Route exact path='/contact' component={Contact}/>
        </div>
      </Router>
    )
  }
}

export default App;
