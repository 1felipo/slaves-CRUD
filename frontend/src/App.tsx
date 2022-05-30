import React, { useState } from 'react';

import Navbar from './components/Navbar/Navbar';
import ThemeContext, { themes } from "./configuration/theme";

import "./App.css"

function App() {

  const [theme, setTheme] = useState(themes.light)

  const toggleTheme = () => {
    setTheme(() => {
      return theme === themes.dark ? themes.light : themes.dark;
    });
  }

  return (
    <div className="App" style={{ background: theme.background }}>
      <ThemeContext.Provider value={theme}>
        <Navbar toggleTheme={toggleTheme}/>
        <div className="container">
        </div>
      </ThemeContext.Provider>
    </div>
  );
}

export default App;
