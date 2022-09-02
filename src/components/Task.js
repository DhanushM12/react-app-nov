import React from 'react'

function Task(props) {
  return (
    <div>
        <li>{props.text} <button>Delete</button></li>
    </div>
  )
}

export default Task