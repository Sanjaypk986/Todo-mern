import React, { useEffect, useState } from "react";
import TodoForm from "../components/todoForm/todoForm";
import TodoCard from "../components/todoCard/todoCard";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { setTodo } from "../features/todo/todoSlice";


const TodoList = () => {
  const dispatch = useDispatch()
  const isLoggedIn = useSelector(state=>state.login.isLoggedIn)
  const todos = useSelector(state=>state.todo.todos)
  // const [todos, setTodos] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(`${import.meta.env.VITE_BASE_URL}/todos`, {
          withCredentials: true,
        });
        dispatch(setTodo(response.data))
        // setTodos(response.data);
      } catch (error) {
        console.error("Error fetching todos:", error.response); // Modify this line to log the error response
      }
    };

    fetchData();
  }, []);

  return (
    <main>
      <section className="container mx-auto my-4 ">
        
        {
          isLoggedIn ? (
            <>
            <h2 className="text-xl sm:text-2xl md:4xl text-center py-5 font-semibold">
          Todo List
        </h2>
            <div className="">
          <TodoForm  />
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 w-11/12 mx-auto">
          {todos.map((todo) => (
            <TodoCard key={todo._id} todo={todo}  />
          ))}
        </div>
            </>
          ):
          <div className="w-full text-center flex flex-col justify-center items-center py-5 h-[80vh] ">
          <h1 className="text-3xl sm:text-5xl md:text-5xl text-center font-bold mb-6">Signup/Login to Add Todos</h1>
          <Link to={'/account'} className="nav-links-account font-semibold">Signup/Login</Link>
        </div>
        }
      </section>
    </main>
  );
};

export default TodoList;
