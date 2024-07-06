import React, { useEffect, useState } from "react";
import TodoForm from "../components/todoForm/todoForm";
import TodoCard from "../components/todoCard/todoCard";
import axios from "axios";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";


const TodoList = () => {
  const isLoggedIn = useSelector(state=>state.login.isLoggedIn)
  const [todos, setTodos] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(`${import.meta.env.VITE_BASE_URL}/todos`, {
          withCredentials: true,
        });
        setTodos(response.data);
      } catch (error) {
        console.error("Error fetching todos:", error.response); // Modify this line to log the error response
      }
    };

    fetchData();
  }, []);

  return (
    <main>
      <section className="container mx-auto my-4">
        <h2 className="text-xl sm:text-2xl md:4xl text-center py-5 font-semibold">
          Todo List
        </h2>
        {
          isLoggedIn ? (
            <>
            <div className="">
          <TodoForm setTodos={setTodos} />
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 w-11/12 mx-auto">
          {todos.map((todo) => (
            <TodoCard key={todo._id} todo={todo} todos={todos} setTodos={setTodos} />
          ))}
        </div>
            </>
          ):
          <div className="w-full text-center flex flex-col justify-center items-center">
          <p className="home-p text-base sm:text-lg md:text-xl text-center font-semibold mb-8 max-w-2xl leading-relaxed">Please Signup/Login to add Todos....</p>
          <Link to={'/account'} className="nav-links-account">Signup/Login</Link>
        </div>
        }
      </section>
    </main>
  );
};

export default TodoList;
