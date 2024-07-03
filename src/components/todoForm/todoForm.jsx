import React, { useState } from "react";
import { useForm } from "react-hook-form";
import './todoForm.css'

export default function TodoForm({setTodo}) {
  
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset
  } = useForm();
  const onSubmit = (data) => {
    setTodo((previousTodo) => [
      ...previousTodo, 
      data.todo
    ]);
    reset(); 
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="flex  flex-col justify-around items-center w-full p-3 gap-4"
    >
      <input
        {...register("todo", { required: true })} placeholder="Add your todos..."
        className="w-3/4 text-xl shadow-sm px-4 py-2 border-2 rounded-md focus:outline-none focus:ring-2 focus:ring-gray-500 focus:border-transparent "
      />
      {errors.todo && <span>This field is required</span>}
      <input type="submit" className="px-5 py-2 submit-button rounded-md" />
    </form>
  );
}
