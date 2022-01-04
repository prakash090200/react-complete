import React from 'react'
import {Table} from 'react-bootstrap'

export default function Part15() {
    let arr1=["apple","orange",'mango'];
    let arr2=[
        {name:"prakash",age:12,city:"HYD"},
        {name:"priya",age:17,city:"bgl"},
        {name:"Akash",age:19,city:"up"}
    ];

    return (
        <div>
           <h6>map fucntion , instead of for loop</h6>
          { arr2.map((items) =>
               <h6>{items.name},{items.age},{items.city}</h6>
           )
          }
          {
              arr1.map((val)=>
              <h6>hey Mr :{val}</h6>
              )
          }
           
 <Table striped bordered hover variant="dark">
  <thead>
    <tr>
      <th>Sno:</th>
      <th>Name</th>
      <th>Age</th>
      <th>City</th>
    </tr>
  </thead>
  <tbody>
             
  {    
      arr2.map((item,i)=> 
      item.age<18?          /*  putting condition in table  */
          
          /* This is for serial no  */
    <tr key={i}>               
      <th>{i+1}</th>    
      
      <th>{item.name}</th>
      <th>{item.age}</th>
      <th>{item.city}</th>
      
    </tr>
    :null
  )
  } 
    
  </tbody>
</Table>
        </div>
    )
}
