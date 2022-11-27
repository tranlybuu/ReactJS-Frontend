import './App.css';
import {useState, useCallback} from 'react'

// 1. memo() => Higher Order Component (HOC)
//           =>  xử lý component tránh re-render trong tình huống không cần thiết
// 2. useCallback()
//    - Reference types
//    - React memo()

// Content.js
function Content(onIncrease) {
  return (
    <>
      <button onClick={onIncrease}>Click me!</button>
    </>
  )
}

// App.js
function App() {
  const [count, setCount] = useState(0)
  const handleCount = useCallback(() => {
    setCount(count + 1)
  }, [])
  return (
    <div className="App">
      <h1>{count}</h1>
      <Content onIncrease={handleCount} />
    </div>
  );
}

export default App;
