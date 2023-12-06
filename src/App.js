import './App.css';
import Baba from './Baba';
import { info } from './data';


function App() {
//  const oneper = info.filter(i=> i.name==='Gabby')
  return (
    <div className="App">
      {info.map(i=><Baba {...i}/>)}

    
    </div>
  );
}

export default App;
