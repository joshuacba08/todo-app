import React, { createContext, useState } from 'react';

export const ThemeContext = createContext();

const ThemeProvider = (props) => {
  
    const [ theme, setTheme ] = useState('dark');

    const changeTheme = () =>{
        const newTheme = theme == 'dark' ? 'light' : 'dark';
        setTheme(newTheme);
    }

    return (
    <ThemeContext.Provider
        value={{
            theme,
            changeTheme
        }}
    >
        {props.children}
    </ThemeContext.Provider>
  )
}

export default ThemeProvider;