import React from 'react';
import './App.css';

function SecretComponent(){
  return <h1>Secret Information</h1>
}

function RegularComponent(){
  return <h1>Regular Information</h1>
}

function App(props) { 
  return (<>{props.authorized ? <SecretComponent /> : <RegularComponent />}</>); 
}

export default App;
