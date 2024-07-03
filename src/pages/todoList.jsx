import React, { useState } from 'react';
import TodoForm from '../components/todoForm/todoForm';
import TodoCard from '../components/todoCard/todoCard';

const TodoList = () => {
    const [todo,setTodo] = useState([])
  return (
    <main>
        <section className='container mx-auto my-4'>
            <h2 className='text-xl sm:text-2xl md:4xl text-center py-5 font-semibold'>Todo List</h2>
            <div className='bg-gray-100'>
            <TodoForm setTodo = {setTodo} />
            </div>
            <ul>
                {
                    todo && todo.map((data,index)=>(
                        <li key={index} >
                            <TodoCard data={data} />
                        </li>
                    ))
                }
            </ul>

        </section>
    </main>
  );
}

export default TodoList;
