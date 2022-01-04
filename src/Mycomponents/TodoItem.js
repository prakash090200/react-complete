import React from 'react'

const TodoItem = (props) => {
    return (
        <div>
            <h6>{props.todo.sno}</h6>
            <h6>{props.todo.title}</h6>
            <p>{props.todo.desc}</p>
            <button className="btn btn-danger" onClick={()=>{props.ondelete(props.todo)}}>Delete</button>
        </div>
    )
}

export default TodoItem
