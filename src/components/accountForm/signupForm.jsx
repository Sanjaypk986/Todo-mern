import React from "react";
import { useForm } from "react-hook-form";

export default function SignupForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset
  } = useForm();

  const onSubmit = async (data) => {
    console.log(data);
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="flex flex-col justify-around items-center w-full md:w-3/4 p-3 gap-4 min-h-[300px]"
    >
      <input
        {...register("name", { required: "This field is required" })}
        placeholder="Full Name"
        className="w-3/4 text-md shadow-sm px-4 py-2 border-2 rounded-md bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-500 focus:border-transparent"
      />
      {errors.name && <span className="text-red-500">{errors.name.message}</span>}
      <input
        {...register("email", { required: "This field is required", pattern: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/ })}
        placeholder="Email Id"
        className="w-3/4 text-md shadow-sm px-4 py-2 border-2 bg-gray-100 rounded-md focus:outline-none focus:ring-2 focus:ring-gray-500 focus:border-transparent"
      />
      {errors.email && <span className="text-red-500">Invalid Email</span>}
      <input
        {...register("password", {
          required: "This field is required",
          pattern: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/
        })}
        placeholder="Password"
        className="w-3/4 text-md shadow-sm px-4 py-2 border-2 bg-gray-100 rounded-md focus:outline-none focus:ring-2 focus:ring-gray-500 focus:border-transparent"
      />
      {errors.password && (
        <span className="text-red-500 text-center">Password must be at least 8 characters long and include at least one letter and one number</span>
      )}
      <input type="submit" value="Signup" className="submit-button py-2 px-5 rounded-lg font-semibold" />
    </form>
  );
}
