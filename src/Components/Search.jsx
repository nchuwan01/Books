import React from "react";
import '../index.css';
import Layout from "./Layout";
import {FaSearch, FaHeart} from "react-icons/fa";
import { useState, useEffect } from 'react';
import axios from "axios";
import {Splide, SplideSlide} from "@splidejs/react-splide";
import "@splidejs/splide/dist/css/splide.min.css";
import Favorite from "./Favorite";
import { useNavigate } from "react-router-dom";

import {type} from "@testing-library/user-event/dist/type";

function Search() {

    const number = 0;

    const [result, setResult] = useState([]);
    const [book, setBook] = useState("*");
    const [text, setText] = useState("Some Books");
    const [clicked, setClicked] = useState("true");
    const [ApiKey, setApiKey] = useState("AIzaSyBs6IetkM5IYRrmWISLvTqOOt9Avd0bgUE");

    const [list,setList] = useState([]);

    useEffect(() => {
        axios.get("https://www.googleapis.com/books/v1/volumes?q=" + book + "&key=" + ApiKey)
            .then(r => {
                console.log(r);
                setResult(r.data.items);
                console.log(typeof result);

            }).catch(err => console.log(err))
        setClicked("false");

    }, [clicked === "true"]);


    function handleChange(e) {
        setBook(e.target.value);
    }

    function handleSubmit(e) {
        e.preventDefault();

        setClicked("true");

        setText("Results for "+book);
    }



    return(
        <div>
            <Layout/>
            <form style={{textAlign: "center", marginTop: 50}}>
                <input onChange={handleChange} className="inputSearch" style={{width:600}} type="search"/>
                <button className="searchButton" type="submit" onClick={handleSubmit}> <FaSearch />Search</button>
            </form>
            <h2 className="searchBook">{text}</h2>
            <Splide options={{
                perPage: 3,
                pagination: false,
                drag: "free",
                gap: '3rem',
            }} >





                {result.map((res) => {
                    let thumbnail=res.volumeInfo;
                    console.log({result});
                    if(thumbnail.imageLinks !== undefined)
                    {
                        return (
                            <>
                                <SplideSlide style={{marginTop: 50, marginLeft: 30}}>
                                    <img className="theImages" src={thumbnail.imageLinks.thumbnail} alt={thumbnail.title}/>
                                    <p className="titleStyle">{thumbnail.title}</p>
                                    <Favorite thumbnail={thumbnail} list={list} setList={setList}/>
                                    {/**/}
                                </SplideSlide>

                            </>

                        )
                    }
           })}
            </Splide>

        </div>
    )
}
export default Search;