import {Table} from 'react-bootstrap'
import React,{useEffect,useState} from 'react'
import {Button} from 'react-bootstrap'
function Part28() {
  const [users,setUser]=useState([])

  let [name,setName]=useState("")
  let [email,setEmail]=useState("")
  let [country,setCountry]=useState("")
  let [id,setId] =useState(null)
  
  useEffect(()=>{
    //console.warn("nice88888888888888888888888888888888888888888")
    getnow()
  },[])

  function getnow(){
    
    fetch("http://localhost:3002/user")
    .then((result) => result.json())
    .then((respond) => {
        
        setUser(respond)  
        setName(respond[0].name)  
        setEmail(respond[0].email) 
        setCountry(respond[0].country)
        setId(respond[0].id)     
    })
  }


  function deletee(id){
     
    fetch(`http://localhost:3002/user/${id}`,{
      method:'delete'
    })
    .then((result) => result.json())
    .then((respond) => {
        
        console.warn(respond)
        getnow();      
    })
  }
  
  function edit(id){
   
    let temp=users[id-1];
    setName(temp.name)
    setEmail(temp.email)
    setCountry(temp.country)
    setId(temp.id)
  }
  
  function updatenow(){
     //console.warn(name,email,country)
     let store={name,email,country}
     fetch(`http://localhost:3002/user/${id}`,{
       method:'PUT',
       headers:{
        'Accept':'application/json',
        'Content-Type':'application/json'
    },
    body:JSON.stringify(store)
       }
     )
     .then((result)=> result.json())
     .then((respond)=>{

      console.warn(respond);
        getnow();
     }


     )
    }

  return (
    <div className="Part28">
      <h1>Get API Call </h1>
      <b>Part 28 GET method in API</b>
      <Table border="1" striped bordered hover variant="dark">
       <tbody>
       <tr>
          <td>userID</td>
          <td>name</td>
          <td>Email</td>
          <td>Country</td>
          <td>Delete</td>
          <td>Update</td>
        </tr>

        {
          users.map((item,i)=>
            <tr key={i}>
            <td>{item.id}</td>
          <td>{item.name}</td>
          <td>{item.email}</td>
            <td>{item.country}</td>
            <td><Button onClick={()=>deletee(item.id)}>Delete</Button></td>
            <td><Button onClick={()=>edit(item.id)}>Edit</Button></td>
          </tr>
          )
        }

        
       </tbody>
      </Table>

      <div>
         Name:    <input type="text" value={name}     onChange={(e)=>setName(e.target.value)}/><br></br>
         Email:   <input type="text" value={email}    onChange={(e)=>setEmail(e.target.value)}/><br></br>
         Country :<input type="text" value={country}  onChange={(e)=>setCountry(e.target.value)}/><br></br>
          <br></br>
          <Button onClick={updatenow}>Update </Button>

        </div>
    </div>
  );
}
export default Part28;