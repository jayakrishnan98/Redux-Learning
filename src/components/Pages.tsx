import { Routes, Route, Navigate } from "react-router-dom";
import Dashboard from "./Dashboard/Dashboard";
import Login from "./Login/Login";
import { useSelector } from "react-redux";
import { RootType } from "../store";
import TodoList from "./TodoList/TodoList";
import Counter from "./Counter/Counter";

function Pages() {
  const isAuthenticated = useSelector(
    (state: RootType) => state.auth.isAuthenticated
  );

  return (
    <Routes>
      {/* Public Routes */}
      <Route
        path="/login"
        element={!isAuthenticated ? <Login /> : <Navigate to="/" />}
      />
      {/* Private Routes */}
      <Route
        path="/"
        element={isAuthenticated ? <Dashboard /> : <Navigate to="/login" />}
      />
      <Route
        path="/todo-list"
        element={isAuthenticated ? <TodoList /> : <Navigate to="/login" />}
      />
      <Route
        path="/counter"
        element={isAuthenticated ? <Counter /> : <Navigate to="/login" />}
      />

      {/* Default Redirect */}
      <Route path="*" element={<Navigate to="/login" />} />
    </Routes>
  );
}

export default Pages;
