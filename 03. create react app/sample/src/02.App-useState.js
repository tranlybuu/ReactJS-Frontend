import logo from './logo.svg';
import './App.css';
import {useState} from 'react'

const gifts = [
  'CPU i9',
  'RAM 32GB RGB',
  'RGB Headset',
  'Logitech G102',
  'AKKO Keyboard'
]

function App() {
  // // Ví dụ: Random Gift
  // const [gift, setGift] = useState("Chưa có phần thưởng")
  // const changeGift = () => {
  //   const index=Math.floor(Math.random()*gifts.length)
  //   setGift(gifts[index])
  // }
  // return (
  //   <div className="App">
  //     <h1>{gift}</h1>
  //     <button onClick={changeGift}>Lấy thưởng</button>
  //   </div>
  // );

  // // Ví dụ: Two-way Binding
  // const [name,setName] = useState('')
  // const [email,setEmail] = useState('')
  // const handleSubmit = () => {
  //   // Call API
  //   console.log({
  //     name,
  //     email
  //   });
  // }
  // return (
  //   <div className="App">
  //     <input type="text"
  //     value={name}
  //       onChange={e => setName(e.target.value)} 
  //     />
  //     <input type="text"
  //     value={email}
  //       onChange={e => setEmail(e.target.value)} 
  //     />
  //     <button onClick={handleSubmit}>Submit</button>
  //   </div>
  //   )

  // // Todo list
  const [job, setJob] = useState('')
  const [jobs, setJobs] = useState(() => {
    const storageJobs = localStorage.getItem('jobs')
    return JSON.parse(storageJobs) ?? []
  })
  const handleJobs = () => {
    setJobs(prev => {
      const newJobs = [...prev, job]
      //save to local storage
      const jsonJobs = JSON.stringify(newJobs)
      localStorage.setItem("jobs", jsonJobs)
      //return
      return newJobs
    })
    setJob('')
  }
  const deleteJobs = (job) => {
    setJobs(prev => {
      const newJobs = prev.filter(item => item!==job)
      //save to local storage
      const jsonJobs = JSON.stringify(newJobs)
      localStorage.setItem("jobs", jsonJobs)
      //return
      return newJobs
    })
  }
  return(
    <div className="App">
      <input
        value={job}
        onChange={e => setJob(e.target.value)}
      />
      <button onClick={handleJobs}>Add</button>
      <ul>
        {jobs.map((value, index) => (
          <div key={index}>
            <li>{value}</li>
            <button onClick={() => deleteJobs(value)}>Delete</button>
          </div>
        ))}
      </ul>
    </div>
  );
  
}
export default App;
