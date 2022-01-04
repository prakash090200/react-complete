import React,{useRef} from 'react'
import Part23b from './Part23b'
import {Button} from 'react-bootstrap'

export default function Part23a() {
    let refvar=useRef(null);
    function abc(){
        refvar.current.value="1000";
        refvar.current.style.color="red";
        refvar.current.focus();
    }
    return (
        <div>
            <b>ForwardRef part 23</b><br></br>
            <Part23b ref={refvar}/>
            <Button onClick={abc}>Click</Button><br></br>
            <b>-------------------------------------------------</b>
        </div>
    )
}
