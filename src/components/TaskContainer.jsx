import React, { useState } from 'react'
import InputTask from './InputTask'
import TaskList from './TaskList';

const TaskContainer = () => {

    const [tasks, setTasks] =useState([]);
    const addTask = (task) =>{
        setTasks([...tasks,task]);
    }

  return (
    <div>
        <InputTask addTask={addTask} />
        <TaskList tasks={tasks} />
    </div>
  )
}

export default TaskContainer