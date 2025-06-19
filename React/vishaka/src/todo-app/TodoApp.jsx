import React,{useState}from 'react';
import './TodoApp.css';
function TodoApp() {
  const [tasks,setTasks] =
  useState([]);
  const [input,setInput] = 
  useState('');

const addTask =() =>{
  if (input.trim() !== ''){
    setTasks([...tasks,input]);
    setInput
    ('');
  }
};
const removeTask = (index) => {
  const newTasks = tasks.filter((_,i) => i !== index);
  setTasks(newTasks);
};
  return (
    <div className= "App">
      <h1>To-Do List </h1>
      <div className="input-section">
        <input type="text"
        placeholder="enter a task"
        value={input}
        onChange={(e) => 
          setInput(e.target.value)}
          />
          <button onClick={addTask}
          >Add</button>
      </div>
      <ul>
        {tasks.map((task, index) => () =>(
          <li key={index}>
            {task}
            <button className="delete" onClick={() =>
              removeTask(index)}>delete</button>
            
          </li>
        ))}
      </ul>
          </div>
  );
};

export default TodoApp;

