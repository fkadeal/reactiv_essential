import React ,{ useState} from 'react';
import './App.css';

function App() { 
const [_emotion, _setEmotion] = useState("happy");

  return (
  <>
  <h1>Click to change, your Emotion is Now = {_emotion}</h1>
    <button onClick={() => _setEmotion("Happy")}>Happy</button>
    <button onClick={() => _setEmotion("Frustrate")}>Frustrate</button>
    <button onClick={() => _setEmotion("Enthusiastic")}>Enthuse</button>
  </>
  ); 
}

export default App;
