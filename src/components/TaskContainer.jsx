import React, { useContext, useState } from 'react'
import InputTask from './InputTask'
import Modal from './Modal';
import TaskList from './TaskList';

import ReactIcon from '../assets/react.svg'
import { ThemeContext } from '../context/ThemeContext';

const TaskContainer = () => {

  const { theme } = useContext(ThemeContext);

  return (
    <div className='relative -top-24'>
        <InputTask theme={theme} placeholder={'Ingresa una nueva tarea'} />
        <TaskList theme={theme} />

    </div>
  )
}

export default TaskContainer