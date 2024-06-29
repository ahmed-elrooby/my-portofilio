    import React from "react";
    import { Typewriter } from "react-simple-typewriter";
    import "./Home.css";
    import Lottie from "lottie-react";
    import LabtopAnimation from "../../animation/Animation - 1706129111714.json";
    import { motion } from "framer-motion";

    export default function Home() {
    return (
        <>
       
        <div className="home">
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
            <div className="row mb-5 pb-5 ">
                <div className="col-12 col-lg-6 col-md-6 ">
                <div className="dataAbout">
                    <img src={require("../../images/me.jpeg")} alt="me" />
                    <div className="writer">
                    I'm
                    <span style={{ color: "var(--blue-color)" }}>
                        <Typewriter
                        words={[
                            "  Front-End Developer",
                            " UI/UX Developer",
                            " React.js Developer",
                        ]}
                        loop={5}
                        cursor
                        cursorStyle="_"
                        typeSpeed={70}
                        deleteSpeed={50}
                        delaySpeed={1000}
                        />
                    </span>
                    </div>
                    <p className="description">
                    hello i am ahmed i have been developing websites i am
                    frontEnd developer by using ( html, html5 ,css ,css3
                    ,javascript, react js ,bootstrap and typescript
                    shortly). i create responsive websites that are displayed on
                    all devices ,desktops and smart Phones
                    </p>
                </div>
                </div>
                <div className="col-12 col-lg-6 col-md-6 ">
                <Lottie
                    className="lottie"
                    loop={true}
                    animationData={LabtopAnimation}
                />
                </div>
            </div>

            <div className="row align-items-center">
                <div className="media">
                <a href="https://www.facebook.com/profile.php?id=100012194289790">
                    <i class="fa-brands fa-facebook-square"></i>
                </a>
                <a href="https://x.com/AhmedElRooby2?t=jw2IvMfAmNMl-Ri-bWzqtw&s=08">
                    <i class="fa-brands fa-twitter"></i>
                </a>
                <a href="https://www.instagram.com/ahmad.elroby?utm_source=qr&igsh=eXNwZDVxb2hzem9j">
                    <i class="fa-brands fa-instagram"></i>
                </a>
                <a href="https://linkedin.com/in/ahmed-eid-8b66682a6">
                    <i class="fa-brands fa-linkedin"></i>
                </a>
                <a href="https://github.com/ahmed-elrooby">
                    <i class="fa-brands fa-github"></i>
                </a>
                </div>
            </div>
            </motion.div>
        </div>
        </>
    );
    }
