import React , { useState } from 'react';
import './App.css';
 
function App() { 
const [checked, _setEmotion] = useState(false);

function toggle(){
  _setEmotion((checked) => !checked);
}

  return (
  <> 
     <input type="checkbox" value={checked} onChange={toggle}></input>
  <p>{checked ? "checked" : "notChecked"}</p>
  </>
  ); 
}

export default App;
