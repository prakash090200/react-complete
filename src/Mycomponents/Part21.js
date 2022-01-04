import React, { Component,createRef } from 'react'
import {Button} from 'react-bootstrap'

export default class Part21 extends Component {
    constructor()
    {
      super();
     this.refvar=createRef();
    }
    abc(){
       console.warn(this.refvar.current.value);
       this.refvar.current.style.color="red"
       this.refvar.current.style.backgroundColor="black"
    }
    render() {
        return (
            <div>
                <b>Ref in React  Part21</b>
                <br></br>
                <input type="text"  ref={this.refvar}/>
                <Button onClick={()=>this.abc()}>click</Button>
            </div>
        )
    }
}
