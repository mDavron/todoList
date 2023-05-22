import React from 'react'
import { ITodo } from '../types/data'
interface ItodoItem extends ITodo {
  removeTodo: (id: number) => void,
  toggleTodo: (id: number) => void,
};
const TodoItem: React.FC<ItodoItem> = (props) => {
  const { id, title, complete, removeTodo, toggleTodo } = props;
  return (
    <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
      <input
        type="checkbox"
        checked={complete}
        onChange={() => toggleTodo(id)}
      />
      <p>{title}</p>
      <button onClick={() => removeTodo(id)}>X</button>
    </div>
  )
}

export default TodoItem