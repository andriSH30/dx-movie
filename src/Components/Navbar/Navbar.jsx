import { React, useEffect } from "react";
import { Outlet, useNavigate } from "react-router-dom";

import SiteIdentity from "../SiteIdentity/SiteIdentity";

import "./Navbar.scss";

const Navbar = () => {
  const navigate = useNavigate();

  useEffect(() => {
    setActiveNavbarFromLoad();
  }, []);

  const setActiveNavbarFromLoad = () => {
    const currentUrl = window.location.pathname;

    if (currentUrl === "/") {
      let element = document.getElementsByClassName("fa-house")[0];
      element.classList.add("active");
    } else if (currentUrl === "/bookmark") {
      let element = document.getElementsByClassName("fa-bookmark")[0];
      element.classList.add("active");
    } else if (currentUrl === "/history") {
      let element = document.getElementsByClassName("fa-clock-rotate-left")[0];
      element.classList.add("active");
    } else if (currentUrl === "/user") {
      let element = document.getElementsByClassName("fa-user")[0];
      element.classList.add("active");
    }
  };

  const clicked = (name) => {
    const elements = document.querySelectorAll("i");
    const activeClass = document.getElementsByClassName(name)[0];

    elements.forEach((element) => {
      element.classList.remove("active");
    });
    activeClass.classList.add("active");

    const Pages = {
      "fa-house": "/",
      "fa-bookmark": "/bookmark",
      "fa-clock-rotate-left": "/history",
      "fa-user": "/user",
    };

    localStorage.setItem("active-navbar", Pages[name]);
    navigate(Pages[name]);
  };

  return (
    <div className="page-container">
      <div className="content-container">
        <SiteIdentity />
        <div className="content-page">
          <Outlet />
        </div>
        <div className="navbar-container">
          <div className="nav-item">
            <i
              className="fa-solid fa-house"
              onClick={() => clicked("fa-house")}
            ></i>
          </div>
          <div className="nav-item">
            <i
              className="fa-solid fa-bookmark"
              onClick={() => clicked("fa-bookmark")}
            ></i>
          </div>
          <div className="nav-item">
            <i
              className="fa-solid fa-clock-rotate-left"
              onClick={() => clicked("fa-clock-rotate-left")}
            ></i>
          </div>
          <div className="nav-item">
            <i
              className="fa-solid fa-user"
              onClick={() => clicked("fa-user")}
            ></i>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
