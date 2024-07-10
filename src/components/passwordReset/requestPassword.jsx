import React from "react";
import { useForm } from "react-hook-form";

const RequestPassword = ({onSubmit}) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col about-card items-center justify-center w-full md:w-3/4 p-6 gap-4 min-h-[200px] bg-white rounded-lg ">
      <input
        {...register("email", {
          required: "Email is required",
          pattern: {
            value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
            message: "Invalid email address",
          },
        })}
        type="email"
        placeholder="Enter your email"
        className="w-full md:w-3/4 text-md shadow-sm px-4 py-2 border-2 bg-gray-100 rounded-md focus:outline-none focus:ring-2 focus:ring-gray-500 focus:border-transparent"
      />
      {errors.email && <span className="text-red-500">{errors.email.message}</span>}
      <button type="submit" className="secondary py-2 px-5 rounded-lg font-semibold mt-4">
        Request Password Reset
      </button>
    </form>
  );
};

export default RequestPassword;
