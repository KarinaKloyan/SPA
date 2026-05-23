import { todos } from "../../index";
import './Todos.css'


function Todos(){
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