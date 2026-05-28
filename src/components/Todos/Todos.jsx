import { useState, useEffect } from 'react'
import './Todos.css'


function Todos(){
   const [todos, setTodos] = useState([])
  
    useEffect(() =>{
      fetch("https://jsonplaceholder.typicode.com/todos")
        .then((response) => response.json())
        .then((data) => setTodos(data))
        .catch((error) => console.log(error))
    }, [])
  
      return (
        <div className="todos">
          {todos.map((el) => {
            return (
              <div className="card" key={el.id}>
                <h2 className="card-title">{el.title}</h2>
                <p className="card-completed">{el.completed}</p>
              </div>
            );
          })}
        </div>
      ); 
}

export default Todos