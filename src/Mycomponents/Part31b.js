import React,{useEffect,useRef} from 'react'

export default function Part31b(props) {
    const lastvalue=useRef();
    useEffect(()=>{
        lastvalue.current=props.count;
    })
     let prevval=lastvalue.current;
    return (
        <div>
            <b>Current count value :       {props.count}</b><br></br><br></br>
            <b>Previos  count value : {prevval}</b>
            <h4>------------------------------------------------------</h4>
            

        </div>
    )
}
