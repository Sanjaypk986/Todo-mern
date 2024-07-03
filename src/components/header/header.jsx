import React, { useState } from "react";
import "./header.css";
import { MenuData } from "../../services/menuData";
import { Link } from "react-router-dom";
const Header = () => {

    const[toggle,setToggle] = useState(false)

    function handleMenu (){
        setToggle(!toggle)
    }


  return (
    <header className="p-5  border-b-2">
      <nav className="flex justify-between items-center container py-2 md:px-5  mx-auto  font-semibold ">
        <span className="whitespace-nowrap text-2xl md:text-2xl font-bold logo">
          <a href="#">
            <i className="fa-solid fa-clipboard-list p-1 mr-1 text-xl md:text-2xl"></i>
            Taskly
          </a>
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
        </ul>
        <div className="flex items-center justify-between gap-5">
          <i className="fa-regular fa-moon text-xl md:text-2xl"></i>
        </div>
      </nav>
    </header>
  );
};

export default Header;
