import React,{useState} from 'react'

export default function Part24() {
    let [data,setData]=useState("");
    return (
        <div>
            <b>Controlled component Part 24</b>
            <br></br>
            <input type="text" value={data} onChange={(e)=>setData(e.target.value)}  />
            <p>value: {data}</p>
        </div>
    )
}
