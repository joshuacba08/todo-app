import React, { useContext } from 'react';
import CheckIcon from '../assets/icons/icon-check.svg'
import { ThemeContext } from '../context/ThemeContext';

const Task = ({task, handleState}) => {

  const { id, description, state } = task;
  const { theme } = useContext(ThemeContext)
  return (
    <div className={`flex gap-3 justify-start items-center px-6 bg ${theme=='dark'?'bg-slate-800':'bg-white'} h-12`}>
      
      <div className={`flex justify-center items-center w-6 h-6 rounded-full
        ${ state ? "bg-gradient-to-r from-cyan-500 to-fuchsia-600":"border border-solid border-slate-500" }
      `}
        onClick={()=>{
          console.log('cambiar estado de tarea');
          handleState(id)
        }}
      >
        { state && <img src={CheckIcon} /> }
      </div>

      <span className={theme=='dark'?'text-white':'text-slate-800'}>{description}</span> 
    
    </div>
  )
}

export default Task