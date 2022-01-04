import React from 'react'
import Part17b from "./Part17b"

export default function Part17a() {
    let arr2=[
        {name:"prakash",age:12,city:"HYD"},
        {name:"priya",age:17,city:"bgl"},
        {name:"Akash",age:19,city:"up"}
    ];

    return (
        <div>
        <p>Seperate component for array</p>
        <p>---------------------------- </p>
            {
                arr2.map((item)=>
                <Part17b data={item}/>
                )
            }
        </div>
    )
}
