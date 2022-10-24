import React from "react";
import { Navbar } from "./CombineNavbar";
import "./Header.css";
export const Header = () => {
  return (
    <>
      <header className="header center">
        <h3>
          <a href="#home" className="link">
            Pooransuthar.
          </a>
        </h3>
        <Navbar />
      </header>
    </>
  );
};
