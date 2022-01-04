import React,{useState,useEffect} from 'react'
import {Button} from 'react-bootstrap'

export default function Part29() {

  
    let [name,setName]=useState("");     
    let [email,setEmail]=useState("");
    let [country,setCountry]=useState("");

   
    function post(){
        console.warn({name,email,country});
        let store={name,email,country};
        fetch("http://localhost:3002/user",{
            method:'post',
            headers:{
                'Accept':'application/json',
                'Content-Type':'application/json'
            },
            body:JSON.stringify(store)
        })
        .then((result)=> result.json()
        .then((respond)=> {   
        console.warn(respond)
        
         })
        
        )
    }

    return (
        <div>
            <b>---------------------------------</b>
            <b>Part 29 POst Method in API</b>
            <form>
                
                Name:    <input type="text" value={name} onChange={(e)=>{setName(e.target.value)} } name="name" /><br></br>
                Email:   <input type="text" value={email} onChange={(e)=>{setEmail(e.target.value)}} name="email"/><br></br>
                Country: <input type="text" value={country} onChange={(e)=>{setCountry(e.target.value)}}  name="country"/><br></br>
                <Button type="button" onClick={post}>Submit</Button>
            </form>
        </div>
    )         
}




