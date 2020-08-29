import React from 'react';
import './App.css';
import Nav from "./NavBar";
import Dash from "./Dashboard";
import Appointment from "./Appointment"

function App() {
  return (
    <div className="App">
      <Nav/>
      <Dash/>
      <Appointment/>
    </div>
  );
}

export default App;
