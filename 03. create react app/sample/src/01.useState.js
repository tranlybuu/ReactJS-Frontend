import logo from './logo.svg';
import './App.css';
import {useState} from 'react'

function App() {
  const [counter, setCounter] = useState(1)
  const handleIncrease = () => {
    // setCounter(counter+1)
    // setCounter(counter+1)

    // setCounter(prevState => prevState+1)
    // setCounter(prevState => prevState+1)

  }
  return (
    <div className="App">
      <h1>{counter}</h1>
      <button onClick={handleIncrease}>Click to Increase</button>
    </div>
  );
}

export default App;
