import axios from "axios";
import React from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";

export default function LoginForm() {
  const navigate = useNavigate()
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset
  } = useForm();

  const onSubmit = async (data) => {
    try {
      const response = await axios.post(`${import.meta.env.VITE_BASE_URL}/users`, data);
      console.log("User created successfully:", response.data);
      navigate('/todolist')
    } catch (error) {
      console.error("Error creating user:", error);
    }
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="flex flex-col justify-around items-center w-full md:w-3/4 p-3 gap-4 min-h-[300px]"
    >
      <input
        {...register("email", { required: "This field is required", pattern: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/ })}
        type="email"
        placeholder="Email Id"
        className="w-3/4 text-md shadow-sm px-4 py-2 border-2 bg-gray-100 rounded-md focus:outline-none focus:ring-2 focus:ring-gray-500 focus:border-transparent"
      />
      {errors.email && <span className="text-red-500">Invalid Email</span>}
      <input
        {...register("password", {
          required: "This field is required",
          pattern: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/
        })}
        type="password"
        placeholder="Password"
        className="w-3/4 text-md shadow-sm px-4 py-2 border-2 bg-gray-100 rounded-md focus:outline-none focus:ring-2 focus:ring-gray-500 focus:border-transparent"
      />
      {errors.password && (
        <span className="text-red-500 text-center">Password must be at least 8 characters long and include at least one letter and one number</span>
      )}
      <input type="submit" value="Login" className="submit-button py-2 px-5 rounded-lg font-semibold" />
    </form>
  );
}
