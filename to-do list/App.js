import React, { useState } from 'react';
import './App.css';
function TodoList() {
  const [tasks, setTasks] = useState([]);
  const hsub = (e) => {
    e.preventDefault();
    const newTask = {
      name: e.target.taskName.value,
      completed: false,
    };
    setTasks([...tasks, newTask]);
    e.target.reset();
  };

  const handleT = (index) => {
    const newTasks = [...tasks];
    newTasks[index].completed = !newTasks[index].completed;
    setTasks(newTasks);
  };

  const hDelete = (index) => {
    const newTasks = [...tasks];
    newTasks.splice(index, 1);
    setTasks(newTasks);
  };
  const placename='Title...';
  return (
    <div className='todo'>
      <div>
            
      <form id='form1' onSubmit={hsub}>
        <h2>my to-do list</h2>
        <hr/> 
        <h3>enter the tasks</h3>
        <input type="text" id="taskName" placeholder={placename}name="taskName" required />
        <button type="submit" id='but'>Add Task</button> 
      <ul id="list1" >
        {tasks.map((task, index) => (
          <Task
            key={index}
            name={task.name}
            completed={task.completed}
            handleT={() => handleT(index)}
            hDelete={() => hDelete(index)}
          />
        ))}
      </ul>
    </form>
    </div>
    </div>
  );
}

const  Task =({name, completed, handleT, hDelete} ) =>{
  return (
    <li id="jell"> 
  
      <input 
        type="checkbox"
        checked={completed}
        onChange={handleT}
      />
      <span style={{ textDecoration: completed ? 'line-through' : 'none' }}>
        {name}
      </span>
      <button onClick={hDelete} id="fbut">X</button> 

    </li>
  );
} 
export default TodoList;
