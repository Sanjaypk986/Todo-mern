import React, { useEffect, useRef, useState } from "react";
import "./header.css";
import { MenuData } from "../../services/menuData";
import { Link } from "react-router-dom";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { changeLogginStatus } from "../../features/login/loginSlice";

const Header = () => {
  const dispatch = useDispatch();
  const verifyLogin = useSelector(state => state.login.isLoggedIn);
  const [toggle, setToggle] = useState(false);
  const menuRef = useRef(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(`${import.meta.env.VITE_BASE_URL}/auth/verify`, { withCredentials: true });
        const verifyLogin = response.data.verified;
        dispatch(changeLogginStatus(verifyLogin));
      } catch (error) {
        console.log(error);
      }
    };

    fetchData(); // Initial fetch on component mount

    const handleClickOutside = (event) => {
      if (menuRef.current && !menuRef.current.contains(event.target) && !event.target.classList.contains("fa-times")) {
        setToggle(false); // Close the menu if clicked outside of menu or menu-bar and not on the X button
      }
    };

    document.addEventListener("mousedown", handleClickOutside); // Add event listener for clicks outside
    return () => {
      document.removeEventListener("mousedown", handleClickOutside); // Clean up event listener on unmount
    };
  }, [dispatch]); // Depend on dispatch for useEffect dependencies

  function handleMenu() {
    setToggle(!toggle); // Toggle the state to open/close the menu
  }

  return (
    <header className="p-5 border-b-2">
      <nav className="flex justify-between items-center container py-2 md:px-5 mx-auto font-semibold">
        <span className="whitespace-nowrap text-2xl md:text-2xl font-bold logo">
          <Link to={'/'} className="tracking-wider text-3xl">
            <i className="fa-solid fa-clipboard-list p-1 mr-1 text-xl md:text-2xl"></i>
            Taskly
          </Link>
        </span>
        <div className="menu-bar">
          <i className={`fas ${toggle ? 'fa-times' : 'fa-bars'}`} onClick={handleMenu}></i>
        </div>
        <ul className={` ${toggle ? 'nav-menu active' : 'nav-menu'}`} ref={menuRef}>
          {MenuData.map((item, index) => (
            <li key={index}>
              <Link to={item.url} className={item.csName}>
                <i className={item.icon}></i>
                {item.title}
              </Link>
            </li>
          ))}
          {verifyLogin &&
            <li>
              <Link to={'/logout'} className="nav-links mx-2">
                Logout
              </Link>
            </li>
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
