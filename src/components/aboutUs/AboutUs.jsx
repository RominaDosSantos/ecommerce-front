import React from "react";
import { Link } from "react-router-dom";
import { FaReact } from "react-icons/fa";
import { SiRedux } from "react-icons/si";
import { TbBrandJavascript } from "react-icons/tb";
import { FaTrello } from "react-icons/fa";
import { FaNode } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { SiMysql } from "react-icons/si";
import { SiCss3 } from "react-icons/si";
import { FaHtml5 } from "react-icons/fa";
import { SiBootstrap } from "react-icons/si";
import { SiSequelize } from "react-icons/si";
import { FaFigma } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
import Carousel from "react-multi-carousel";

import "./styles.css";

export const AboutUs = () => {
  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 4,
      slidesToSlide: 2,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 3,
      slidesToSlide: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
      slidesToSlide: 1,
    },
  };

  return (
    <>
      <div class="about-area aboutContainer">
        <div className="containerImageAboutUs"></div>
        <div class="container">
          <div class="row">
            <div class="col-lg-12">
              <div class="about-content">
                <div>
                  <h2 class="about-title">
                    Sobre el <span>Proyecto</span>
                  </h2>
                  <p class="about-desc aboutUsDescription">
                    HackShop es una aplicación web realizada como proyecto final del Coding Bootcamp
                    en Hack Academy, una institución educativa fundada en 2016 en Montevideo,
                    Uruguay, especializada en cursos intensivos de programación. El bootcamp es un
                    curso de tiempo completo que prepara a jóvenes profesionales como{" "}
                    <span> Full Stack Jr. Devs</span>. El objetivo del proyecto final es poner en
                    práctica los conocimientos adquiridos durante el curso utilizando diversas
                    tecnologías; el proyecto fue desarrollado en <span>dos semanas</span> por el
                    equipo.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="about-area">
        <div class="container">
          <div class="row">
            <div class="col-lg-12">
              <div className="divContainerHackshop">
                <div>
                  <h2 class="about-title hackshopTitle">
                    ¿Cómo nació <span>Hackshop?</span>
                  </h2>
                </div>
                <div className="divPlanningHackshopPoint2">
                  <div>
                    <img src="./HackShopRoutesFrontEdit.png" alt="MERHS" className="imgDiagrama" />
                  </div>
                  <div>
                    <div className="">
                      <div>
                        <h3>1 - Concepción del proyecto y MER</h3>
                      </div>
                      <div>
                        <p class="about-desc aboutUsDescription paragraphText">
                          Nuestro primer paso fue definir que necesitamos en el{" "}
                          <span>Backend </span>
                          antes de seguir avanzando, por esto hicimos un listado de las cinco
                          principales tareas. Luego, procedimos a hacer un diagrama de relaciones de
                          entidad cuidadosamente pensado. Aquí definimos las principales relaciones
                          entre las siguientes entidades:{" "}
                          <span> Client, Administrator, Category, Product y Order.</span>
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div>
                <div className="divPlanningHackshopRoutes">
                  <div>
                    <h3>2 - Diseño e Inspiración</h3>
                    <p class="about-desc aboutUsDescription paragraphText">
                      Nos inspiramos en diversas páginas de plantas, con personalidades bastante{" "}
                      <span>funny</span>. Llenamos nuestra base de datos con imágenes,
                      descripciones, nombres y precios de TusPlantasOnline, otro sitio web con
                      excelente diseño
                    </p>
                    <h3>3- Pasos a seguir</h3>
                    <p class="about-desc aboutUsDescription paragraphText">
                      Posterior a tener creada nuestra Base de Datos, definimos las rutas básicas y
                      necesarias para poder utilizar nuestra aplicación tanto a nivel de{" "}
                      <span> Backend </span>
                      como <span> Frontend</span>; teniendo especial consideración en colocar que
                      tipo de método tenía cada ruta.
                    </p>
                  </div>
                  <div className="divContainerImg">
                    <img src="./HackshopMER.png" alt="MERHS" className="imgDiagrama" />
                  </div>
                </div>
              </div>
              <div>
                <div className="divPlanningHackshopRoutesBottom">
                  <div className="divContainerImg">
                    <img src="./HackShopRoutes.png" alt="MERHS" className="imgDiagrama" />
                  </div>
                  <div>
                    <h3>4- Metodología de trabajo</h3>
                    <p class="about-desc aboutUsDescription paragraphText">
                      Organizamos nuestro trabajo utilizando una <span> Metodología Ágil</span> con
                      tres sprints. Cada sprint tenía tareas que se organizaban y desarrollaban
                      individualmente o en grupos, usando <span> Trello</span> para determinar el
                      curso y la finalización de cada una, teniendo siempre tareas pendientes para
                      que cada intregrante pudiese tomar nuevas en caso de terminar con las
                      asignadas.Todo el proyecto se realizó en línea usando Discord.
                    </p>
                    <h3> 5 - Marcos y Tecnologías</h3>
                    <p class="about-desc aboutUsDescription paragraphText">
                      Nuestro proyecto utilizó una base de datos relacional, por ello trabajamos con
                      <span> MySql y Sequelize</span> como persistencia de datos, además de
                      <span> Cloudinary</span> para importar imágenes.
                      <span> NodeJs/Express, React, Redux</span>
                      como nuestros marcos de aplicación.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="section-title-wrap without-tab">
        <h2 class="section-title " id="technologyTitle">
          ¡TECNOLOGíAS <span>UTILIZADAS!</span>
        </h2>
      </div>
      <div class="about-area imageBackgroundSuculenta">
        <div className="containerImageSuculenta">
          <div className="containerTechnology">
            <Carousel
              responsive={responsive}
              infinite={true}
              className="containerSvg"
              draggable={false}
            >
              <div className="containerSvgName">
                <FaReact className="reactSvg" />
                <p>React</p>
              </div>
              <div className="containerSvgName">
                <SiRedux className="reduxSvg" />
                <p>Redux</p>
              </div>
              <div className="containerSvgName">
                <TbBrandJavascript className="javascriptSvg" />
                <p>Javacript</p>
              </div>
              <div className="containerSvgName">
                <FaTrello className="trelloSvg" />
                <p>Trello</p>
              </div>
              <div>
                <FaNode className="nodeJsSvg" />
                <p>Node Js</p>
              </div>
              <div className="containerSvgName">
                <SiBootstrap className="bootstrapSvg" />
                <p>Bootstrap</p>
              </div>
              <div className="containerSvgName">
                <SiMysql className="mysqlSvg" />
                <p>MySql</p>
              </div>
              <div>
                <SiCss3 className="cssSvg" />
                <p>Css</p>
              </div>
              <div>
                <FaGithub className="githubSvg" />
                <p>GitHub</p>
              </div>
              <div>
                <SiSequelize className="sequelizeSvg" />
                <p>Sequelize</p>
              </div>
              <div>
                <FaFigma className="figmaSvg" />
                <p>Figma</p>
              </div>
              <div>
                <FaHtml5 className="htmlSvg" />
                <p>Html</p>
              </div>
            </Carousel>
          </div>
        </div>
      </div>

      <div class="team-area  teamContainer">
        <div class="container">
          <div class="section-title-wrap without-tab">
            <h2 class="section-title">¡Nuestro Team!</h2>
          </div>
          <div class="row">
            <div class="col-lg-4 col-sm-6 pt-sm-5">
              <div class="team-item">
                <div class="team-img">
                  <img
                    src="./AleCircle.png"
                    alt="Team Member"
                    className="teamImageProfile primary-img"
                  />
                  <img
                    src="./fotoAle-modified.png"
                    alt="Team Member"
                    className="teamImageProfile secondary-img"
                  />
                  <div class="inner-content">
                    <h2 class="team-member-name">Alejandro Raíz</h2>
                    <div class="social-link with-border">
                      <ul>
                        <li>
                          <Link
                            to="https://github.com/aleraiz"
                            data-tippy="github"
                            data-tippy-inertia="true"
                            data-tippy-animation="shift-away"
                            data-tippy-delay="50"
                            data-tippy-arrow="true"
                            data-tippy-theme="sharpborder"
                          >
                            <FaGithub />
                          </Link>
                        </li>
                        <li>
                          <Link
                            to="https://www.linkedin.com/in/alejandro-raiz/"
                            data-tippy="linkedin"
                            data-tippy-inertia="true"
                            data-tippy-animation="shift-away"
                            data-tippy-delay="50"
                            data-tippy-arrow="true"
                            data-tippy-theme="sharpborder"
                          >
                            <FaLinkedinIn />
                          </Link>
                        </li>
                        <li>
                          <a
                            href="#"
                            data-tippy="Pinterest"
                            data-tippy-inertia="true"
                            data-tippy-animation="shift-away"
                            data-tippy-delay="50"
                            data-tippy-arrow="true"
                            data-tippy-theme="sharpborder"
                          >
                            <i class="fa fa-pinterest"></i>
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
                <div class="team-content">
                  <h2 class="team-member-name mb-0">Alejandro Raíz</h2>
                </div>
              </div>
            </div>
            <div class="col-lg-4 col-sm-6 pt-5 pt-sm-0">
              <div class="team-item">
                <div class="team-img">
                  <img
                    src="./Marco.png"
                    alt="Team Member"
                    className="teamImageProfile primary-img"
                  />
                  <img
                    src="./MarcoPlaya-modified.png"
                    alt="Team Member"
                    className="teamImageProfile secondary-img"
                  />
                  <div class="inner-content">
                    <h2 class="team-member-name">Marco De Luca</h2>
                    <div class="social-link with-border">
                      <ul>
                        <li>
                          <Link
                            to="https://github.com/antondelu"
                            data-tippy="github"
                            data-tippy-inertia="true"
                            data-tippy-animation="shift-away"
                            data-tippy-delay="50"
                            data-tippy-arrow="true"
                            data-tippy-theme="sharpborder"
                          >
                            <FaGithub />
                          </Link>
                        </li>
                        <li>
                          <Link
                            to="https://www.linkedin.com/in/marcodeluca-dw/"
                            data-tippy="Linkedin"
                            data-tippy-inertia="true"
                            data-tippy-animation="shift-away"
                            data-tippy-delay="50"
                            data-tippy-arrow="true"
                            data-tippy-theme="sharpborder"
                          >
                            <FaLinkedinIn />
                          </Link>
                        </li>
                        <li>
                          <a
                            href="#"
                            data-tippy="Pinterest"
                            data-tippy-inertia="true"
                            data-tippy-animation="shift-away"
                            data-tippy-delay="50"
                            data-tippy-arrow="true"
                            data-tippy-theme="sharpborder"
                          >
                            <i class="fa fa-pinterest"></i>
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
                <div class="team-content">
                  <h2 class="team-member-name mb-0">Marco de Luca</h2>
                </div>
              </div>
            </div>
            <div class="col-lg-4 col-sm-6 pt-5">
              <div class="team-item">
                <div class="team-img">
                  <img
                    src="./imageCircleRomina.png"
                    alt="Team Member"
                    className="teamImageProfile primary-img"
                  />
                  <img
                    src="./paracaidismo.png"
                    alt="Team Member"
                    className="teamImageProfile secondary-img"
                  />
                  <div class="inner-content">
                    <h2 class="team-member-name">Romina Dos Santos</h2>
                    <div class="social-link with-border">
                      <ul>
                        <li>
                          <Link
                            to="https://github.com/RominaDosSantos"
                            data-tippy="github"
                            data-tippy-inertia="true"
                            data-tippy-animation="shift-away"
                            data-tippy-delay="50"
                            data-tippy-arrow="true"
                            data-tippy-theme="sharpborder"
                          >
                            <FaGithub />
                          </Link>
                        </li>
                        <li>
                          <Link
                            to="https://www.linkedin.com/in/romina-dos-santos/"
                            data-tippy="Linkedin"
                            data-tippy-inertia="true"
                            data-tippy-animation="shift-away"
                            data-tippy-delay="50"
                            data-tippy-arrow="true"
                            data-tippy-theme="sharpborder"
                          >
                            <FaLinkedinIn />
                          </Link>
                        </li>
                        <li>
                          <Link
                            to="/"
                            data-tippy="Pinterest"
                            data-tippy-inertia="true"
                            data-tippy-animation="shift-away"
                            data-tippy-delay="50"
                            data-tippy-arrow="true"
                            data-tippy-theme="sharpborder"
                          >
                            <i class="fa fa-pinterest"></i>
                          </Link>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
                <div class="team-content">
                  <h2 class="team-member-name mb-0">Romina Dos Santos</h2>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="banner-with-counter" id="counterBootcamp">
        <div class="counter-area">
          <div class="container">
            <h2 class="counter-title">
              En este bootcamp de dedicacion full-time <span>hemos echo</span>:
            </h2>
            <div class="row">
              <div class="col-lg-3 col-md-4 col-6">
                <div class="counter-item">
                  <div class="count-wrap">
                    <h3 class="count mb-0" data-counterup-time="500">
                      3
                    </h3>
                  </div>
                  <h4 class="count-title mb-0">Meses</h4>
                </div>
              </div>
              <div class="col-lg-3 col-md-4 col-6">
                <div class="counter-item">
                  <div class="count-wrap">
                    <h3 class="count mb-0" data-counterup-time="1000">
                      600
                    </h3>
                    <span class="prefix">+</span>
                  </div>
                  <h4 class="count-title mb-0">Horas</h4>
                </div>
              </div>
              <div class="col-lg-3 col-md-4 col-6 pt-4 pt-md-0">
                <div class="counter-item">
                  <div class="count-wrap">
                    <h3 class="count mb-0" data-counterup-time="1500">
                      12
                    </h3>
                    <span class="prefix">+</span>
                  </div>
                  <h4 class="count-title mb-0">Lenguajes</h4>
                </div>
              </div>
              <div class="col-lg-3 col-md-4 col-6 pt-4 pt-lg-0">
                <div class="counter-item">
                  <div class="count-wrap">
                    <h3 class="count mb-0" data-counterup-time="2000">
                      15
                    </h3>
                    <span class="prefix">+</span>
                  </div>
                  <h4 class="count-title mb-0">Proyectos</h4>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
