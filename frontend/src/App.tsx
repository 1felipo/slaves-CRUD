import React, { useState } from 'react';

import Navbar from './components/Navbar/Navbar';
import AddSlavesForm from './components/AddSlavesForm/AddSlavesForm';
import SlavesContainer from './components/SlavesContainer/SlavesContainer';
import ThemeContext, { themes } from "./configuration/theme";

import "./App.css"

function App() {

  const [theme, setTheme] = useState(themes.light)

  const toggleTheme = () => {
    setTheme(() => {
      return theme === themes.dark ? themes.light : themes.dark;
    });
  }

  document.getElementById("body")
  ?.setAttribute("style",`background-color:${theme.background}`)

  return (
    <div className="App">
      <ThemeContext.Provider value={theme}>
        <Navbar toggleTheme={toggleTheme}/>
        <div className="container">
          <AddSlavesForm/>
          <SlavesContainer/>
        </div>
      </ThemeContext.Provider>
    </div>
  );
}

export default App;
