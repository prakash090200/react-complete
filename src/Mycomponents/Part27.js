import React from 'react'
import { BrowserRouter as Router,Route,Link } from 'react-router-dom'
import Part27a from './Part27a'

export default function Part27() {
    let users=[
        {id:1,name:"pk",email:"pk@gmail.com"},
        {id:2,name:"pk11",email:"pk11@gmail.com"},
        {id:3,name:"pk21",email:"pk21@gmail.com"},
        {id:4,name:"pk31",email:"pk31@gmail.com"}
    ]
    return (
        <div>
        <Router>
        {
            users.map((item)=>
          <div> <Link to={"/user/"+item.id+"/"+item.name}>{item.name}</Link></div>
            )
        }
        
        <Route path={"/user/:id"} ><Part27a/></Route>
        
        
        
        </Router>
        </div>
    )
}

