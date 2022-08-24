import React from 'react'

const Modal = (props) => {
  return (
    <div className="bg-white h-14">
        { props.children }
    </div>
  )
}

export default Modal