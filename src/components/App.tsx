import React, { useEffect, useRef, useState } from 'react'
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
  const removeTodo = (id: number): void => {
    setTodos(todos.filter(todo => todo.id !== id))
  };
  const toggleTodo = (id: number): void => {
    setTodos(todos.map(todo => {
      if (todo.id === id) {
        todo.complete = !todo.complete
      }
      return todo
    }))
  }

  const handleChange: React.ChangeEventHandler<HTMLInputElement> = (e) => {
    setValue(e.target.value)
  }
  const handleKeydown: React.KeyboardEventHandler<HTMLInputElement> = (e) => {
    if (e.key === 'Enter') {
      addTodo();
    }
  }
  useEffect(() => {
    if (inputRef.current) {
      inputRef.current.focus()
    }
  }, [])

  return (
    <div>
      <div>
        <input
          type="text"
          value={value}
          onChange={handleChange}
          ref={inputRef}
          onKeyDown={handleKeydown}

        />
        <button onClick={addTodo}>Add</button>
      </div>
      <TodoList items={todos} removeTodo={removeTodo} toggleTodo={toggleTodo} />
    </div>
  )
}

export default App