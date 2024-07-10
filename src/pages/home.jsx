import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const Home = () => {
  const isLoggedIn = useSelector(state=>state.login.isLoggedIn)
  return (
    <main className=" flex items-center justify-center">
      <section className="container mx-auto flex flex-col justify-center items-center p-10">
        <h1 className="text-3xl sm:text-5xl md:text-6xl text-center font-bold mb-1">
          Streamline Your Tasks, Achieve Your Goals
        </h1>
        <img className="max-h-52 max-w-64 mb-4 rounded-full" src="https://img.freepik.com/free-vector/ambition-abstract-concept_335657-3013.jpg?t=st=1720414927~exp=1720418527~hmac=70c97d14c8feaf84b640d9f67119732a602e328c85282b65c77b1a6d36d41df4&w=740" alt="avatar" />
        <p className=" home-p text-base sm:text-lg md:text-xl text-center font-semibold mb-8 max-w-2xl leading-relaxed">
        Simplify life for both you and your team with Taskly, your ultimate task management solution.
        </p>
        <Link 
          to={isLoggedIn ? '/todolist': 'account'} 
          className="primary text-white py-3 px-8 rounded-md text-lg font-semibold shadow-lg transition-transform transform hover:scale-105"
        >
          Start For Free
        </Link>
      </section>
    </main>
  );
};

export default Home;
