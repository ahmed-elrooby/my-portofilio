import { Swiper, SwiperSlide } from "swiper/react";
import "./Projects.css";
// Import Swiper styles
import "swiper/css";
import { Autoplay } from "swiper/modules";
import { motion } from "framer-motion";
export default function Projects() {
  return (
    <>

      <div className="project" id="Projects">
        <h1 className="title text-capitalize">my projects </h1>
        <Swiper
          spaceBetween={5}
          slidesPerView={3}
          autoplay={{
            delay: 5000,
            disableOnInteraction: false,
          }}
          modules={[Autoplay]}
          className="mySwiper"
          breakpoints={{
            300: {
              slidesPerView: 1,
            },
            400: {
              slidesPerView: 1,
            },
            640: {
              slidesPerView: 2,
            },
            768: {
              slidesPerView: 2,
              spaceBetween: 20,
            },
            1024: {
              slidesPerView: 3,
              spaceBetween: 50,
            },
          }}
        >
          <SwiperSlide>
            <motion.div
              initial={{ scale: 0.5 }}
              transition={{
                duration: 0.7,
                type: "tween",
              }}
              whileInView={{
                scale: 1,
              }}
              className="container"
            >
              <div className="parent">
                <div className="projects">
                  <div className="card">
                    <img
                      src={require("../../images/constructions.png")}
                      alt=""
                    />
                    <div className="content">
                      <h2 className="title">vitruvius</h2>
                      <p>
                        this my graduation project,This Site Specializes In
                        Construction. It's Available To Carry Out Any Project
                        For Our Clients Whether By Sending 3D/2D Models Of
                        Private Projects Or Choosing From Our Site. Moreover,
                        Our Clients Can Send Us Models To Calculate The Costs
                        For Them., i use html, css and javascript to develope
                        this website
                      </p>
                      <div className="icon">
                        <a href="https://ahmed-elrooby.github.io/constructions/landing.html">
                          <i class="fa-solid fa-link"></i>
                        </a>
                        <a href="https://github.com/ahmed-elrooby/constructions">
                          <i class="fa-brands fa-github"></i>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </SwiperSlide>
          <SwiperSlide>
            <motion.div
              initial={{ scale: 0.5 }}
              transition={{
                duration: 0.7,
                type: "tween",
              }}
              whileInView={{
                scale: 1,
              }}
              className="container"
            >
              <div className="parent">
                <div className="projects">
                  <div className="card">
                    <img
                      src={require("../../images/home.png")}
                      alt=""
                    />
                    <div className="content">
                      <h2 className="title">Movies</h2>
                      <p>
                        This project is your go-to destination for a diverse
                        collection of movies. This Movie Hub is created to
                        enhance your movie-watching experience by providing
                        detailed storylines, viewer voting, and various genres.
                        Welcome to Movie Hub, where you can discover, engage
                        with, and enjoy a diverse selection of interesting
                        movies right at your fingertips.
                      </p>
                      <div className="icon">
                      <a href="https://moviesproject-one.vercel.app/">
                          <i class="fa-solid fa-link"></i>
                        </a>
                        <a href="https://github.com/ahmed-elrooby/moviesproject.git">
                          <i class="fa-brands fa-github"></i>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </SwiperSlide>
          <SwiperSlide>
            <motion.div
              initial={{ scale: 0.5 }}
              transition={{
                duration: 0.7,
                type: "tween",
              }}
              whileInView={{
                scale: 1,
              }}
              className="container"
            >
              <div className="parent">
                <div className="projects">
                  <div className="card">
                    <img src={require("../../images/1-.png")} alt="" />
                    <div className="content">
                      <h2 className="title">furniture website</h2>
                      <p>
                        in this website i use html for building website and css
                        to .... website and javascript to make my website more
                        interactive
                      </p>
                      <div className="icon">
                        <a href="https://ahmed-elrooby.github.io/template-4/one.html">
                          <i class="fa-solid fa-link"></i>
                        </a>
                        <a href="https://github.com/ahmed-elrooby/template-4">
                          <i class="fa-brands fa-github"></i>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </SwiperSlide>
          <SwiperSlide>
            <motion.div
              initial={{ scale: 0.5 }}
              transition={{
                duration: 0.7,
                type: "tween",
              }}
              whileInView={{
                scale: 1,
              }}
              className="container"
            >
              <div className="parent">
                <div className="projects">
                  <div className="card">
                    <img src={require("../../images/addstore.png")} alt="" />
                    <div className="content">
                      <h2 className="title">AddStore</h2>
                      <p>
                        in this website i show all medical tool that doctors
                        need .as commerce website i use react js
                        ,react-router-dom,framr-motion library,usestate hook
                        ,useParams,
                      </p>
                      <div className="icon">
                        <a href="https://medical-tools-6c31d.web.app/">
                          <i class="fa-solid fa-link"></i>
                        </a>
                        <a href="https://github.com/ahmed-elrooby/medical-tools">
                          <i class="fa-brands fa-github"></i>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </SwiperSlide>
          <SwiperSlide>
            <motion.div
              initial={{ scale: 0.5 }}
              transition={{
                duration: 0.7,
                type: "tween",
              }}
              whileInView={{
                scale: 1,
              }}
              className="container"
            >
              <div className="parent">
                <div className="projects">
                  <div className="card">
                    <img src={require("../../images/2-.png")} alt="" />
                    <div className="content">
                      <h2 className="title">Bondi theme</h2>
                      <p>
                        this website static designed by using html,css and
                        bootstrap framework
                      </p>
                      <div className="icon">
                        <i class="fa-solid fa-link"></i>
                        <i class="fa-brands fa-github"></i>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </SwiperSlide>
          <SwiperSlide>
            <motion.div
              initial={{ scale: 0.5 }}
              transition={{
                duration: 0.7,
                type: "tween",
              }}
              whileInView={{
                scale: 1,
              }}
              className="container"
            >
              <div className="parent">
                <div className="projects">
                  <div className="card">
                    <img src={require("../../images/3-.png")} alt="" />
                    <div className="content">
                      <h2 className="title">Nouvil clone</h2>
                      <p>
                        this website is clone for website called nouvile ,in
                        this website i use html,css,bootstrap
                      </p>
                      <div className="icon">
                        <a href="https://ahmed-elrooby.github.io/nouvill-clone/bondi.html">
                          <i class="fa-solid fa-link"></i>
                        </a>
                        <a href="https://github.com/ahmed-elrooby/nouvill-clone">
                          <i class="fa-brands fa-github"></i>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </SwiperSlide>
          <SwiperSlide>
            <motion.div
              initial={{ scale: 0.5 }}
              transition={{
                duration: 0.7,
                type: "tween",
              }}
              whileInView={{
                scale: 1,
              }}
              className="container"
            >
              <div className="parent">
                <div className="projects">
                  <div className="card">
                    <img src={require("../../images/4-.png")} alt="" />
                    <div className="content">
                      <h2 className="title">coffee project</h2>
                      <p>
                        Welcome to [Your Coffee Website Name], your digital
                        sanctuary for all things coffee. Immerse yourself in a
                        world where the love for coffee meets curated expertise,
                        bringing you an unparalleled coffee experience... i use
                        html css only to desgin this website.
                      </p>
                      <div className="icon">
                        <i class="fa-solid fa-link"></i>
                        <i class="fa-brands fa-github"></i>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </SwiperSlide>
          <SwiperSlide>
            <motion.div
              initial={{ scale: 0.5 }}
              transition={{
                duration: 0.7,
                type: "tween",
              }}
              whileInView={{
                scale: 1,
              }}
              className="container"
            >
              <div className="parent">
                <div className="projects">
                  <div className="card">
                    <img src={require("../../images/5-.png")} alt="" />
                    <div className="content">
                      <h2 className="title">leon company</h2>
                      <p>
                        this static project that i use only Html and Css to
                        design it{" "}
                      </p>
                      <div className="icon">
                        <a href="https://ahmed-elrooby.github.io/leon-/">
                          <i class="fa-solid fa-link"></i>
                        </a>
                        <a href="https://github.com/ahmed-elrooby/leon-">
                          <i class="fa-brands fa-github"></i>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </SwiperSlide>
          <SwiperSlide>
            <motion.div
              initial={{ scale: 0.5 }}
              transition={{
                duration: 0.7,
                type: "tween",
              }}
              whileInView={{
                scale: 1,
              }}
              className="container"
            >
              <div className="parent">
                <div className="projects">
                  <div className="card">
                    <img src={require("../../images/6-.png")} alt="" />
                    <div className="content">
                      <h2 className="title">commerce project </h2>
                      <p>this website sells phones</p>
                      <div className="icon">
                        <a href="https://github.com/ahmed-elrooby/templete-2">
                          <i class="fa-solid fa-link"></i>
                        </a>
                        <a href="https://ahmed-elrooby.github.io/templete-2/second.html">
                          <i class="fa-brands fa-github"></i>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </SwiperSlide>
          <SwiperSlide>
            <motion.div
              initial={{ scale: 0.5 }}
              transition={{
                duration: 0.7,
                type: "tween",
              }}
              whileInView={{
                scale: 1,
              }}
              className="container"
            >
              <div className="parent">
                <div className="projects">
                  <div className="card">
                    <img src={require("../../images/7-.png")} alt="" />
                    <div className="content">
                      <h2 className="title">about my self </h2>
                      <p>
                        in this website i am gonna to share everything about my
                        life books i am reading , games i am playing ,events ,
                        servics
                      </p>
                      <div className="icon">
                        <a href="">
                          <i class="fa-solid fa-link"></i>
                        </a>
                        <a href="https://github.com/ahmed-elrooby/templete-3">
                          <i class="fa-brands fa-github"></i>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </SwiperSlide>
          <div class="swiper-pagination"></div>
        </Swiper>
      </div>
    </>
  );
}
