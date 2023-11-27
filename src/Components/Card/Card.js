import React from "react";
import "./Card.css"

const Card=({data})=>{
    return(
        <div className="card">
            <span style={{fontSize:"19px"}}>EMP ID  :  {data.EMP_Id}</span>
            <span className="cardspan">{data.EMP_Id}</span>
            <pre><p>Name   : {data.Name}</p></pre>
            <pre><p>DOB    : <span style={{color:"rgb(127,85,29)"}}>{data.DOB}</span></p></pre>
            <pre><p>Role   : <span style={{color:"rgb(37,95,46)",fontWeight:"bold"}}>{data.Role}</span></p></pre>
        </div>
    )
}

export default Card