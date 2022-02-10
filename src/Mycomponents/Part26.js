import React from 'react'
import Part26a from './Part26a'
import Part26b from './Part26b'
import Part26c from './Part26c'
import Part26d from './Part26d'

import {Route,Switch} from 'react-router-dom'
/* import {Routes} from 'react-router' */
/* import {BrowserRouter as Router} from 'react-router-dom' */

export default function Part26() {
    return (
        <div>
             {/*
             <Router>
              <Link to="/home">Home Page</Link><br></br>
              <Link to="/about">About Page</Link>
              <Routes>
              <Route path="/home" element={<Home/>}/> 
              <Route path="/about" element={<About/>}/> 
              </Routes>
              </Router> 
              */}
               
                {/* ******OR****  */}
         
              <Part26a/>                                                  {/* Link page */}
              <Switch>
              <Route path="/" exact={true}  ><Part26b/></Route>        {/* Home Page */}
              <Route path="/about" ><Part26c/></Route>                {/* About Page */}
              <Route path="*" ><Part26d/></Route>                 {/* 404 page not found */}
             </Switch>
        </div>
    )
}

 