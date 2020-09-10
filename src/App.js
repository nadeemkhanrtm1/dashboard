import React from 'react';
import './App.css';
import Nav from "./component/NavBar";
import SchedulePage from "./component/appointment_compo/SchedulePage";
import {BrowserRouter,Route,Switch,Link} from 'react-router-dom';
import Profile from "./component/Profile";
import Home from "./component/Home";

function App() {
  return (
    <BrowserRouter>
    <div className="App">
      <Nav/>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/schedule" component={SchedulePage} />
      </Switch>
      
    </div>
    </BrowserRouter>
  );
}

export default App;
