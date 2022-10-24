import React, { createContext, useState } from "react";
import  PropTypes  from "prop-types"

const ThemeContext=createContext();

const ThemeProvider= ({children}) => {
    const [themename,setThemename]=useState("light")
    const toggleTheme= ()=> {
        themename === " light" ? setThemename("dark") : setThemename("light")
    }

    return (
        <ThemeContext.Provider value={{ themename,toggleTheme}}>
            {children}
        </ThemeContext.Provider>
    )
}

ThemeProvider.propTypes = {
    children: PropTypes.node.isRequired
  };
  
  export { ThemeProvider, ThemeContext };