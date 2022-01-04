import React from 'react'
import TodoItem from './TodoItem';
const Todos = (props) => {
    return (
        <div className="container">
        <h3>todo list</h3>
        {props.abc.length===0?"Noth left":
       props.abc.map((todof)=>{
            return (
                <TodoItem todo={todof} ondelete={props.ondel}/>
            )
            
        })}
        
        
        
        </div>
    )
}

export default Todos
