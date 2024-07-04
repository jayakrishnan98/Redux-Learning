import React, { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux';
import { RootType, AppDispatch } from '../../store';
import { addTodo, toggleTodo, deleteTodo } from '../../features/todos/todoSlice';

function TodoList() {

  const [text, setText] = useState('');
  const dispatch: AppDispatch = useDispatch();
  const todos = useSelector((state: RootType) => state.todos.todos);

  const handleAddTodo = () => {
    if (text.trim()) {
      dispatch(addTodo(text));
      setText('');
    }
  };

  return (
    <>
      <h1>Todo List</h1>
      <input
        type="text"
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="Enter todo"
      />
      <button onClick={handleAddTodo}>Add Todo</button>
      <ul>
        {todos.map(todo => (
          <li key={todo.id}>
            <span
              style={{ textDecoration: todo.completed ? 'line-through' : 'none' }}
              onClick={() => dispatch(toggleTodo(todo.id))}
            >
              {todo.text}
            </span>
            <button onClick={() => dispatch(deleteTodo(todo.id))}>Delete</button>
          </li>
        ))}
      </ul>
    </>
  )
}

export default TodoList