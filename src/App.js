import { useState } from 'react';
import './App.css';
import Baba from './Baba';
import { info } from './data';



function App() {
//  const oneper = info.filter(i=> i.name==='Gabby')
const [mood, setMood] = useState("Happy");

const changeMood =()=>{

  if(mood!=="Happy"){setMood('Happy')
}else{
  setMood('Angry')}
}

  return (
    <div className="App">
      {info.map(i=><Baba {...i}/>)}
    <div>
      <h2>{mood}</h2>
      <button onClick={changeMood}>Change mood</button>
      </div>
    </div>
  );
}

export default App;
