import React from 'react';
import './App.css';
import {Routes,Route} from "react-router-dom";
import {Home, Events, About,Contact, Services,  History, Whoops404} from "./pages";
 
function App() { 
    return (<div>
      <Routes >
        <Route path="/" element={<Home />} />
        <Route path="/About" element={<About />} >
          <Route path="services" element={<Services />} />
          <Route path="history" element={<History />} />
          </Route>
        <Route path="/Events" element={<Events />} />
        <Route path="/Contact" element={<Contact />} />
        <Route path="*" element={<Whoops404 />} />
      </Routes>
      
    </div>);  
}

export default App;
