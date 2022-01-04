import React  from 'react'

export default function part3(){
    let data="Prakash ku";
    function pop(){
         alert("col boy");
    }

   function abc(){
       /* alert("checking func call") */
       console.warn("checking func call")
   }
    return (
        <div>
             <h6>part 3 on click event</h6>
             <p>{data}</p>
             <p>{abc()}</p>  {/*  NORMAL function call */}
         <button onClick={pop}>click 1</button>   {/*  onClick={pop()} is **** WRONG */} 
            <button onClick={()=>{alert("nice gh")}}>click 2</button>  {/* YOU CAN EVEN MAKE USE OF Arrow function */}
            <button onClick={()=>{pop("baklol")}}>click 3</button>
        </div>
    )
}
