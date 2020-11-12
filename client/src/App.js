import React from 'react'
import './App.css';

// node modules
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';

// component
import Nav from './component/Navbar';
import Footer from './component/Footer';
import NotFound from './component/NotFound';
import Home from './component/Home';
import Login from './component/Login';
import Register from './component/Register';
import Mypage from './component/Mypage';
import Setting from './component/Setting';
import GoalManagement from './component/GoalManagement';
import DailyReview from './component/DailyReview';
import History from './component/History';
import Report from './component/Report';
import Test from './component/Test';
import TestResult from './component/TestResult';
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
          <Route path="/login" component={Login}/>
          <Route path="/register" component={Register}/>
          <Route path="/mypage" component={Mypage}/>
          <Route path="/setting" component={Setting}/>
          <Route path="/test" component={Test}/>
          <Route path="/test" component={Test}/>
          <Route path="/test-result/:id" component={TestResult}/>
          <Route path="/goal-management/:id" component={GoalManagement}/>
          <Route path="/daily-review/:id" component={DailyReview}/>
          <Route path="/history/:id" component={History}/>
          <Route path="/report/:id" component={Report}/>
          <Route path="/terms" component={Tab1}/>
          <Route path="/privacy" component={Tab2}/>
          <Route path="/faq" component={Tab3}/>
          <Route component={NotFound}/>
        </Switch>
        <Footer/>
      </Router>
    </div>
  );
}

export default App;