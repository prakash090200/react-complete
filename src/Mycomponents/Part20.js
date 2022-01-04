import React,{useState,useMemo} from 'react'
import {Button} from 'react-bootstrap'

export default function Part20() {
  
    let [data1,setData1]=useState(0);
    const [data2,setData2]=useState(1);

   let def=useMemo(                          /*  useMemo */
    function abc(){ 
        console.warn("re-render")

        return data2*5;
    },[data2]
   )

    return (
        <div>
            <b>useMemo</b>
            <p>Data 1: {data1}</p>
            <p>Data 2 :{data2}</p>
            <p>{def}</p>

            <Button onClick={()=>setData1(data1+1)}>Update data 1</Button><br></br>
            <Button onClick={()=>setData2(data2+10)}>Update data 2</Button>
            
        </div>
    )
}
