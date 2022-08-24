import React, { useState } from 'react'
import PropTypes from 'prop-types';

const InputTask = ({addTask, placeholder}) => {

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
    }

  return (
    <form onSubmit={handleSubmit} className="flex gap-3 justify-start px-6 items-center bg-slate-800 h-12 w-4/5 ml-auto mr-auto rounded-lg"
    >
        <div className="w-6 h-6 border rounded-full border-solid border-slate-500"></div>
        <input className="outline-none bg-transparent text-white"                   
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
    addTask: PropTypes.func.isRequired,

}


export default InputTask