import React from "react";
import { useState,useEffect } from "react";
import Logo1 from "../../../Assets/Logo1.png"
import Form from "../../Form/Form";
import profile from "../../../Assets/profile.png"
import profileimg from "../../../Assets/user-regular.svg"
import homeimg from "../../../Assets/house-solid.svg"
import find from "../../../Assets/find.png"
import "./Dashboard.css"
import Userdata from "../../Userdata"
import Card from "../../Card/Card";

const Dashboard=()=>{
    const [flag,setFlag]=useState(true)
    const [search,setSearch]=useState()
    const [Filterdata,setFilterdata]=useState([])

    useEffect(()=>{
        handlesearchfn(search)
    },[search])
    
    const handlesearchfn=(search)=>{
        let Filtereddata=Userdata.filter((item)=>(
            item.Name.toLowerCase().includes(search))
        )
        search?setFilterdata(Filtereddata):setFilterdata(Userdata)
    }
    return(
        <div className="main-container">
            {
                (flag) ?
               <div className="home-container">
                <img src={profile} className="img1"></img>
                <img src={Logo1} className="img2"></img>
                <div className="home-container1">              
                     <p>Employee Productivity Dashboard</p>
                    <div className="container2">
                    <Form task="production_monday" name="Productivity on Monday" value="4"/>
                    <Form task="production_tuesday" name="Productivity on Tueday" value="92"/>
                    <Form task="production_wednesday" name="Productivity on Wednesday" value="122"/>
                    <Form task="production_thursday" name="Productivity on Thursday" value="93"/>
                    <Form task="production_friday" name="Productivity on Friday" value="89"/>
                    <Form task="production_saturday" name="Productivity on Saturday" value="98"/>
                    </div>
                </div>
                <div className="footer-images">
                <div onClick={()=>setFlag(true)}  className="footer-container1">
                    <img src={homeimg} width="20px" height="20px"></img>
                </div>
                <div onClick={()=>setFlag(false)}  className="footer-container2">
                    <img src={profileimg} width="20px" height="20px"></img>
                </div>
               </div>
               </div> :
               <div className="dashboard-container">
                <img src={profile} className="img1"></img>
                <img src={Logo1} className="img2"></img>
                <div className="search-bar">
                <input type="text" placeholder="Search with name" onChange={(event)=>setSearch((event.target.value).toLowerCase())}></input>
                <img src={find} width="25px" height="25px"></img>
                </div>
                <div className="cardslist">
                    {
                      Filterdata.map((data)=>(
                        <Card data={data}/>
                      ))
                    }
                </div>
                <div className="footer-images">
                    <div onClick={()=>setFlag(true)} className="footer-container1">
                    <img src={homeimg} width="20px" height="20px" color="white"></img>
                    </div>
                    <div onClick={()=>setFlag(false)} className="footer-container2">
                    <img src={profileimg} width="20px" height="20px" color="white"></img>
                    </div>
               </div>
               </div>
            }  
        </div>
    )
}

export default Dashboard