import React,{useState} from 'react'
import { Button } from 'react-bootstrap';

export default function Part25() {
    return (
        <div>
            <b> Higher Order Component (HOC) Part 25</b><br></br>
            <HOCred cmp={Counter}/>
            <HOgreen cmp={Counter}/>
            <HOblue cmp={Counter}/>
        </div>
    )
}



function HOCred(props) {
    return (
        <>
          <p style={{backgroundColor:"red"}}> Red: <props.cmp/></p>
        </>
    )
}
function HOgreen(props) {
    return (
        <>
          <p style={{backgroundColor:"green"}}> Red: <props.cmp/></p>
        </>
    )
}
function HOblue(props) {
    return (
        <>
          <p style={{backgroundColor:"blue"}}> Red: <props.cmp/></p>
        </>
    )
}



function Counter() {
    let [data,setData]=useState(0);
    return (
        <>
            <p> COUNTER</p>
            <p>{data}</p>
            <Button onClick={()=>setData(data+1)}>CLick</Button>
        </>
    )
}

