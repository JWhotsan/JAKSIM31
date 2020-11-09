import React from 'react'
import './App.css';

// node modules
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';

// component
import Nav from './component/Navbar';
import Footer from './component/Footer';
import Home from './component/Home';

function App() {
  return (
    <div className="App">
      <Router>
        <Nav/>
        <Switch>
          <Route path="/" exact={true} component={Home}/>
        </Switch>
        <Footer/>
      </Router>
    </div>
  );
}

export default App;