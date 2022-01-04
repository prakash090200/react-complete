import React,{useState} from 'react'
import {Button} from 'react-bootstrap'
import Part31b from './Part31b'
export default function Part31() {
    const [data,setData]=useState(0);
    return (
        
        <div>
            <b>Part31 previous props</b>
            <Part31b count={data}/>
            <Button onClick={()=>setData(Math.floor(Math.random()*10))}>Click</Button>
        </div>
    )
}
