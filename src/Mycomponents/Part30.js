

import React,{useState} from 'react'
import {Button} from 'react-bootstrap'

export default function Part30() {
    let [data,setData]=useState(1);
     function abc(){
         let rand=Math.floor(Math.random()*10);
      setData((prev)=>{
          console.warn(prev)
          
          if(prev<5 )
           alert("prev less than 5")
           return rand;

      })
     }
    return (
        <div>
        <b>Part 30 Previous State--------------------------</b><br></br><br></br>
           <p>{data}</p>
            <Button onClick={abc}>Click</Button>

        </div>
    )
}

           