import React from 'react'
import  "./Part13a.css"
import  style from "./Part13b.module.css"


export default function Part13() {
    return (
        <div>
            <p style={{backgroundColor:'black',color:'red'}}>Inline Css 1 in React  </p>
            <p className="success"> Css 2 in React  </p>
            <p className={style.success}>Modulor Css 3 in React  </p>
        </div>
    )
}
