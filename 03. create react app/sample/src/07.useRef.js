import './App.css';
import {useState, useRef} from 'react'

// useRef
// - Lưu các giá trị qua một tham chiếu bên ngoài
// - function component

function App() {
  const [count, setCount] = useState(60)
  const timerId = useRef()
  const handleStart = () => {
    timerId.current = setInterval(() => {
      setCount(prev => prev-1)
    }, 1000)
  }
  const handleStop = () => {
    clearInterval(timerId.current)
  }
  return (
    <div className="App">
      <h1>{count}</h1>
      <button onClick={handleStart}>Start</button>
      <button onClick={handleStop}>Stop</button>
    </div>
  );
}

export default App;
