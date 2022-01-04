import React from 'react'

const Part7 = () => {
    let [data,setData]=React.useState(true);
    return (
        <div style={{backgroundColor:"lightpink"}}>
            <p>part 7 (Hide and Show)</p>

            {data?"Hello prakash its Visible":null}
            
            <button onClick={()=>{setData(false)}}>hide</button>
            <button onClick={()=>{setData(true)}}>Show</button>
            <button onClick={()=>{setData(!data)}}>Toggle</button>
        </div>
    )
}

export default Part7
