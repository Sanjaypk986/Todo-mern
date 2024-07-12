import axios from "axios";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { changeLogginStatus } from "../../features/login/loginSlice";
import { setLoading } from "../../features/loader/loaderSlice";

export default function LoginForm() {
  const isLoading = useSelector((state) => state.loader.loading);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

  const onSubmit = async (data) => {
    dispatch(setLoading(true));
    try {
      const response = await axios.post(
        `${import.meta.env.VITE_BASE_URL}/auth/login`,
        data,
        { withCredentials: true }
      );
      dispatch(changeLogginStatus(true));
      dispatch(setLoading(false));
      navigate("/todolist");
    } catch (error) {
      dispatch(setLoading(false));
      console.error("Error logging in:", error);
    }
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="flex flex-col justify-around items-center w-full md:w-3/4 p-3 gap-4 min-h-[300px]"
    >
      <input
        {...register("email", {
          required: "This field is required",
          pattern: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
        })}
        type="email"
        placeholder="Email Id"
        className="w-3/4 text-md shadow-sm px-4 py-2 border-2 bg-gray-100 rounded-md focus:outline-none focus:ring-2 focus:ring-gray-500 focus:border-transparent"
      />
      {errors.email && (
        <span className="text-red-500">{errors.email.message}</span>
      )}
      <input
        {...register("password", {
          required: "This field is required",
          minLength: {
            value: 8,
            message: "Password must be at least 8 characters long",
          },
        })}
        type="password"
        placeholder="Password"
        className="w-3/4 text-md shadow-sm px-4 py-2 border-2 bg-gray-100 rounded-md focus:outline-none focus:ring-2 focus:ring-gray-500 focus:border-transparent"
      />
      {errors.password && (
        <span className="text-red-500 text-center">
          {errors.password.message}
        </span>
      )}
      <Link to={"/forgot-password"} className="text-blue-600 text-base">
        Forgot password?
      </Link>
      {isLoading ? (
        <div className="loader"></div>
      ) : (
        <input
          type="submit"
          value="Login"
          className="submit-button py-2 px-5 rounded-lg font-semibold"
        />
      )}
    </form>
  );
}
