import React,{useState} from 'react'

const Part4 = () => {
    /* const [data,setData]=useState("pk") */
    const [data2,setData]=useState(0);
     function update(){
        setData("pkl1")
       
    }
    function increment(){
        setData(data2+1)
    }
    return (
        <div>
            <h6>Part6 (State in React)</h6>
           
            <p>{data2}</p> 
            {/* <button onClick={update}>Click 1</button> */}
            <button onClick={increment}>Click 2</button>
           
            <button onClick={()=>{setData("komu")}}>Click 3</button>
            

        </div>
    )
}

export default Part4
