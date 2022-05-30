import React from 'react';

export const themes = {
  light: {
    background:"#ffffff",
    boxShadow:"0 4px 6px -1px rgba(0,0,0,0.1)",
    inverseColor: "#000000"
  },
  dark: {
    background:"#212121",
    boxShadow:"0 4px 6px -1px rgba(255,255,255,0.1)",
    inverseColor: "#ffffff"
  }
};

const ThemeContext = React.createContext(themes.light);

export default ThemeContext;