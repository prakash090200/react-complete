import React, { Component } from 'react'

export default class Part10 extends Component {
    constructor(){
        super();
        this.state={
            count:0
        }

    }
    shouldComponentUpdate(){
        if(this.state.count>5 && this.state.count <10)    
        return true;
        else
         return false;
    }
    render() {
        return (
            <div>
            <h3>shouldComponentUpdate  Life cycle of react</h3>
            <h6>no of count {this.state.count}</h6>
                <button onClick={()=>{this.setState({count:this.state.count+1})}}>click</button>
            </div>
        )
    }
}
