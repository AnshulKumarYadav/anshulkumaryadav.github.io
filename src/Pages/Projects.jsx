import React from "react";
import '../Styles/Project.scss';
import {FaBookReader, FaEye, FaFacebook, FaGithub, FaGithubAlt, FaLinkedin, FaUserAlt} from 'react-icons/fa';
import shoppingApp from '../assets/shopping.jpg';
import redbus from '../assets/redbus.jpg';
import wheather from '../assets/wheather.png';
import foodyShop from '../assets/foodyShop.png';

const Projects = () => {
  
  return (
    <div id="Projects">
      <div id="title">
        <h2 className="heading">Projects</h2>
        <div className="ul1"></div>
        <div className="ul2"></div>
      </div>
      <div id="projectItem">
            <div className = 'container'>
                <div className = 'card'>
                <div className = 'image'>
                    <img src ={redbus}/>
                    <h3> Redbus - Bus Ticketing App </h3>
                </div>
                <div className = 'content'>
                    <h3>Backend App</h3>
                    <p>Redbus is a bus ticket booking app where we book a ticket with a particular sourct station to destination station.</p>
                    <div>
                        <FaEye fontSize='30px'/>
                        <FaGithub fontSize='30px'/>
                    </div>
                    <h4>TeckStacks</h4>
                    <div className="techStacks">
                        <img src="https://img.shields.io/static/v1?label=&message=Java&color=007396&logo=java&logoColor=FFFFFF" />
                        <img src="https://img.shields.io/static/v1?label=&message=SpringData-Jpa&color=019733&logo=spring&logoColor=FFFFFF"/>
                        <img src="https://img.shields.io/static/v1?label=&message=SpringBoot&color=019733&logo=springboot&logoColor=FFFFFF"/>
                        <img src="https://img.shields.io/static/v1?label=&message=Hibernate&color=430098&logo=hibernate&logoColor=FFFFFF"/>
                        <img src="https://img.shields.io/static/v1?label=&message=MySql&color=00C2FB&logo=MySQL&logoColor=FFFFFF"/>
                    </div>
                </div>
                </div>    
            </div>
            <div className = 'container'>
                <div className = 'card'>
                <div className = 'image'>
                    <img src ={shoppingApp}/>
                    <h3> Online Shopping App </h3>
                </div>
                <div className = 'content'>
                    <h3>Backend App</h3>
                    <p>A app where we can buy products.In this project we implement RestFull Api based on springboot.</p>
                    <div>
                        <FaEye fontSize='30px'/>
                        <FaGithub fontSize='30px'/>
                    </div>
                    <h4>TechStacks</h4>
                    <div className="techStacks">
                        <img src="https://img.shields.io/static/v1?label=&message=Java&color=007396&logo=java&logoColor=FFFFFF" />
                        <img src="https://img.shields.io/static/v1?label=&message=SpringData-Jpa&color=019733&logo=spring&logoColor=FFFFFF"/>
                        <img src="https://img.shields.io/static/v1?label=&message=SpringBoot&color=019733&logo=springboot&logoColor=FFFFFF"/>
                        <img src="https://img.shields.io/static/v1?label=&message=Hibernate&color=430098&logo=hibernate&logoColor=FFFFFF"/>
                        <img src="https://img.shields.io/static/v1?label=&message=MySql&color=00C2FB&logo=MySQL&logoColor=FFFFFF"/>
                    </div>
                </div>
                </div>    
            </div>
            <div className = 'container'>
                <div className = 'card'>
                <div className = 'image'>
                    <img src ={wheather}/>
                    <h3> Wheather App </h3>
                </div>
                <div className = 'content'>
                    <h3>Fronted App</h3>
                    <p>A wheather app where we can see the weather of a city by searching or by giving location permission and here we can also see the 7 days forcast.</p>
                    <div>
                        <FaEye fontSize='30px'/>
                        <FaGithub fontSize='30px'/>
                    </div>
                    <h4>TechStacks</h4>
                    <div className="techStacks">
                        <img src="https://img.shields.io/static/v1?label=&message=HTML&color=F37878&logo=html5&logoColor=FFFFFF" />
                        <img src="https://img.shields.io/static/v1?label=&message=css&color=52D4FA&logo=css3&logoColor=FFFFFF"/>
                        <img src="https://img.shields.io/static/v1?label=&message=javascript&color=FBF000&logo=javascript&logoColor=000000"/>
                        <img src="https://img.icons8.com/nolan/44/api-settings.png" width="38px"/>
                    </div>
                </div>
                </div>    
            </div>
            <div className = 'container'>
                <div className = 'card'>
                <div className = 'image'>
                    <img src ={foodyShop}/>
                    <h3>A food reciepe app</h3>
                </div>
                <div className = 'content'>
                    <h3>Frontend App</h3>
                    <p>This app is useful for the whom who wants to know the reciepe for the delicious food . </p>
                    <div>
                        <FaEye fontSize='30px'/>
                        <FaGithub fontSize='30px'/>
                    </div>
                    <h4>TechStacks</h4>
                    <div className="techStacks">
                        <img src="https://img.shields.io/static/v1?label=&message=HTML&color=F37878&logo=html5&logoColor=FFFFFF" />
                        <img src="https://img.shields.io/static/v1?label=&message=css&color=52D4FA&logo=css3&logoColor=FFFFFF"/>
                        <img src="https://img.shields.io/static/v1?label=&message=javascript&color=FBF000&logo=javascript&logoColor=000000"/>
                        <img src="https://img.icons8.com/nolan/44/api-settings.png" width="38px"/>
                    </div>
                </div>
                </div>    
            </div>
            <div className = 'container'>
                <div className = 'card'>
                <div className = 'image'>
                    <img src ='https://miro.medium.com/max/1050/1*jdopOSsDRiGDWu9M3GviCQ.png'/>
                    <h3> BobbiBrown </h3>
                </div>
                <div className = 'content'>
                    <h3>Fronted App</h3>
                    <p>BobbiBrown providing branded cosmetics products online, makeup kit online. In this project, I was leading my team and majorly worked on Home page, Product page, Signin functionality, Cart page, Wishlist and Payment page.</p>
                    <div>
                        <FaEye fontSize='30px'/>
                        <FaGithub fontSize='30px'/>
                    </div>
                    <h4>TechStacks</h4>
                    <div className="techStacks">
                        <img src="https://img.shields.io/static/v1?label=&message=HTML&color=F37878&logo=html5&logoColor=FFFFFF" />
                        <img src="https://img.shields.io/static/v1?label=&message=css&color=52D4FA&logo=css3&logoColor=FFFFFF"/>
                        <img src="https://img.shields.io/static/v1?label=&message=javascript&color=FBF000&logo=javascript&logoColor=000000"/>
                    </div>
                </div>
                </div>    
            </div>
            <div className = 'container'>
                <div className = 'card'>
                <div className = 'image'>
                    <img src ='https://miro.medium.com/max/700/1*nhm4FnPWW69oTAEPT02umQ.png'/>
                    <h3>Youtube</h3>
                </div>
                <div className = 'content'>
                    <h3>Fronted App</h3>
                    <p>A frontend clone of YouTube, where in the home page user will find popular videos of YouTube and also can search for the desired videos it will show all the videos related to search on the result page.</p>
                    <div>
                        <FaEye fontSize='30px'/>
                        <FaGithub fontSize='30px'/>
                    </div>
                    <h4>TechStacks</h4>
                    <div className="techStacks">
                        <img src="https://img.shields.io/static/v1?label=&message=HTML&color=F37878&logo=html5&logoColor=FFFFFF" />
                        <img src="https://img.shields.io/static/v1?label=&message=css&color=52D4FA&logo=css3&logoColor=FFFFFF"/>
                        <img src="https://img.shields.io/static/v1?label=&message=javascript&color=FBF000&logo=javascript&logoColor=000000"/>
                        <img src="https://img.icons8.com/nolan/44/api-settings.png" width="38px"/>
                    </div>
                </div>
                </div>    
            </div>
          </div>  
    </div>
  );
};

export default Projects;
