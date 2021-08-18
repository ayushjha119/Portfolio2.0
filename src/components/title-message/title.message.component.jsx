import React from 'react';
import Typewriter from "typewriter-effect";
import styled from "styled-components";


const MyTitleMessage = styled.h1`
  position: absolute;
  width: 100%;
  top: 18rem;
  z-index: 1;
  margin-top: -125px;
  text-align: center;
  strong {
    font-size: 1.25em;
  }

  div {
    color: #000000;
    
    font-weight: 600;
    letter-spacing: 7px;
    .main {
      font-size: 70px;
    }
    .sub {
      font-size: 1.1em;
      
      letter-spacing: 2px;
      
      
    }
  }
`;

export const TitleMessage = () => {
    return (
        <MyTitleMessage>
               <div className="titleMessage">
      <div className="heading">
        <div className="main text-center mb-3">
          Hi, I am
          <br />
          <span>
            <strong>Ayush Jha</strong>
          </span>
        </div>
        <div className="sub">
        
          <Typewriter
            options={{
              strings: ["Web Developer", "Advanced Mathematics Expert", "ML Enthusiast"],
              autoStart: true,
              loop: true,
              delay: 50
            }}
          />
         
        </div>
      </div>
    </div>
        </MyTitleMessage>
    )
}

export default TitleMessage