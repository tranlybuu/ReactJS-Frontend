import './App.css';
import {useEffect, useState} from 'react'

function Content() {
  // 1. useEffect(callback)
  //    - Gọi callback mỗi khi component re-render
  //    - Gọi callback sau khi component thêm element vào DOM
  // 2. useEffect(callback, [])
  //    - Chỉ gọi callback 1 lần sau khi component mounted
  // 3. useEffect(callback, [deps])
  //    - Callback sẽ được gọi lại mỗi khi deps thay đổi
  // ------------------------------
  // 1. Callback luôn được gọi sau khi component mounted
  // 2. Cleanup function luôn được gọi trước khi component unmounted
  // 3. Cleanup function luôn được gọi trước khi callback được gọi
  // ------------------------------
  // React@18 trở đi không cần Cleanup function

// // // Update DOM
//   const [title, setTitle] = useState('')
//   useEffect(() => {
//     document.title=title
//   })
//   return(
//     <div>
//       <input
//         value={title}
//         onChange={e => setTitle(e.target.value)}
//       />
//     </div>
//   )
// }
// function App() {
//     const [show, setShow] = useState(false)
//     return (
//       <div className="App">
//         <button onClick={() => setShow(!show)}>show</button>
//         {show && <Content />}
//       </div>
//     );
//   }

// // // Call API
// // useEffect(callback, [])
// const [posts, setPosts] = useState([])
// useEffect(() => {
//   fetch('https://jsonplaceholder.typicode.com/posts')
//     .then(res => res.json())
//     .then(posts => {
//       setPosts(posts)
//     })
// },[])
// return(
//   <div>
//     <ul>
//       {posts.map(post => 
//         <li key={post.id}>{post.title}</li>)}
//     </ul>
//   </div>
// )
// }
// function App() {
//   const [show, setShow] = useState(false)
//   return (
//     <div className="App">
//       <button onClick={() => setShow(!show)}>show</button>
//       {show && <Content />}
//     </div>
//   );
// }
// // useEffect(callback, [deps])
// tabs = ['posts', 'comments', 'albums', 'photos', 'todos', 'users']
// const [posts, setPosts] = useState([])
// const [type, setType] = useState('posts')
// useEffect(() => {
//   fetch(`https://jsonplaceholder.typicode.com/${type}`)
//     .then(res => res.json())
//     .then(posts => {
//       setPosts(posts)
//     })
//   }, [type])
//   return(
//     <div>
//       {tabs.map((value, index) => (
//           <button 
//             key={index}
//             style={type === value ? {
//               color: '#fff',
//               backgroundColor: '#333',
//             } : {}}
//             onClick={() => setType(value)}
//           >
//             {value}
//           </button>
//         ))}
//       <ul>
//         {posts.map(post => 
//           <li key={post.id}>{post.title || post.name}</li>)}
//       </ul>
//     </div>
//   )
// }
// function App() {
//     const [show, setShow] = useState(false)
//     return (
//       <div className="App">
//         <button onClick={() => setShow(!show)}>show</button>
//         {show && <Content />}
//       </div>
//     );
//   }


export default App;
