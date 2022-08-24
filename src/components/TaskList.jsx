import React from 'react';
import PropTypes from 'prop-types';
import Task from './Task';
const TaskList = ({tasks, handleState}) => {
  return (
    <div className={'mt-6 rounded-lg overflow-hidden w-4/5 ml-auto mr-auto'}>

      {tasks.map(el => <Task key={el.id} task={el} handleState={handleState}/>)}

    </div>
  )
}

TaskList.propTypes = {
  tasks: PropTypes.array.isRequired,
  handleState: PropTypes.func.isRequired
}

TaskList.defaultProps = {
  tasks: [{id:0, description:'lorem ipsum', state: false}]
}





export default TaskList