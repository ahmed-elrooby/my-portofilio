import React from "react";
import "./Contact.css";
import { useForm, ValidationError } from "@formspree/react";
import successAnimation from "../../animation/Animation - 1706123964768.json";
import Lottie from "lottie-react";
import {motion} from 'framer-motion'

export default function Contact() {
  const [state, handleSubmit] = useForm("mbjndydd");

  return (
    <>

      <div className="contact" id="contact">
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
        <div className="head">
              <h1 className="ico">
                <i class="fa-solid fa-envelope-circle-check fa-2x"></i>
                contact us
              </h1>
            </div>
          <div className="row align-items-center">
          <div className="col-12 col-lg-6 col-md-6">
          <div className="every">
            <div className="contact-animation">
              <img
              className="w-100"
                src={require("../../images/Email campaign-pana.png")}
                alt=""
              />
            </div>
            </div>
            </div>
          <div className="col-12 col-lg-6 col-md-6"> 
          <form onSubmit={handleSubmit} action="">
                <input
                className="form-control"
                  required
                  type="email"
                  name="email"
                  id="email"
                  placeholder="your email"
                />
                <ValidationError
                  prefix="Email"
                  field="email"
                  errors={state.errors}
                />
                <textarea
                  className="form-control"
                  name="message"
                  id="message"
                  cols="40"
                  rows="10"
                  placeholder="your message"
                ></textarea>
                <ValidationError
                  prefix="Message"
                  field="message"
                  errors={state.errors}
                />

              <button type="submit" disabled={state.submitting}>
                {state.submitting ? "submitting" : "submit"}
              </button>
            </form>
            </div>
          {state.succeeded && (
            <div
              className=" d-flex flex-row-reverse justify-content-center mt-4 gap-2 align-items-center
            "
            >
              <Lottie
                loop={false}
                style={{ height: "35px" }}
                animationData={successAnimation}
              />
              <div className="p-2 text-capitalize  text-center w-50 text-primary-emphasis bg-primary-subtle border border-primary-subtle rounded-3">
                your message has been sent <span>&#9996;&#65039;</span>
              </div>
            </div>
          )}
          </div>
        </motion.div>
      
      </div>
    </>
  );
}


/*
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

          </div>
            <form onSubmit={handleSubmit} action="">
              <div className="inputs">
                <input
                  required
                  type="email"
                  name="email"
                  id="email"
                  placeholder="your email"
                />
                <ValidationError
                  prefix="Email"
                  field="email"
                  errors={state.errors}
                />
                <textarea
                  name="message"
                  id="message"
                  cols="40"
                  rows="10"
                  placeholder="your message"
                ></textarea>
                <ValidationError
                  prefix="Message"
                  field="message"
                  errors={state.errors}
                />
              </div>
              <button type="submit" disabled={state.submitting}>
                {state.submitting ? "submitting" : "submit"}
              </button>
            </form>
          </div>
          {state.succeeded && (
            <div
              className=" d-flex flex-row-reverse justify-content-center mt-4 gap-2 align-items-center
            "
            >
              <Lottie
                loop={false}
                style={{ height: "35px" }}
                animationData={successAnimation}
              />
              <div className="p-2 text-capitalize  text-center w-50 text-primary-emphasis bg-primary-subtle border border-primary-subtle rounded-3">
                your message has been sent <span>&#9996;&#65039;</span>
              </div>
            </div>
          )}
        </motion.div>

*/