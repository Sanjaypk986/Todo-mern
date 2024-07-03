import React from 'react';

const TodoCard = ({ data,index,todo,setTodo }) => {
    function handleDelete(){
        console.log("clicked");
        setTodo(todo.filter((item, idx) => idx !== index));
    }
  return (
    <div className='flex flex-col justify-between h-full bg-white shadow-lg rounded-lg p-4 border border-gray-200 '>
      <span className='text-lg sm:text-xl md:text-2xl text-black break-words'>
        {data}
      </span>
      <div className='flex justify-end items-center mt-2'>
        <i className='fa-solid fa-trash cursor-pointer hover:text-red-500 mr-4' onClick={handleDelete}></i>
        <i className='fa-solid fa-pen-to-square cursor-pointer hover:text-blue-500'></i>
      </div>
    </div>
  );
}

export default TodoCard;
