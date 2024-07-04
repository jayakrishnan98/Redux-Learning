import React from 'react'
import { useNavigate } from "react-router-dom"

function Dashboard() {
  const navigate = useNavigate();

  return (
    <>
      <div>Dashboard</div>
      <div>
        <button onClick={() => navigate('counter')}>Counter</button>
        <button onClick={() => navigate('todo-list')}>TodoList</button>
      </div>
    </>
  );
}

export default Dashboard;
