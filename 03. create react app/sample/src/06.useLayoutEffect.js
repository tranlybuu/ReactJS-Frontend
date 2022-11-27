import './App.css';
import {useEffect, useLayoutEffect, useState} from 'react'
// // Thứ tự hoạt động
// useEffect
// 1. Cập nhật lại state
// 2. Cập nhật lại DOM (mutated)
// 3. Render lại UI
// 4. Gọi cleanup nếu deps thay đổi
// 5. Gọi useEffect callback
// useLayoutEffect
// 1. Cập nhật lại state
// 2. Cập nhật lại DOM (mutated)
// 3. Gọi cleanup nếu deps thay đổi (sync)
// 4. Gọi useLayoutEffect callback (sync)
// 5. Render lại UI

function Content() {
  const [counter, setCounter] = useState(0)
  // // Ví dụ: đếm đến 3 thì quay về đến lại từ 0
  // useEffect(() => {
  //   if (counter > 3){
  //     setCounter(0)
  //   }
  // useLayoutEffect(() => {
  //   if (counter > 3){
  //     setCounter(0)
  //   }
  // }, [counter])
  const handleCounter = () => {
      setCounter(counter+1)
  }
  return (
    <div>
      <h1>{counter}</h1>
      <button onClick={handleCounter}>Click me!</button>
    </div>
  )
}




function App() {
  const [show, setShow] = useState(false)
    return (
      <div className="App">
        <button onClick={() => setShow(!show)}>show</button>
        {show && <Content />}
      </div>
    );
}

export default App;
