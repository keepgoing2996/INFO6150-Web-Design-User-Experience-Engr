import logo from './logo.svg';
import './App.css';
import './index.css'
import Reorder from './Reorder';
import {useState} from 'react';
function App() {
  const [count, setCount] = useState(0);

  const onReorder = () => {
    setCount(5);
  };


  let content;
  if (count == 0) {
    content = <Reorder onReorder={onReorder}/>;
  }
  return (
    <div className="app">
    <p>Inventory Count </p>
    <button type='button'>{count}</button>
    <button type='button' 
      onClick={() => setCount(count + 1)}
    >+</button>
    <button type='button' disabled={!count}
      onClick={() => setCount(count - 1)}
    >-</button>
    {content}
    </div>
  );
}

export default App;
