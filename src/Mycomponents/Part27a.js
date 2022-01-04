import React from 'react'
import {withRouter} from 'react-router-dom' 


function Part27a(prop){
     console.warn(prop.match.params.id)
    return (
        <div>
           
    
        <h6>Hey</h6>
        <b>Part27b dynamic routing </b>
        <p>getting dynamic id from user: <b>{prop.match.params.id}</b></p>
        </div>
    )
}

   

export default  withRouter( Part27a) 
