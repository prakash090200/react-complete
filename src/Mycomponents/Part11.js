import React, { Component } from 'react'
import Part112 from "./Part112"

export default class Part11 extends Component {
    constructor(){
        super();
        this.state={
            count:true
        }
    }
    
    render() {

        return (
            <div>
                <h6>ComponentWillUnmount </h6>
                <p>{this.state.count?<Part112/>:null}</p>
                <button onClick={()=>this.setState({count:!this.state.count})}>Submit</button>
            </div>
        )
    }
}
