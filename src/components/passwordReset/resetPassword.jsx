import axios from "axios";
import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { Link, useLocation } from "react-router-dom";

const ResetPassword = () => {
    const [resetRequested, setResetRequested] = useState(false);
    // for loader
    const [loading, setLoading] = useState(false);
    // fetches current URL details
  const location = useLocation();
  // to store token from url
  const [token, setToken] = useState("");
  // to show reset message
  const [message, setMessage] = useState("");

  useEffect(() => {
    // to get url value after ? mark
    const searchParams = new URLSearchParams(location.search);
    // retrieves the value of the query parameter named token from the URL.
    const tokenQuery = searchParams.get('token')
    // check tokenQuery available and setToken
    if(tokenQuery){
        setToken(tokenQuery)
    }
  }, [location]); // add location in dependancy array to render when location change.

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  const password = watch("password");

  const onSubmit = async (data) => {
    setLoading(true);
    const newPassword = data.password
    try {
      const response = await axios.post(`${import.meta.env.VITE_BASE_URL}/auth/reset-password`, { token ,newPassword });
      setResetRequested(true);
      setLoading(false);
    } catch (error) {
        setLoading(false);
        setMessage(error.response.data); // Display error message from backend
    }
  };

  return (
    <main className="flex items-center justify-center ">
      <section className="container mx-auto flex flex-col justify-center items-center">
        <h2 className="text-3xl sm:text-3xl md:text-4xl font-bold my-2">Reset <span>Password</span></h2>
        <div className="w-full about-card md:w-3/4 flex justify-center items-center bg-white p-8 rounded-lg shadow-lg">
        {loading ? (
  <div className="loader"></div>
) : resetRequested ? (
  <div className="text-center">
    <p className="text-lg text-green-600">Password reset successful!</p>
    <Link
          to={'/account'} 
          className="primary my-3  mx-auto text-white py-3 px-8 rounded-md text-lg font-semibold shadow-lg transition-transform transform hover:scale-105"
        >
          Login
        </Link>
  </div>
) : (
    <form onSubmit={handleSubmit(onSubmit)} className="flex about-card flex-col items-center justify-center w-full md:w-3/4 p-6 gap-4 min-h-[200px] bg-white rounded-lg ">
    <input
      {...register("password", {
        required: "This field is required",
        pattern: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/
      })}
      type="password"
      placeholder="Type New Password"
      className="w-3/4 text-md shadow-sm px-4 py-2 border-2 bg-gray-100 rounded-md focus:outline-none focus:ring-2 focus:ring-gray-500 focus:border-transparent"
    />
    {errors.password && (
      <span className="text-red-500 text-center">
        Password must be at least 8 characters long and include at least one letter, one number, and one special character
      </span>
    )}
    <input
      {...register("confirmPassword", {
        required: "This field is required",
        validate: value => value === password || "Passwords do not match"
      })}
      type="password"
      placeholder="Confirm Password"
      className="w-3/4 text-md shadow-sm px-4 py-2 border-2 bg-gray-100 rounded-md focus:outline-none focus:ring-2 focus:ring-gray-500 focus:border-transparent"
    />
    {errors.confirmPassword && (
      <span className="text-red-500">{errors.confirmPassword.message}</span>
    )}

    <button type="submit" className="secondary py-2 px-5 rounded-lg font-semibold mt-4">
      Reset Password
    </button>
    {message && <p className="text-red-600">{message}</p>}
  </form>
)}
   
    </div>
      </section>
    </main>
  );
};

export default ResetPassword;
