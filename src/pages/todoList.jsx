import React, { useState } from "react";
import TodoForm from "../components/todoForm/todoForm";
import TodoCard from "../components/todoCard/todoCard";

const TodoList = () => {
  const [todo, setTodo] = useState([]);
  return (
    <main>
      <section className="container mx-auto my-4">
        <h2 className="text-xl sm:text-2xl md:4xl text-center py-5 font-semibold">
          Todo List
        </h2>
        <div className="bg-gray-100">
          <TodoForm setTodo={setTodo} />
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
        {todo &&
          todo.map((data, index) => (
              <TodoCard key={index} index={index} data={data} todo={todo} setTodo={setTodo} />

          ))}
        </div>
      </section>
    </main>
  );
};

export default TodoList;
