import React,{useContext, memo} from 'react';
import { ThemeContext } from '../context/ThemeContext';
import sun from '../assets/icons/icon-sun.svg';
import moon from '../assets/icons/icon-moon.svg';

const Header = () => {

  const themeContext = useContext(ThemeContext);
  const { changeTheme, theme } = themeContext;
  return (
    <header 
        className="w-screen h-56 bg-[url('/src/assets/images/bg-mobile-dark.jpg')] bg-center bg-no-repeat bg-cover p-6"
    >
        <div className="flex justify-between items-center">
            <h1 className="text-3xl font-semibold text-white tracking-widest">TODO</h1>
            <button onClick={changeTheme}>
              <img src={ theme=='dark'? moon : sun } />
            </button>
        </div>

    </header>
  )
};

export default Header