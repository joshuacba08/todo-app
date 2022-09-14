import React, { useContext, useCallback } from 'react'
import InputTask from './InputTask'
import Modal from './Modal';
import TaskList from './TaskList';

import ReactIcon from '../assets/react.svg'
import { ThemeContext } from '../context/ThemeContext';

const TaskContainer = () => {

  const { theme } = useContext(ThemeContext);

  const momorizedOnAdd = useCallback( () => {
    alert('Se agregó una nueva tarea');
  },[])

  return (
    <div className='relative -top-24'>
        <InputTask onAdd = {momorizedOnAdd} theme={theme} placeholder={'Ingresa una nueva tarea'} />
        <TaskList theme={theme} />

    </div>
  )
}

export default TaskContainer