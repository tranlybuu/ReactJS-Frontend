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

// // // Listen DOM events
// // Ví dụ: Scroll
// const  tabs = ['posts', 'comments', 'albums', 'photos', 'todos', 'users']
// const [posts, setPosts] = useState([])
// const [type, setType] = useState('posts')
// const [showGoToTop, setShowGoToTop] = useState(false)
// useEffect(() => {
//   fetch(`https://jsonplaceholder.typicode.com/${type}`)
//     .then(res => res.json())
//     .then(posts => {
//       setPosts(posts)
//     })
//   }, [type])
// useEffect(() => {
//   const handleScroll = () => {
//     if (window.scrollY >= 200) {
//       // Show
//       setShowGoToTop(true)
//     } else {
//       // Hide
//       setShowGoToTop(false)
//     }
//   }
//   window.addEventListener('scroll', handleScroll)
//   // Cleanup function
//   return () => {
//     window.removeEventListener('scroll', handleScroll)
//   }
// }, [])
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
//       {showGoToTop && (
//         <button 
//           style={{
//             position: "fixed",
//             right: 20,
//             bottom:20,
//           }}
//         >
//           Go to top
//         </button>
//       )}
//     </div>
//   )
// }
// // Ví dụ: Resize
//   const [width, setWidth] = useState(window.innerWidth)
//   useEffect(() => {
//     const handleResize = () => {
//       setWidth(window.innerWidth)
//     }
//     window.addEventListener("resize", handleResize)
//     // Cleanup function
//     return () => {
//       window.removeEventListener("resize", handleResize)
//     }
//   }, [])
//   return (
//     <div>
//       <h1>{width}</h1>
//     </div>
//   )
// }
// // Ví dụ: Đồng hồ đếm ngược
// const [countdown, setCountdown] = useState(180)
// useEffect(() => {
//   setTimeout(() => {
//     setCountdown(countdown-1)
//   }, 1000)
//   console.log(countdown);
// }, [countdown])
// return (
//   <div>
//     <h1>{countdown}</h1>
//   </div>
// )
// }
// // Ví dụ: Chọn ảnh avatar
// const [avatar, setAvatar] = useState("")
// useEffect(() => {
//   // Cleanup
//   return () => {
//     avatar && URL.revokeObjectURL(avatar.preview)
//   }
// }, [avatar])
// const handlePreviewAvatar = (e) => {
//   const file = e.target.files[0]
//   file.preview = URL.createObjectURL(file)
//   setAvatar(file)
// }
// return (
//   <div>
//     <input
//       type='file' 
//       onChange={handlePreviewAvatar}
//     />
//     {avatar && (
//         <img src={avatar.preview} alt="" width="200px" />
//     )}
//   </div>
// )
// }
// //




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
