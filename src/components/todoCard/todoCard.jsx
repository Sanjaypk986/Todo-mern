import axios from 'axios';
import React from 'react';

const TodoCard = ({ id, todo, setTodos, todos }) => {
  const handleDelete = async () => {
    try {
      await axios.delete(`${import.meta.env.VITE_BASE_URL}/todos/${todo._id}`);
      setTodos(todos.filter((item) => item._id !== todo._id));
    } catch (error) {
      console.error("Error deleting todo:", error);
    }
  };

  const handleEdit = () => {
    console.log("clicked");
  };

  return (
    <div className='flex flex-col justify-between h-full bg-white shadow-lg rounded-lg p-4 border border-gray-200 '>
      <span className='text-lg sm:text-xl md:text-2xl text-black break-words'>
        {todo.todo}
      </span>
      <div className='flex justify-end items-center mt-2'>
        <i className='fa-solid fa-trash cursor-pointer hover:text-red-500 mr-4' onClick={handleDelete}></i>
        <i className='fa-solid fa-pen-to-square cursor-pointer hover:text-blue-500' onClick={handleEdit}></i>
      </div>
    </div>
  );
}

export default TodoCard;
