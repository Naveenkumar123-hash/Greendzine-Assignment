import React from "react";
import "./Form.css"

const Form=({task,name,value})=>{
    return(
        <form>
            <label for={task}>{name}</label>
            <span>{value+"%"}</span>
            <br></br>
            <div style={{width:`${value}px`}}></div>
        </form>
    )
}

export default Form