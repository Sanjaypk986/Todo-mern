import React, { useState } from 'react';
import RequestPassword from '../components/passwordReset/requestPassword';
import axios from 'axios';


const ForgotPassword = () => {
  const [resetRequested, setResetRequested] = useState(false);
  const [loading, setLoading] = useState(false);

  const onSubmit = async (data) => {
    setLoading(true);
    try {
      const response = await axios.post(
        `${import.meta.env.VITE_BASE_URL}/auth/request-reset`,
        data
      );
      console.log(response);
      setResetRequested(true);
      setLoading(false);
    } catch (error) {
      console.error("Error in forgot password:", error);
      alert("An error occurred. Please try again.");
      setLoading(false);
    }
  };

  return (
    <main className="flex items-center justify-center">
      <section className="container mx-auto flex flex-col justify-center items-center">
        <h2 className="text-3xl sm:text-3xl md:text-4xl font-bold my-4">Forgot <span>Password</span></h2>
        <div className="w-full about-card md:w-3/4 flex justify-center items-center bg-white p-8 rounded-lg shadow-lg">
        {loading ? (
  <div className="loader "></div>
) : resetRequested ? (
  <div className="text-center">
    <p className="text-lg text-green-600">Password reset request successful! Please check your email.</p>
  </div>
) : (
  <RequestPassword onSubmit={onSubmit} />
)}
        </div>
      </section>
    </main>
  );
};

export default ForgotPassword;
