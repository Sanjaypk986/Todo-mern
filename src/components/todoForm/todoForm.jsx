import React from "react";
import { useForm } from "react-hook-form";
import axios from "axios";
import "./todoForm.css";
import { useDispatch, useSelector } from "react-redux";
import { addTodo } from "../../features/todo/todoSlice";
import { setLoading } from "../../features/loader/loaderSlice";

export default function TodoForm() {
  const isLoading = useSelector(state=>state.loader.loading)
  const dispatch = useDispatch()
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

  const onSubmit = async (data) => {
    dispatch(setLoading(true))
    try {
      const response = await axios.post(
        `${import.meta.env.VITE_BASE_URL}/todos`,
        data, {withCredentials:true}
      );
      dispatch(addTodo(response.data))
      dispatch(setLoading(false))
      reset(); // Reset the form fields after successful submission
    } catch (error) {
      dispatch(setLoading(false))
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
      {errors.todo && (
        <span className="text-red-500">This field is required</span>
      )}
      {
        isLoading ? <div className="loader"></div>
        :
        <input
        type="submit"
        value={"Add Todo"}
        className="submit-button py-2 px-5 rounded-lg font-semibold"
      />
      }
    </form>
  );
}
