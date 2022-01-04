import React from 'react'
import Part18b from './Part18b'

export default function Part18() {
    function abc(val){
        alert("Hey "+val);

    }
    return (
        <div>
            <Part18b item={abc}/>
        </div>
    )
}
