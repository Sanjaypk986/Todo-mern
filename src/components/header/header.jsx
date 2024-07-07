import React, { useEffect, useState } from "react";
import "./header.css";
import { MenuData } from "../../services/menuData";
import { Link } from "react-router-dom";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { changeLogginStatus } from "../../features/login/loginSlice";
const Header = () => {
  const dispatch = useDispatch();
  const verifyLogin = useSelector(state=>state.login.isLoggedIn)
    // const[verifyLoginq,setVerifyLogin] = useState(false)
    const[toggle,setToggle] = useState(false)
    useEffect(() => {
      const fetchData= async()=>{
        try {
          const response = await axios.get(`${import.meta.env.VITE_BASE_URL}/auth/verify`,{withCredentials:true})
          const verifyLogin = response.data.verified
          dispatch(changeLogginStatus(verifyLogin))
          // setVerifyLogin(verifyLogin)
          console.log(verifyLogin);
        } catch (error) {
          console.log(error);
        }
      }  
      fetchData()
    }, [verifyLogin])
    

    function handleMenu (){
        setToggle(!toggle)
    }


  return (
    <header className="p-5  border-b-2">
      <nav className="flex justify-between items-center container py-2 md:px-5  mx-auto  font-semibold ">
        <span className="whitespace-nowrap text-2xl md:text-2xl font-bold logo">
          <Link to={'/'} className="tracking-wider text-3xl">
            <i className="fa-solid fa-clipboard-list p-1 mr-1 text-xl md:text-2xl "></i>
            Taskly
          </Link>
        </span>
        <div className="menu-bar">
        <i className={`${toggle? 'fas fa-times':'fas fa-bars'}`} onClick={handleMenu}></i>
        </div>
        <ul className={` ${toggle? 'nav-menu active' : 'nav-menu'}`}>
          {MenuData.map((item, index) => (
            <li key={index}>
              <Link to={item.url} className={item.csName}>
                <i className={item.icon}></i>
                {item.title}
              </Link>
            </li>
          ))}
          {verifyLogin&&
          <Link to={'/logout'} className="nav-links mx-2">
          Logout
          </Link>
          }
        </ul>
        <div className="flex items-center justify-between gap-5">
          <i className="fa-regular fa-moon text-xl md:text-2xl"></i>
        </div>
      </nav>
    </header>
  );
};

export default Header;
