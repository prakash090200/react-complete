import React,{useEffect,useState} from 'react'

export default function Part12() {

let [data,setData]=useState(0)
const [data2,setData2]=useState("pk")
let [data3,setData3]=useState(100)

useEffect(()=>{
    console.warn("data is called by this useEffect")             /*  Acting like componentDidMount */
},[data,data3])

useEffect(()=>{
    console.warn("data2 is called by this useEffect")             /*  Acting like componentDidMount */
},[data2])

    return (
        <div>
           <p>---------------------------------------------------------</p>
           <b>Hooks : useEffect (for life cycle of react)</b>
           <p>{data}</p>
           <p>{data2}</p>
           <p>{data3}</p>
           <button onClick={()=>setData(data+1)}>Click</button>
           <button onClick={()=>setData2(data2+"lol")}>Click</button>
           <button onClick={()=>setData3(data3+1)}>Click</button>   
        </div>
    )
}
