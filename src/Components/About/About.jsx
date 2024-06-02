    import React from "react";
    import "./About.css";
    import ProgressBar from "react-bootstrap/ProgressBar";
    import cvPDF from "../../images/cv.pdf";
    import {motion} from 'framer-motion'
    export default function About() {
    const ht = 95;
    const css = 85;
    const js = 80;
    const react = 90;
    const boot = 95;

    return (
        <>

        <div className="about" id="about">
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
            <h1 className="title">About me</h1>
            <div className="bio">
                <h3>
                i'am ahmed eid and i'am <span>frontEnd developer</span>
                </h3>
                <p>
                my name is Ahmed Eid ali ahmed , 24 years ,  Bachelor’s degree of
                science, faculty of science, Beni-Suef University, 2018 – 2022 ,
                Computer Science department ,
                </p>
            </div>
            <div className="row">
                <div className="col-12 col-lg-4 col-md-6 p-3 ">
                <div className="birthday">
                    <p>
                    Birthday: <span>2 April 2000</span>
                    </p>
                    <p>
                    college: <span>faculty of science</span>
                    </p>
                    <p>
                    degree: <span>computer science</span>
                    </p>
                    <p>
                    city: <span>beni suef</span>
                    </p>

                    <a
                    href={cvPDF}
                    className="d-flex gap-2 align-items-center"
                    download
                    >
                    Download CV
                    <span className="d-flex align-items-center text-center">
                        <i className="fa-solid fa-download"></i>
                    </span>
                    </a>
                </div>
                </div>
                <div className="col-12 col-lg-4 col-md-6 pt-4 ">
                <div className="age">
                <p>
                    Age: <span>24</span>
                </p>
                <p>
                    Email:<span>ahmdalrwby24@gmail.com</span>
                </p>
                <p>
                    Phone: <span>01554247018</span>
                </p>
                <p>
                    Freelance: <span>Available</span>
                </p>
                </div>
                </div>
                <div className="col-12 col-lg-4 col-md-6 p-3 ">
                <div className="progres">
                <div className="pop">
                    <h4>html</h4>
                    <ProgressBar className="height" now={ht} label={`${ht}%`} />
                </div>
                <div className="pop ">
                    <h4>css</h4>
                    <ProgressBar className="height" now={css} label={`${css}%`} />
                </div>
                <div className="pop">
                    <h4>javaScript</h4>
                    <ProgressBar className="height" now={js} label={`${js}%`} />
                </div>
                <div className="pop">
                    <h4>react js</h4>
                    <ProgressBar
                    className="height"
                    now={react}
                    label={`${react}%`}
                    />
                </div>
                <div className="pop">
                    <h4>bootstrap</h4>
                    <ProgressBar className="height" now={boot} label={`${boot}%`} />
                </div>
                </div>
                </div>
            </div>
            </motion.div>
        </div>
        </>
    );
    }

