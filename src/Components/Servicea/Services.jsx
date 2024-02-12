    import React from "react";
    import "./Services.css";
    import {motion} from 'framer-motion'

    export default function Services() {
    return (
        <>
<div className="Services text-center mt-5" id="Services">
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
    <h1 className="title">services</h1>
        <div className="row">
        <div className="col-12 col-lg-4 col-md-6">
        <div className="cards">
                    <i className="fa-solid fa-laptop-code fa-3x"></i>
                    <h3>web development</h3>
            </div>
        </div>
        <div className="col-12 col-lg-4 col-md-6">
        <div className="cards">
                    <i className="fa-solid fa-laptop fa-3x"></i>
                    <h3>Responsive web design</h3>
                </div>
        </div>
        <div className="col-12 col-lg-4 col-md-6">
        <div className="cards">
                    <i className="fa-solid fa-code fa-3x"></i>
                    <h3>Animation and interactive websites</h3>
            </div>
        </div>
        </div>
    </motion.div>

</div>
        </>
    );
    }
    /*
        <div className="container">
       
               
                <div className="cards">
                    <i className="fa-solid fa-code fa-3x"></i>
                    <h3>Animation and interactive websites</h3>
            </div>
        </div>
    </div>
    
    
    */
