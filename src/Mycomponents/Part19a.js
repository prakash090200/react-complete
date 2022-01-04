import React, { Component } from 'react'
import {Button} from 'react-bootstrap'

import Part19b from './Part19b'

export default class Part19a extends Component {
    constructor(){
        super();
        this.state={
            count:1
        }
    }
    render() {
        return (
            <div>
            <p>--------------------------------</p>
                <b>Pure Component</b>
                <Part19b item={this.state.count}/>
                <Button onClick={()=>this.setState({count:this.state.count+0})}>Click</Button>
                <p>--------------------------------</p>
            </div>
        )
    }
}
