import React, { Component } from 'react'

export default class Part112 extends Component {
    componentWillUnmount(){
        alert("part112 component is removed from DOM")
    }
    render() {
        return (
            <div>
                <p> Nice to see how componentWillUnmount works</p>
            </div>
        )
    }
}
