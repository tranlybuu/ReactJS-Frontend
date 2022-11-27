import {useStore, actions} from './store'
import {useRef} from 'react'
import { delTodo } from './store/actions'

function NewApp() {
    const [state, dispatch] = useStore()
    const {todos, todoInput} = state
    const inputRef = useRef()
    const handleAdd = () => {
        dispatch(actions.addTodo(todoInput))
        dispatch(actions.setTodoInput(''))
        inputRef.current.focus()
    }
    return (
      <div className="NewApp">
        <h3>Todo list</h3>
        <input
            ref={inputRef}
            value={todoInput}
            placeholder="Enter Todo..."
            onChange={e => {
                dispatch(actions.setTodoInput(e.target.value))
            }}
        />
        <button onClick={handleAdd}>Add</button>
        <ul>
            {todos.map((value, index) => (
                <div key={index}>
                    <li>{value}</li>
                    <button onClick={() => dispatch(delTodo(index))}>Delete</button>
                    
                </div>
            ))}
        </ul>
      </div>
  );
}

export default NewApp;
