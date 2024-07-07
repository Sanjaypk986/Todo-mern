import React from "react";
import { Link } from "react-router-dom";

const Pricing = () => {
  return (
    <main className="flex items-center justify-center py-12">
      <section className="container mx-auto px-4">
        <div className="text-center mb-8 flex flex-col justify-center items-center">
          <h1 className="text-3xl sm:text-5xl md:text-6xl font-bold mb-6">
            Simplify it all with <span>Taskly</span>
          </h1>
          <p className="home-p text-base sm:text-lg md:text-xl text-center font-semibold mb-8 max-w-2xl leading-relaxed">
            Simplify life for both you and your team. The world's #1 task
            manager and to-do list app.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 h-full sm:w-full lg:w-3/4 mx-auto rounded-lg  gap-8">
          <div className="priceCard col-span-1 p-6 rounded-lg w-full flex flex-col justify-center items-center my-2">
            <h2 className="text-2xl font-bold text-gray-800 mb-4">Free Plan</h2>
            <p className="text-gray-600 mb-4">
              All the essential features to manage your tasks efficiently.
            </p>
            <ul className="text-gray-600 mb-6  w-1/2">
              <li className="mb-2 flex justify-between items-center">
                <span className="mr-2">&#10004;</span>
                <p className="flex-1">Unlimited tasks</p>
              </li>
              <li className="mb-2 flex items-center">
                <span className="mr-2">&#10004;</span>
                <p className="flex-1">Basic analytics</p>
              </li>
              <li className="mb-2 flex items-center">
                <span className="mr-2">&#10004;</span>
                <p className="flex-1">Task reminders</p>
              </li>
              <li className="mb-2 flex items-center">
                <span className="mr-2">&#10004;</span>
                <p className="flex-1">Mobile and web access</p>
              </li>
            </ul>

            <p className="text-3xl font-bold text-gray-800 mb-6">
              $0<span className="text-lg">/month</span>
            </p>
            <Link
              to={"/account"}
              className="primary text-white py-3 px-8 rounded-md text-lg font-semibold shadow-lg transition-transform transform hover:scale-105"
            >
              Start For Free
            </Link>
          </div>

          <div className="priceCard col-span-1 p-6 rounded-lg w-full flex flex-col justify-center items-center my-2">
            <h2 className="text-2xl font-bold text-gray-800 mb-4">
              Premium Plan
            </h2>
            <p className="text-gray-600 mb-4">
              Unlock advanced features for work and collaboration.
            </p>
            <ul className="text-gray-600 mb-6 w-1/2">
              <li className="mb-2 flex justify-start items-center">
                <span className="mr-2">&#10004;</span>
                <p className="flex-1">Everything in Free Plan</p>
              </li>
              <li className="mb-2 flex justify-start items-center">
                <span className="mr-2">&#10004;</span>
                <p className="flex-1">Team collaboration</p>
              </li>
              <li className="mb-2 flex justify-start items-center">
                <span className="mr-2">&#10004;</span>
                <p className="flex-1">Advanced analytics</p>
              </li>
              <li className="mb-2 flex justify-start items-center">
                <span className="mr-2">&#10004;</span>
                <p className="flex-1">Priority support</p>
              </li>
            </ul>

            <p className="text-3xl font-bold text-gray-800 mb-6">
              $10<span className="text-lg">/month</span>
            </p>
            <Link
              to={"/account"}
              className="secondary text-white py-3 px-8 rounded-md text-lg  font-semibold shadow-lg transition-transform transform hover:scale-105"
            >
              Upgrade To Pro
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Pricing;
