import React, { useState } from 'react';
import SignupForm from '../components/accountForm/signupForm';
import { Link } from 'react-router-dom';
import LoginForm from '../components/accountForm/loginForm.jsx';
import ('../index.css')

const Account = () => {
    const[user,setUser]= useState(true)
    const handleAccount =()=>{
        setUser(!user)
    }
  return (
    <main className="flex items-center justify-center ">
      <section className="container mx-auto my-5 px-4">
        <div className="grid  grid-cols-1 sm:grid-cols-2 h-full sm:w-full lg:w-3/4 mx-auto rounded-lg overflow-hidden account-div transition-opacity duration-500">
          {
            user ? (
                <>
                <div className="flex flex-col account-card account-card justify-center col-span-1 items-center py-8 min-h-[250px] md:min-h-[350px] transition-opacity duration-1000">
            <h3 className="text-xl sm:text-3xl md:text-4xl font-bold my-3">Signup</h3>
            <SignupForm setUser={setUser}/>
          </div>
          <div className="account-right col-span-1 flex flex-col justify-center items-center py-8 px-4 text-center min-h-[250px] md:min-h-[350px]"> {/* Set a minimum height here */}
            <h3 className="text-xl sm:text-3xl md:text-4xl text-white font-bold mb-6">Hello, Friend!</h3>
            <p className="text-md sm:text-lg text-white">
              Enter your details and achieve your goals with our todo app!
            </p>
            <Link
               onClick={handleAccount}
              className="account-button py-2 px-5 rounded-lg font-semibold bg-white mt-4"
            >
              Login
            </Link>
          </div>
                </>
            ): (
                <>
                <div className="account-right col-span-1 flex flex-col justify-center items-center py-8 px-4 text-center min-h-[250px] md:min-h-[350px] transition-opacity duration-1000"> {/* Set a minimum height here */}
            <h3 className="text-xl sm:text-3xl md:text-4xl text-white font-bold mb-6">Welcome Back!</h3>
            <p className="text-md sm:text-lg text-white">
            To keep connected with us please login with your personal info
            </p>
            <Link
               onClick={handleAccount}
              className="account-button py-2 px-5 rounded-lg font-semibold bg-white mt-4"
            >
              Signup
            </Link>
          </div>
          <div className="flex flex-col justify-center account-card col-span-1 items-center py-8 bg-white min-h-[250px] md:min-h-[350px]"> {/* Set a minimum height here */}
            <h3 className="text-xl sm:text-3xl md:text-4xl font-bold my-3">Login</h3>
            <LoginForm/>
          </div>
                </>
            )
          }
        </div>
      </section>
    </main>
  );
};

export default Account;
