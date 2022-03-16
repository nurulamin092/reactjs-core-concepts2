import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';

function App() {

  return (
    <div className="App">
      <ExtranulUser></ExtranulUser>
    </div>
  );
}
function ExtranulUser() {
  const [users, setUsers] = useState('');
  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(res => res.json()).
      then(data => setUsers(data))
  }, []);
  return (
    <div>
      <h1>Extranal User</h1>
      {
        users.map(user => <User name={user.name} email={user.email}></User>)
      }

    </div >
  )
}
function User(props) {
  return (
    <div className='user'>
      <h3>Name:{props.name}</h3>
      <p>Email:{props.email}</p>
    </div>
  )
}
/* function Counter() {
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
} */


export default App;
