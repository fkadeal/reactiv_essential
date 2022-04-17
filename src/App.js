import React ,{ useState, useEffect} from 'react';
import './App.css';

function App() { 
const [_emotion, _setEmotion] = useState("happy");
const [_secondary, _setSecondary] = useState("happy");
useEffect( () => { console.log(`it's ${_emotion}!! around hire`); },[_emotion])
useEffect( () => { console.log(`it's ${_secondary}!! around hire`); },[_secondary])


  return (
  <>
  <h1>Click to change, your Emotion is Now = {_emotion}</h1>
    <button onClick={() => _setEmotion("Happy")}>Happy</button>
    <button onClick={() => _setEmotion("Frustrate")}>Frustrate</button>
    <button onClick={() => _setEmotion("Enthusiastic")}>Enthuse</button>

    <button onClick={() => _setSecondary("Secondary")}>Secondary</button>
    <button onClick={() => _setSecondary("Mos")}>what is Mos</button>
  </>
  ); 
}

export default App;
