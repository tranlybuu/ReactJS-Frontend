import logo from './logo.svg';
import './App.css';
import Content from './Content';
import {useState} from 'react'

function App() {
  // Mounted / Unmounted

  const [show, setShow] = useState(false)
  return (
    <div className="App">
      <button onClick={() => setShow(!show)}>show</button>
      {show && <Content />}
    </div>
  );
}

export default App;
