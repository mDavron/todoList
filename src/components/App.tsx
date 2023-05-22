import React, { useRef, useState } from 'react'
import { ITodo } from '../types/data'
import TodoList from './TodoList'

const App: React.FC = () => {
  const [value, setValue] = useState("")
  const [todos, setTodos] = useState<ITodo[]>([])
  const inputRef = useRef<HTMLInputElement>(null);

  const addTodo = () => {
    if (value.trim()) {
      setTodos([...todos, {
        id: Date.now(),
        title: value,
        complete: false

      }])
    }
    setValue("")
  }
  const handleChange: React.ChangeEventHandler<HTMLInputElement> = (e) => {
    setValue(e.target.value)
  }

  return (
    <div>
      <div>
        <input
          type="text"
          value={value}
          onChange={handleChange}
          ref={inputRef}

        />
        <button onClick={addTodo}>Add</button>
      </div>
      <TodoList items={todos} />
    </div>
  )
}

export default App