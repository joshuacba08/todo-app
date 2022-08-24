import React from 'react';
import CheckIcon from '../assets/icons/icon-check.svg'

const Task = ({task, handleState}) => {

  const { id, description, state } = task;

  return (
    <div className="flex gap-3 justify-start items-center px-6 bg-slate-800 h-12">
      
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

      <span className="text-white">{description}</span> 
    
    </div>
  )
}

export default Task