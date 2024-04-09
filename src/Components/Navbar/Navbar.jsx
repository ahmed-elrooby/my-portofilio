import React, { useEffect, useState } from "react";
import "./Navbar.css";

import Home from"../Home/Home"
    export default function Navbar() {
        const [them, setThem] = useState(localStorage.getItem("mood")?? "dark");
        useEffect(function(){
            if(them === "dark"){
                document.body.classList.add("dark")
                document.body.classList.remove("light")
            }
            else{
                document.body.classList.add("light")
                document.body.classList.remove("dark")
            }
        },[them])

        function addClass(){
            //set item to LS
            localStorage.setItem("mood",(them === "dark"? "light":"dark"))
            //get item from Ls
            setThem(localStorage.getItem("mood"))
        }
    return <>
        <nav
        className="navbar navbar-expand-lg sticky-top p-2 ">
            <div className="container header">
            <span>
                <img src={require("../../images/me.jpeg")} alt="" />
            </span>
            <button
                className="navbar-toggler"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#navbarSupportedContent"
                aria-controls="navbarSupportedContent"
                aria-expanded="false"
                aria-label="Toggle navigation"
            >
                <i class="fa-solid fa-bars"></i>
            </button>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="list navbar-nav ms-auto mb-2 mb-lg-0 " style={{padding:"1px 10px"}}>
                <li className="nav-item ">
                    <a className="nav-link" aria-current="page" href={<Home />}>
                    Home
                    </a>
                </li>
                <li className="nav-item ">
                    <a className="nav-link" aria-current="page" href="#about">
                    About
                    </a>
                </li>
                <li className="nav-item ">
                    <a className="nav-link" aria-current="page" href="#Services">
                    Services
                    </a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" aria-current="page" href="#Projects">
                    projects
                    </a>
                </li>
                <li className="nav-item last">
                    <a className="nav-link" aria-current="page" href="#contact">
                    contact
                    </a>
                    </li>
                </ul>
                <ul className="navbar-nav ms-auto mb-2 mb-lg-0 md-e">

                <button className="dark" onClick={addClass}>
                    {
                        (them === "dark"?<i className=" fa-regular fa-moon fa-2x"></i>:<i className=" fa-regular fa-sun fa-2x"></i>)
                    }
                
                </button>
                </ul>
            </div>
            </div>
        </nav>
        </>
    
    }
