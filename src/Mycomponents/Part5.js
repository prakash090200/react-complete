import React,{PureComponent, useState} from 'react'

export default function Part5(props){
    return (
        <div style={{backgroundColor:"grey",margin:"10px"}}>
           <h6>Part 5 PROPS in react</h6>
           
           <p>Hey {props.todo[0].sno}</p>
           <p>email id {props.todo[0].desc}</p>
           <p>WAIT FOR GAP</p>
           <p>email id {props.other.name}</p>
           <p>email id {props.other.email}</p>
           <br></br>
           <h6>Props as Function</h6>
           <p>email id {props.call()}</p> 
        </div>
    )
}


