import React, { useEffect, useState } from "react";
import TodoForm from "../components/todoForm/todoForm";
import TodoCard from "../components/todoCard/todoCard";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { setTodo } from "../features/todo/todoSlice";

const TodoList = () => {
  const dispatch = useDispatch();
  const isLoggedIn = useSelector((state) => state.login.isLoggedIn);
  const todos = useSelector((state) => state.todo.todos);
  // const [todos, setTodos] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          `${import.meta.env.VITE_BASE_URL}/todos`,
          {
            withCredentials: true,
          }
        );
        dispatch(setTodo(response.data));
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
        {isLoggedIn ? (
          <>
            <h2 className="text-xl sm:text-2xl md:4xl text-center py-5 font-semibold">
              Todo List
            </h2>
            <div className="">
              <TodoForm />
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 w-11/12 mx-auto">
              {todos.map((todo) => (
                <TodoCard key={todo._id} todo={todo} />
              ))}
            </div>
          </>
        ) : (
          <div className="my-3 sm:my-4  sm:py-4 px-4 sm:px-6 lg:px-8 rounded-md flex  flex-col jusitfy-center items-center">
            <h2 className="text-xl sm:text-3xl md:text-4xl font-bold my-3 pb-2">
              Welcome to <span>Taskly</span>
            </h2>
            <div className="grid  justify-center items-center p-4 gap-6 ">
              <div >
                <img
                  className="mb-4 w-full rounded-md about-images"
                  src="https://res.cloudinary.com/imagist/image/fetch/q_auto,f_auto,c_scale,w_1536/https%3A%2F%2Fdoist.com%2Fstatic%2Fimages%2Fhome-page%2Fhero-section%2Fhome-illustration_w_2069.jpg"
                  alt="todo image"
                />
              </div>
              <div className=" flex flex-col justify-center mx-auto">
                <p className="p-1 sm:p-7  leading-relaxed text-base sm:text-lg md:text-xl lg:text-lg text-justify">
                  Signup or login to Taskly to seamlessly add and manage your
                  todos. Whether you're organizing personal errands or
                  collaborating on team projects, Taskly ensures you stay on top
                  of your tasks with ease. Join our community today to boost
                  your productivity and never miss a deadline again! With
                  Taskly, you'll find managing tasks simple and efficient,
                  helping you achieve more every day.
                </p>
              </div>
            </div>
            <div className="flex flex-col justify-center mx-auto">
            <Link 
          to={'/account'} 
          className="primary mx-auto text-white py-3 px-8 rounded-md text-lg font-semibold shadow-lg transition-transform transform hover:scale-105"
        >
          Signup / Login
        </Link>
            </div>
          </div>
        )}
      </section>
    </main>
  );
};

export default TodoList;
