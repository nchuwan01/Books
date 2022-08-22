import React from "react";
import '../index.css';
import pic from "./../Imgs/1903162.png";
import {FaHome,FaHeart} from "react-icons/fa";
import {NavLink, Route} from "react-router-dom";

const Layout=()=>
{
    return(
        <div className={"LayoutMainDiv"}>
            <img className={"logoPic"} src={pic} alt={"pic"}/>
            <h2 style={{fontSize: 20, fontStyle: "italic"}}> Narayan's Online Library</h2>
        </div>
    )
}
export default Layout;