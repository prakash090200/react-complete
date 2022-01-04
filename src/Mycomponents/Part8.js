import React,{useState} from 'react'

export default function Part8() {
    let [names,setNames]=useState("");
    const [movie,setMovie]=useState("");
    const [tac,setTac]=useState(false);

     function prevfun(e){
         console.warn(names,tac,movie);
        e.preventDefault();
    }
    return (
        <div>
            <h1> part 8 on FORM basics</h1> 
            <form onSubmit={prevfun}>
                <input type="text" placeholder="Name plz" onChange={(e)=>setNames(e.target.value)}/><br></br>
                <select onChange={(e)=>setMovie(e.target.value)}>
                    <option>Marvel</option>
                    <option>DC</option>
                    <option>Other</option>
                </select> 
                <br></br>
                <input type="checkbox" onChange={(e)=>setTac(e.target.checked)}/><span>Terms and condition</span>
                <br></br>
                <button type="submit">Click</button> 
                <button type="reset">Reset</button>
            </form>
        </div>
    )
}

