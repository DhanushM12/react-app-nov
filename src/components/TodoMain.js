import React, {useState} from 'react';
import Task from './Task';

function TodoMain() {
    const [task, setTask] = useState("");
    const [taskArray, setTaskArray] = useState([]);
    const onTaskChange = (event) => {
        setTask(event.target.value)
    }

    function addTask(){
        if (task !== ""){
            setTaskArray((prevTasks) => {
                return [...prevTasks, task]
            })
            setTask("");
        }        
    }
    const deleteItem = (id) => {
        // console.log(id, 'to be deleted')
        setTaskArray((prevTasks) => {
            return prevTasks.filter((ele, index) => {
                return index !== id;
            })
        })
    }
  return (
    <div>
        <div>
            <h1>My Todo list</h1>
            <input type="text" value={task} placeholder="Add tasks" onChange={onTaskChange}/>
            <button onClick={addTask}>Add</button>
        </div>
        <ol>
            {taskArray.map((val, index)=> {
                return <Task key={index} id={index} text={val} onSelect={deleteItem}/>
            })}
        </ol>
    </div>
  )
}

export default TodoMain