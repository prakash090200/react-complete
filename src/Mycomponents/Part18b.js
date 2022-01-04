import React from 'react'
import {Button} from 'react-bootstrap'

export default function Part18b(props) {
    let data="Prakash Kumar"
    return (
        <>
            <b>Child To Parent</b><br></br>
            <Button onClick={()=>props.item(data)}>Click</Button>     {/* CHILD to Parent data passing */}
        </>
    )
}
