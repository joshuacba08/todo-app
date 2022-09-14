import React, { useContext, useMemo } from 'react';
import { TasksContext } from '../context/TasksContext';
import Task from './Task';

const TaskList = ({ theme }) => {

  const taskContext = useContext(TasksContext);
  const { tasks, handleState, clearCompleted } = taskContext;

  const getItemsLeft = (arrayTasks) => {
    const result = arrayTasks.filter(el => el.state === false);
    return result.length;
  }
  
  const memorizedValue = useMemo( () => getItemsLeft(tasks),[tasks]);

  return (
    <div className={'mt-6 flex flex-col gap-1px rounded-lg overflow-hidden w-4/5 ml-auto mr-auto'}>

      {tasks.map(el => <Task key={el.id} task={el} handleState={handleState}/>)}

      <div className={`flex gap-3 justify-between items-center px-6 ${theme=='dark'?'bg-slate-800':'bg-white'} h-12 text-slate-500 font-semibold`}>
        <button>{ memorizedValue } items left</button>
        <button onClick={()=>{clearCompleted(tasks)}}>Clear completed</button>
      </div>

    </div>
  )
}





export default TaskList