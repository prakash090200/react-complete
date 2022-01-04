import React from 'react'
import {Table} from 'react-bootstrap'

export default function Part16() {
    let arr2=[
        {name:"prakash",age:12,city:"HYD",address:[
            {name:"prakash",age:12,city:"HYD"},
            {name:"priya",age:17,city:"bgl"},
            {name:"Akash",age:19,city:"up"}
            ]
        },
        {name:"priya",age:17,city:"bgl",address:[
            {name:"prakash",age:12,city:"HYD"},
            {name:"priya",age:17,city:"bgl"},
            {name:"Akash",age:19,city:"up"}
            ]
         },
        {name:"Akash",age:19,city:"up",address:[
            {name:"prakash",age:12,city:"HYD"},
            {name:"priya",age:17,city:"bgl"},
            {name:"Akash",age:19,city:"up"}
            ]
        }
    ];
    return (
        <div>
            <h6>____________________________________________________________________________</h6>
            <h6>Nested array in react</h6>
<Table striped  hover variant="dark">
  <thead>
    <tr>
      <th>Sno</th>
      <th>Name</th>
      <th>Age</th>
      <th>City</th>
      <th>Address</th>
    </tr>
  </thead>
  <tbody>
             
  {    
      arr2.map((item,i)=> 
      item.age<18?          /*  putting condition in table  */
    
    <tr key={i}>               
      <th>{i+1}</th>
      <td>{item.name}</td>
      <td>{item.age}</td>
      <td>{item.city}</td>
      <td>
          {
              item.address.map((item)=>
              <tr>
                <td>{item.name}</td>
                <td>{item.age}</td>
                <td>{item.city}</td>
              </tr>
              )
          }
      </td>
      
    </tr>
    :null
  )
  } 
    
  </tbody>
</Table>
        </div>
    )
}
