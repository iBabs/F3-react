import { useEffect, useState } from 'react';
import './App.css';
import Baba from './Baba';
import { info } from './data';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const light={
  backgroundColor: 'black',
  color: 'white'
}
const dark={
  backgroundColor: 'white',
  color: 'black'
}

function App() {


  const [mode, setMode] = useState(light)
  const [count, setCount] = useState(0);
  useEffect(()=>{
    console.log('number changed')
  },[count])
  const increase = () => {
    setCount(count + 1)
  }
  const decrease = () => {

    setCount(count - 1)
    if (count <= 0) {
      toast.error('number lesser than zero')
    }
  }
  const change=()=>{
    mode!==light? setMode(light):setMode(dark)
  }


  return (
    <div className="App"
    style={mode}
    >
      <button onClick={change}>theme</button>
      <ToastContainer position='bottom-right' theme='dark' />
      {info.map(i => <Baba {...i} />)}
      <div>
        <h2>{count}</h2>
        <button onClick={decrease}>-</button>
        <button onClick={increase}>+</button>
      </div>
    </div>
  );
}

export default App;
