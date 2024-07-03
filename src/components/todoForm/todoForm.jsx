import React from "react";
import { useForm } from "react-hook-form";
import axios from "axios";

export default function TodoForm({ setTodos }) {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset
  } = useForm();

  const onSubmit = async (data) => {
    try {
      const response = await axios.post(`${import.meta.env.VITE_BASE_URL}/todos`, data);
      setTodos((previousTodos) => [
        ...previousTodos,
        response.data // Assuming response.data contains the new todo item
      ]);
      reset(); // Reset the form fields after successful submission
    } catch (error) {
      console.error("Error adding todo:", error);
    }
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="flex flex-col justify-around items-center w-full p-3 gap-4"
    >
      <input
        {...register("todo", { required: true })}
        placeholder="Add your todos..."
        className="w-3/4 text-xl shadow-sm px-4 py-2 border-2 rounded-md focus:outline-none focus:ring-2 focus:ring-gray-500 focus:border-transparent"
      />
      {errors.todo && <span className="text-red-500">This field is required</span>}
      <input type="submit" className="px-5 py-2 submit-button rounded-md" />
    </form>
  );
}
