import React from "react";
import { Timeline, Events, UrlButton, ImageEvent } from "@merc/react-timeline";

import Image from "react-bootstrap/Image";

// import nameadder from "../../assets/img/projects/nameadder.webp";
import Accordion from "react-bootstrap/Accordion";
import Card from "react-bootstrap/Card";
import L_REACT  from "../../assets/img/skills/react.svg";
import L_materialui from "../../assets/img/skills/material-ui-1.svg"
import L_HTML5  from "../../assets/img/skills/html-5.svg";
import L_CSS3  from "../../assets/img/skills/css3.svg";
import L_javascript from "../../assets/img/skills/javascript.svg";
import L_nodejs from "../../assets/img/skills/nodejs.svg";
import L_express from "../../assets/img/skills/express.svg"
import Todo from "../../assets/img/projects/todo.webp";
import L_covid from "../../assets/img/projects/covid.webp"
import "./project-timeline.component.css";


const TimeLine= () => {
    return (
        <div id='projects'>
        <h1 className="pt-3 text-center font-details-b pb-3">PROJECTS</h1>
      <Timeline> 
      <Events>
      <ImageEvent
            date="2/06/2020"
            className="text-center"
            text="To-Do Web App"
            src={Todo}
            alt="To-Do Web App"
          >
           <div className="d-flex justify-content-between flex-column mt-1">
              <div>
                <Accordion>
                  <Card>
                    <Accordion.Toggle
                      as={Card.Header}
                      eventKey="0"
                      className="p-2 text-center accordian-main"
                    >PROJECT DETAILS</Accordion.Toggle>

                        <Accordion.Collapse eventKey="0" className="text-left">
                      <Card.Body>
                        <strong>Description:</strong> This is a To-Do Web Application created with HTML CSS javascript and nodejs
                        <hr />
                        <strong>Features:</strong>
                        <ul className="list-styles pt-1">
                          <li>Add your To do in this</li>
                          <li>Powered by HTML CSS Javascript and nodejs</li>
                          <li>Respoisive Design</li>
                        </ul>
                        <hr />
                        <strong>Tech used:</strong>
                        <ul>
                          <li>
                            <span className="p-2">
                              <Image src={L_HTML5}  alt="HTML 5" rounded className="image-style m-1"></Image>{" "}
                              HTML5
                              </span>
                          </li>
                          <li>
                            <span className="p-2">
                              <Image  src={L_CSS3}  alt="CSS 3"  rounded className="image-style m-1"></Image>{" "}
                              CSS3
                            </span>
                          </li>
                          <li>
                            <span className="p-2">
                              <Image  src={L_javascript} alt="Javascript" rounded className="image-style1 m-1"></Image>{" "}
                              Javascript
                            </span>
                          </li>
                          <li>
                            <span className="p-2">
                              <Image  src={L_nodejs} alt="Node.js" rounded className="image-style1 m-1"></Image>{" "}
                              Node.js
                            </span>
                          </li>
                          <li>
                            <span className="p-2">
                              <Image  src={L_express} alt="Express.js" rounded className="image-style1 m-1"></Image>{" "}
                              Express.js
                            </span>
                          </li>
                          </ul>
                      </Card.Body>
                    </Accordion.Collapse>
                  </Card>
                </Accordion>
              </div>
              <div className="d-flex justify-content-between flex-nowrap text-center">
                <UrlButton
                  href="https://mytodolist-deploy.herokuapp.com/"
                  target="_blank"
                >
                  SEE LIVE
                </UrlButton>
                <UrlButton
                  href="https://github.com/ayushjha119/To-do"
                  target="_blank"
                > SOURCE CODE
                </UrlButton>
                </div>
            </div>
          </ImageEvent>


        
          <ImageEvent
            date="20/10/2020"
            className="text-center"
            text="Covid-19 dashboard"
            src={L_covid}
            alt="Covid dashboard"
          >
           <div className="d-flex justify-content-between flex-column mt-1">
              <div>
                <Accordion>
                  <Card>
                    <Accordion.Toggle
                      as={Card.Header}
                      eventKey="0"
                      className="p-2 text-center accordian-main"
                    >PROJECT DETAILS</Accordion.Toggle>

                        <Accordion.Collapse eventKey="0" className="text-left">
                      <Card.Body>
                        <strong>Description:</strong> This is a Covid-19 dashboard which show realtime data of covid patients in whole world or in any country.  
                        <hr />
                        <strong>Features:</strong>
                        <ul className="list-styles pt-1">
                          <li>Shows realtime Data of covid (i.e number of Infected, Recovered ,Critical) patients</li>
                          <li>Powered by React js & material-ui</li>
                          <li>Shows graph of data which is fechted from api</li>
                        </ul>
                        <hr />
                        <strong>Tech used:</strong>
                        <ul>
                          <li>
                            <span className="p-2">
                              <Image src={L_REACT}  alt="Reactjs" rounded className="image-style m-1"></Image>{" "}
                              React
                              </span>
                          </li>
                          <li>
                            <span className="p-2">
                              <Image  src={L_materialui}  alt="materialui"  rounded className="image-style m-1"></Image>{" "}
                              material-ui
                            </span>
                          </li>
                     
      
                          </ul>
                      </Card.Body>
                    </Accordion.Collapse>
                  </Card>
                </Accordion>
              </div>
              <div className="d-flex justify-content-between flex-nowrap text-center">
                <UrlButton
                  href="https://covid19fig.netlify.app/"
                  target="_blank"
                >
                  SEE LIVE
                </UrlButton>
                <UrlButton
                  href="https://github.com/ayushjha119/CovidStats"
                  target="_blank"
                > SOURCE CODE
                </UrlButton>
                </div>
            </div>
          </ImageEvent>





      </Events>
      </Timeline>

     


            
        </div>
    )
}

export default TimeLine
