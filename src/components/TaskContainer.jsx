import React, { useState } from 'react'
import InputTask from './InputTask'
import Modal from './Modal';
import TaskList from './TaskList';

import ReactIcon from '../assets/react.svg'

const TaskContainer = () => {

    const [tasks, setTasks] =useState([]);
    const addTask = (task) =>{
        task.id = tasks.length + 1;
        setTasks([...tasks,task]);
    }
    const handleState = (id) => {
      const newArrayTask = tasks.map(el=>{
        if(el.id == id){
          el.state = !el.state
        }
        return el;
      });
      setTasks(newArrayTask);
    }

  return (
    <div>
        <InputTask addTask={addTask} placeholder={'Ingresa una nueva tarea'} />
        <TaskList tasks={tasks} handleState={handleState} />

    </div>
  )
}

export default TaskContainer