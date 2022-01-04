import React,{useRef} from 'react'
import {Button} from 'react-bootstrap'



export default function Part22() {
    let refvar=useRef(null);
    function abc(){
        console.warn("useRef in react")
         refvar.current.value="1000";
         refvar.current.style.color="green"
         refvar.current.style.backgroundColor="black"
         refvar.current.focus();
         //refvar.current.style.display="none"


    }
    return (
        <div>
          <b>useRef in functional component part 22</b>  <br></br>
          <input type="text" ref={refvar}/>
          <Button onClick={abc}>Click</Button>
        </div>
    )
}
