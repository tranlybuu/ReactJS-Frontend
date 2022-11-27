import { useReducer, useRef } from 'react';
import './App.css';

// // Ví dụ: Todo List (dùng useState sẽ đơn giản hơn)
// useReducer
// 1. Init State
const initState = {
  job: '',
  jobs: []
}
// 2. Actions
const SET_JOB = 'set_job'
const ADD_JOB = 'add_job'
const DEL_JOB = 'del_job'

const setJob = payload => {
  return {
    type: SET_JOB,
    payload
  }
}
const addJob = payload => {
  return {
    type: ADD_JOB,
    payload
  }
}
const delJob = payload => {
  return {
    type: DEL_JOB,
    payload
  }
}
// 3. Reducer
const reducer = (state, action) => {
  switch (action.type) {
    case SET_JOB:
      return {
        ...state,
        job: action.payload
      }
    case ADD_JOB:
      return {
        ...state,
        jobs: [...state.jobs, action.payload]
      }
    case DEL_JOB:
      const newJobs = [...state.jobs]
      newJobs.splice(action.payload,1)
      return {
        ...state,
        jobs: newJobs
      }
  default:
      throw new Error("Invalid action")
  }
}

function App() {
  // 4. dispath
  const [state, dispath] = useReducer(reducer, initState)
  const handleAddJob = () => {
    dispath(addJob(state.job))
    dispath(setJob(''))
    inputRef.current.focus()
  }
  const inputRef = useRef()
  return (
    <div className="App">
      <h3>Todo List</h3>
      <input
        ref={inputRef}
        value = {state.job}
        placeholder="Enter todo..."
        onChange={(e) => {
          dispath(setJob(e.target.value))
        }}
      />
      <button
        onClick={handleAddJob}
      >
        Add
      </button>
      <br />
      <ul>
          {state.jobs.map((value, index) => (
            <div key={index}>
              <li>{value}</li>
              <button
                onClick={() => {dispath(delJob(index))}}
              >
                Delete
              </button>
            </div>
          ))}
      </ul>
    </div>
  );
}

export default App;
