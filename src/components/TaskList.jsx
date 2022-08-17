import React from 'react';
import Task from './Task';
const TaskList = ({tasks}) => {
  return (
    <div>

      {tasks.map(el => <Task task={el} />)}

    </div>
  )
}

export default TaskList