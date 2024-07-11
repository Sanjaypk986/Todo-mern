import axios from "axios";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import { setLoading } from "../../features/loader/loaderSlice";

export default function SignupForm({ setUser }) {
  const [errorMessage, setErrorMessage] = useState("");
  const isLoading = useSelector(state=>state.loader.loading)
  const dispatch = useDispatch()
  const {
    register,
    handleSubmit,
    formState: { errors },
    watch,
    reset,
  } = useForm();

  const onSubmit = async (data) => {
    dispatch(setLoading(true))
    try {
      const response = await axios.post(
        `${import.meta.env.VITE_BASE_URL}/users`,
        data
      );
      setUser(false);
      dispatch(setLoading(false))
    } catch (error) {
      dispatch(setLoading(false))
      if (error.response && error.response.status === 409) {
        setErrorMessage("Email already exists");
      } else {
        setErrorMessage("Error creating user. Please try again.");
      }
      console.error("Error creating user:", error);
    }
  };

  const password = watch("password");

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="flex flex-col justify-around items-center w-full md:w-3/4 p-3 gap-4 min-h-[300px]"
    >
      {errorMessage && (
        <p className="text-red-500 text-center">{errorMessage}</p>
      )}
      <input
        {...register("name", { required: "This field is required" })}
        placeholder="Full Name"
        className="w-3/4 text-md shadow-sm px-4 py-2 border-2 rounded-md bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-500 focus:border-transparent"
      />
      {errors.name && (
        <span className="text-red-500">{errors.name.message}</span>
      )}
      <input
        {...register("email", {
          required: "This field is required",
          pattern: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
        })}
        type="email"
        placeholder="Email Id"
        className="w-3/4 text-md shadow-sm px-4 py-2 border-2 bg-gray-100 rounded-md focus:outline-none focus:ring-2 focus:ring-gray-500 focus:border-transparent"
      />
      {errors.email && <span className="text-red-500">Invalid Email</span>}
      <input
        {...register("password", {
          required: "This field is required",
          pattern:
            /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/,
        })}
        type="password"
        placeholder="Password"
        className="w-3/4 text-md shadow-sm px-4 py-2 border-2 bg-gray-100 rounded-md focus:outline-none focus:ring-2 focus:ring-gray-500 focus:border-transparent"
      />
      {errors.password && (
        <span className="text-red-500 text-center">
          Password must be at least 8 characters long and include at least one
          letter, one number, and one special character
        </span>
      )}
      <input
        {...register("confirmPassword", {
          required: "This field is required",
          validate: (value) => value === password || "Passwords do not match",
        })}
        type="password"
        placeholder="Confirm Password"
        className="w-3/4 text-md shadow-sm px-4 py-2 border-2 bg-gray-100 rounded-md focus:outline-none focus:ring-2 focus:ring-gray-500 focus:border-transparent"
      />
      {errors.confirmPassword && (
        <span className="text-red-500">{errors.confirmPassword.message}</span>
      )}
      {isLoading ? (
        <div className="loader"></div>
      ) : (
        <input
          type="submit"
          value="Signup"
          className="submit-button py-2 px-5 rounded-lg font-semibold"
        />
      )}
    </form>
  );
}
