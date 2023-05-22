import React from 'react'
import { ITodo } from '../types/data'
interface ItodoItem extends ITodo { };
const TodoItem: React.FC<ItodoItem> = (props) => {
  const { title, complete } = props;
  return (
    <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
      <input
        type="checkbox"
        checked={complete}
      />
      <p>{title}</p>
      <button>X</button>
    </div>
  )
}

export default TodoItem