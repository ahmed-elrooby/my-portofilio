import React from 'react'
import "./Footer.css"
import Home from '../Home/Home'
import {motion} from 'framer-motion'

export default function Footer() {
    return <>
    <div className="footer">
    <motion.div
                initial={{ scale: 0.5 }}
                transition={{
                    duration: 0.7,
                    type: "tween",
                }}
                whileInView={{
                    scale: 1,
                }}        
        
        className="container">
            <div className="row align-items-center">
            <div className="col-12 col-lg-6 col-md-6">
            <ul>
                    <li><a href={<Home />}>home </a></li>
                    <li><a href="#about">about </a></li>
                    <li><a href="#Services">Services</a></li>
                    <li><a href="#Projects">projects</a></li>
                    <li><a href="#contact">contact</a></li>
                </ul>
            </div>
            <div className="col-12 col-lg-6 col-md-6 text-center align-items-center">
            <p>Copyright © 2024 <span style={{color:"var(--blue-color)",fontSize:"23px",fontWeight:"bold"}}>Ahmed el rooby</span>. All Rights Reserved.</p>

            </div>
            </div>
            
        </motion.div>
    </div>
    </>
}
