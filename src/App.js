import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

function App() {

  return (
    <div className="App">
      <Counter></Counter>
    </div>
  );
}

function Counter() {
  const [count, setCount] = useState(40);
  const increaseCount = () => setCount(count + 1);
  const descreaseCount = () => setCount(count - 1);


  return (
    <div>
      <h1>Count:{count}</h1>
      <button onClick={increaseCount}>Increase</button>
      <button onClick={descreaseCount}>Descrease</button>
    </div>
  )
}


export default App;
