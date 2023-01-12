import React from "react";
import "../Styles/Skills.scss";

import dsa from '../assets/dsa.png';
import html from '../assets/html.png';
import css from '../assets/css.jpeg';
import js from '../assets/js.jpeg';
import react from '../assets/react.png';
import chakra from '../assets/chakra.jpeg';
import sass from '../assets/sass.png';
import boot from '../assets/bootstrap.png';
import java from '../assets/java.png';
import maven from '../assets/maven.png';
import hibernate from '../assets/hibernate.png';
import spring from '../assets/spring.png';
import mysql from '../assets/mysql.png';
import postman from '../assets/postman.png';
import aws from '../assets/aws.png';
import vercel from '../assets/vercel.png';
import heroku from '../assets/heroku.png';
import git from '../assets/git.png';
import github from '../assets/github.png';



const Skills = () => {
  return (
    <div id="Skills">
      <div id="title">
        <h2 className="heading">Skills</h2>
        <div className="ul1"></div>
        <div className="ul2"></div>
      </div>
      <div className="skillBoxes">
        <div className="box">
          <img src={dsa} alt="dsa" />
          <p>DSA</p>
        </div>
        <div className="box">
          <img src={html} alt="html" />
          <p>HTML</p>
        </div>
        <div className="box">
          <img src={css} alt="css" />
          <p>CSS</p>
        </div>
        <div className="box">
          <img src={js} alt="js" />
          <p>JavaScript</p>
        </div>
        <div className="box">
          <img src={react} alt="react" />
          <p>React</p>
        </div>
        <div className="box">
          <img src={chakra} alt="dsa" />
          <p>Chara-UI</p>
        </div>
        <div className="box">
          <img src={sass} alt="dsa" />
          <p>SASS</p>
        </div>
        <div className="box">
          <img src={boot} alt="dsa" />
          <p>BootStrap</p>
        </div>
        <div className="box">
          <img src={java} alt="dsa" />
          <p>Java</p>
        </div>
        <div className="box">
          <img src={maven} alt="dsa" />
          <p>Maven</p>
        </div>
        <div className="box">
          <img src={hibernate} alt="dsa" />
          <p>Hibernate</p>
        </div>
        <div className="box">
          <img src={spring} alt="dsa" />
          <p>Spring</p>
        </div>
        <div className="box">
          <img src={mysql} alt="dsa" />
          <p>MySql</p>
        </div>
        <div className="box">
          <img src={postman} alt="dsa" />
          <p>Postman</p>
        </div>
        <div className="box">
          <img src={aws} alt="dsa" />
          <p>Aws</p>
        </div>
        <div className="box">
          <img src={vercel} alt="dsa" />
          <p>Vercel</p>
        </div>
        <div className="box">
          <img src={heroku} alt="dsa" />
          <p>Heroku</p>
        </div>
        <div className="box">
          <img src={git} alt="dsa" />
          <p>Git</p>
        </div>
        <div className="box">
          <img src={github} alt="dsa" />
          <p>GitHub</p>
        </div>
        
      </div>

    </div>
  );
};

export default Skills;
