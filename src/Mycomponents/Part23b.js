import React,{forwardRef} from 'react'

 function Part23b(props,refs) {
    return (
        <>
            <input type="text" ref={refs}/>
        </>
    )
}
export default forwardRef(Part23b);
