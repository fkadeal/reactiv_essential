import React , { useState, useEffect } from 'react';
import './App.css';
 
function App({login}) { 
  const [data, setData] = useState(null);
 
  useEffect( () => { 
    fetch(`https://api.github.com/users/${login}`)
    .then((response) => response.json())
    .then(setData); 
  }, [login]);

  if (data){
    return <div>{JSON.stringify(data)}</div>
  }  
  return <div>no data</div>; 
}

export default App;
