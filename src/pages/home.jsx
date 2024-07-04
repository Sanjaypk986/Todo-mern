import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <main className=" flex items-center justify-center">
      <section className="container mx-auto flex flex-col justify-center items-center p-10">
        <h1 className="text-3xl sm:text-5xl md:text-6xl text-center font-bold mb-6">
          Streamline Your Tasks, Achieve Your Goals
        </h1>
        <p className=" home-p text-base sm:text-lg md:text-xl text-center font-semibold mb-8 max-w-2xl leading-relaxed">
          Simplify life for both you and your team. The world's #1 task manager and to-do list app.
        </p>
        <Link 
          to={'/todolist'} 
          className="primary text-white py-3 px-8 rounded-md text-lg font-semibold shadow-lg transition-transform transform hover:scale-105"
        >
          Start For Free
        </Link>
      </section>
    </main>
  );
};

export default Home;
