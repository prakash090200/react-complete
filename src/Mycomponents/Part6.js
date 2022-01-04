import React,{useState} from 'react'

export default function Part6(){
    let [data,setData]=useState(null);
    const [print,setPrint]=useState(false);

    function update(val){
         setData(val.target.value);
        
    }
    
    return (
        <div style={{backgroundColor:"green",margin:10}}>
        <h6>{data}</h6>   {/* Dynamic print */}
        
        
        <input type="text" onChange={update}/>
        <button onClick={()=>{setPrint(true)}}>Print</button>
        { print?<h6>{data}</h6>:null }         {/*  onclick print */}
        
        </div>
    )
}


