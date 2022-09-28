import React from "react";
import AnchorLink from "react-anchor-link-smooth-scroll";
import { FaMoon, FaSun, FaTimes, FaBars } from "react-icons/fa";
import "../style.css";
import { useState, useEffect } from "react";

function NavBar() {
  const [theme, setTheme] = useState("light");
  const [menuon, setMenu] = useState(false);
  /*const navStatus = function (navOnDark) {
   light === false
      ? navOnDark.forEach((nav) => nav.classList.add("navondark"))
      : navOnDark.forEach((nav) => nav.classList.remove("navondark"));
  };*/
  const bodyOfDocument = document.querySelector("html");
  const navOnDark = document.querySelectorAll(".decoration");

  const lightOnClick = function (e) {
    e.preventDefault();
    if (theme === "light") {
      window.localStorage.setItem("theme", "dark");

      setTheme("dark");
    } else {
      window.localStorage.setItem("theme", "light");

      setTheme("light");
    }
  };
  useEffect(() => {
    const localTheme = window.localStorage.getItem("theme");
    localTheme && setTheme(localTheme);
  }, []);

  const changeOnAdd = function () {
    const localTheme = window.localStorage.getItem("theme");
    if (localTheme === "dark") {
      bodyOfDocument.classList.add("sunbody");
      //navStatus();
      navOnDark.forEach((nav) => nav.classList.add("navondark"));
    } else {
      navOnDark.forEach((nav) => nav.classList.remove("navondark"));
      //navStatus();
      bodyOfDocument.classList.remove("sunbody");
    }
  };

  changeOnAdd();

  const toggleMenu = function () {
    setMenu(!menuon);
  };

  return (
    <div className="navbar" id="nav">
      <AnchorLink href="#about">
        <img
          className="avtaar-img"
          src="https://blog.doxzoo.com/wp-content/uploads/2018/12/Lucy-Avatar.png"
        />
      </AnchorLink>
      <ul
        className="navlist"
        style={{
          display: menuon ? "flex" : null,
        }}
      >
        <li>
          <AnchorLink href="#pro" className="decoration" onClick={toggleMenu}>
            Projects
          </AnchorLink>
        </li>
        <li>
          <AnchorLink href="#skill" className="decoration" onClick={toggleMenu}>
            Skills
          </AnchorLink>
        </li>
        <li>
          <AnchorLink
            href="#contact"
            className="decoration"
            onClick={toggleMenu}
          >
            Contact
          </AnchorLink>
        </li>
      </ul>
      {menuon === false && (
        <div className="moon" onClick={lightOnClick}>
          {theme === "light" ? <FaMoon className="" /> : <FaSun />}
        </div>
      )}
      <div className="hamburger--bar" onClick={toggleMenu}>
        {menuon ? <FaTimes style={{ color: "#ddd6d6" }} /> : <FaBars />}
      </div>
    </div>
  );
}

export default NavBar;
