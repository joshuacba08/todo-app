import React, { createContext, useState } from 'react';

export const TasksContext = createContext();

const TasksProvider = (props) => {

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

    const clearCompleted = (arrayTasks) => {
      const newArrayTasks = arrayTasks.filter( el => el.state === false);
      setTasks(newArrayTasks);
    }  
    
    return(
        <TasksContext.Provider
            value={{
                /*Acá estará toda la info que yo quiero compartir en mi context*/
                tasks,
                addTask,
                handleState,
                clearCompleted
            }}
        >

            {props.children}
            

        </TasksContext.Provider>
    )

};

export default TasksProvider;