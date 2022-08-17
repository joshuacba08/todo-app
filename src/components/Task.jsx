import React from 'react'

const Task = ({task}) => {
  return (
    <div className="text-white">{task.description}</div>
  )
}

export default Task