import React from 'react'
import './App.css';

// node modules
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';

// component
import Nav from './component/Navbar';
import Footer from './component/Footer';
import Home from './component/Home';
import Tab1 from './component/Tab1';
import Tab2 from './component/Tab2';
import Tab3 from './component/Tab3';

function App() {
  return (
    <div className="App">
      <Router>
        <Nav/>
        <Switch>
          <Route path="/" exact={true} component={Home}/>
          <Route path="/terms" component={Tab1}/>
          <Route path="/privacy" component={Tab2}/>
          <Route path="/faq" component={Tab3}/>
        </Switch>
        <Footer/>
      </Router>
    </div>
  );
}

export default App;