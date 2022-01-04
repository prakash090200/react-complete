import React,{useState} from 'react'

export default function Part9() {
     let [data,setData]=useState(2); 
    /* let data=2; */
    return (
        <div>
            <h6>if-else-if</h6>
             {data==1?"Data is 1":data==2?"Data is 2":"sorry"}    {/*  Ternary if-else-if in react */}
             
        </div>
    )
}
