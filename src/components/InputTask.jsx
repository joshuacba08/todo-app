import React, { useContext, useState } from 'react';
import Swal from 'sweetalert2';
import { TasksContext } from '../context/TasksContext';
import PropTypes from 'prop-types';

const InputTask = ({ placeholder, theme}) => {

    const taskContext = useContext(TasksContext);
    const { addTask } = taskContext;

    const Toast = Swal.mixin({
        toast:true,
        background:"#16a34a",
        color:"white",
        position:"bottom",
        timer:2000,
        showConfirmButton: false
    })

    const [ value, setValue ] = useState('');
    const hangleOnChange = (e) => {
        setValue(e.target.value);
    }
    const handleSubmit = (e) => {
        e.preventDefault();
        addTask({
            description:value,
            state:false
        });
        setValue('');
        Toast.fire({
            title: 'Tarea agregada'
          });
        
    }

  return (
    <form onSubmit={handleSubmit} className={`flex gap-3 justify-start px-6 items-center ${theme=='dark'?'bg-slate-800':'bg-white'} h-12 w-4/5 ml-auto mr-auto rounded-lg`}
    >
        <div className="w-6 h-6 border rounded-full border-solid border-slate-500"></div>
        <input className={`outline-none bg-transparent ${theme=='dark'?'text-white':'text-slate-800'}`}                   
            type="text"   
            placeholder={placeholder}
            value={value}
            onChange={hangleOnChange} 
        />
    </form>
  )
}

InputTask.propTypes = {

    placeholder: PropTypes.string.isRequired,

}


export default InputTask