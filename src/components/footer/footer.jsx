import React from 'react';
// images
import githubImg from '../../img/github-white.svg';
import emailImg from '../../img/email.png';
import twitterImg from '../../img/twitter-white.svg';
import linkedinImg from '../../img/linkedin-white.svg';


import './style.css';

const Footer = () => {
    return (
        <div id="footer">
            <div id="copyright">
                
                <p id="name"><strong>&copy; {new Date().getFullYear()} Ayush jha</strong></p>
            </div>
            <div className="footer-social">
                <a  href="https://github.com/ayushjha119" target="_blank" rel="noopener noreferrer">
                    <img src={githubImg} alt="Ayush jha github"/>
                </a>
                <a href="mailto:ayushjha81083@gmail.com" target="_blank" rel="noopener noreferrer">
                <img src={emailImg} alt="Ayush jha email"/>
                </a>
                <a href="https://twitter.com/Ayush__jha_" target="_blank" rel="noopener noreferrer">
                    <img src={twitterImg} alt="Ayush jha twitter"/>
                </a>
                <a href="https://www.linkedin.com/in/ayush-jha-b9544a19a/" target="_blank" rel="noopener noreferrer">
                    <img src={linkedinImg} alt="Ayush jha linkedin"/>
                </a>
            </div>
        </div>
    );
}
 
export default Footer;