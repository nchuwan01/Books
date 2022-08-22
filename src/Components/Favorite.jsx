import React from "react";
import '../index.css';
import Layout from "./Layout";
import {FaSearch, FaHeart} from "react-icons/fa";
import { useState, useEffect } from 'react';
import axios from "axios";
import {Splide, SplideSlide} from "@splidejs/react-splide";
import "@splidejs/splide/dist/css/splide.min.css";
import { useNavigate } from "react-router-dom";



const Favorite=(props)=>
{
    const [c, setC] = useState("black");
    const [track,setTrack] = useState([]);



    return (

        <a href={props.thumbnail.infoLink} value={props.thumbnail.title} id={props.thumbnail.title} className="heartButton"><FaSearch/></a>    )
}
export default Favorite;