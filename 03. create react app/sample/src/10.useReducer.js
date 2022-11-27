import './App.css';
import { useState, useReducer } from 'react';

// Trong hầu hết trường hợp thì có thể sử dụng useState
// useState thường được dùng trong các component có state đơn giản 
//  (kiểu dữ liệu nguyên thủy hoặc array 1 cấp hoặc số lượng state trong component ít)
// useReducer dùng trong các state phức tạp
//  (kiểu dữ liệu array, object, nhiều tầng, nhiều lớp)

// Ví dụ: đếm số
// useState
// 1. Init state = 0
// 2. Actions: Up (state + 1) / Down (state - 1)
// useReducer
// 1. Init state = 0
// 2. Actions: Up (state + 1) / Down (state - 1)
// 3. Reducer
// 4. Dispath

// // useReducer
// Init state
const initState = 0
// Actions
const UP_ACTION = 'up'
const DOWN_ACTION = 'down'
// Reducer
const reducer = (state, action) => {
  switch(action) {
    case UP_ACTION:
      return state+1
    case DOWN_ACTION:
      return state-1
    default:
      throw new Error('Invalid action')
  }
}

function App() {
  // // // useReducer
  // // dispath
  const [count, dispath] = useReducer(reducer, initState)
  // // // useState
  // const [count, setCount] = useState(0)
  // const handleUp = () => {
  //   setCount(count+1)
  // }
  // const handleDown = () => {
  //   setCount(count-1)
  // }
  return (
    <div className="App">
      <h1>{count}</h1>
      <button 
        // onClick={handleUp}
        onClick={() => dispath(UP_ACTION)}
      >
        Up
      </button>
      <button 
        // onClick={handleDown}
        onClick={() => dispath(DOWN_ACTION)}
      >
        Down
      </button>
    </div>
  );
}

export default App;
