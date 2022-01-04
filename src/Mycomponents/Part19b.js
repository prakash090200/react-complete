import React, { Component,PureComponent} from 'react'

export default class Part19b extends PureComponent {     /* ************ */
    render() {
        console.warn("re-render of pure component")      /*  ********** */
        return (
            <>
                <p>The count value :{this.props.item}</p>
            </>
        )
    }
}
