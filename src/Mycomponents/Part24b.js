import React,{useRef,useState} from 'react'

export default function Part24b() {
    let refvar=useRef(null);
    let [data,setData]=useState("");

    function abc(){
        console.warn("Field 1 value:",refvar.current.value);        /*   Uncontrolled way */

        console.warn("Field 2 value:",data);               /*   Controlled way */
        
        let input3=document.getElementById('text3').value;          /*   Uncontrolled way */
        console.warn("Field 3 value:",input3);
    }
    return (
        <div>
            <b>UnControlled Component part 24b</b><br></br>
            <form onSubmit={abc}>
            <input type="text" ref={refvar}/><br></br>
            <input type="text" value={data} onChange={(e)=>setData(e.target.value)}/><br></br>
            <input type="text" id="text3" /><br></br>
            <button>Submit</button>
            </form>
        </div>
    )
}
