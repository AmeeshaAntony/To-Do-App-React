import React, { useState } from 'react';
import './App.css';

function App() {
  const [toDos, setTodos] = useState([]);
  const [todo, setTodo] = useState('');
  const daysOfWeek = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
  const today = new Date().getDay(); // Get the current day index (0-6)
clearInterval
  const addTodo = () => {
    if (todo.trim() !== '') {
      setTodos([...toDos, {id : Date.now(),text : todo,status : false }]); // Corrected usage of spread operator
      setTodo(''); // Clear input after adding todo
    }
  };

  return (
    <div className="app">
      <div className="mainHeading">
        <h1>ToDo List</h1>
      </div>
      <div className="subHeading">
        <br />
        <h2>Whoop, it's {daysOfWeek[today]} 🌝 ☕ </h2> 
      </div>
      <div className="input">
        <input value={todo} onChange={(e) => setTodo(e.target.value)} type="text" placeholder="🖊️ Add item..." />
        <i onClick={addTodo} className="fas fa-plus"></i> {/* Call addTodo function on click */}
      </div>
      <div className="todos">
        {toDos.map((obj, index) => (
          <div key={index} className="todo">
            <div className="left">
              <input onChange={(e)=>{
                console.log(e.target.checked)//since it is checkbox give target.checked
                setTodos(toDos.filter(obj2=>{
                  if(obj2.id===obj.id){
                    obj2.status=e.target.checked
                  }
                  return obj2
                }))
              } }value={obj.status} type="checkbox" name="" id="" />
              <p>{obj.text}</p>
              
            </div>
            <div className="right">
              <i className="fas fa-times"></i>
            </div>
          </div>
        ))}
        {
          toDos.map((obj)=>{
            if(obj.status){
              return(<h1>{obj.text}</h1>)
            }
            return null
          })
        }
      </div>
    </div>
  );
}

export default App;
