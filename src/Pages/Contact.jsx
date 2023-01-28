import React from "react";
import {SiFacebook, SiGithub, SiGmail, SiInstagram, SiLinkedin, SiTwitter, SiWhatsapp} from 'react-icons/si';
import {FaBookReader, FaInstagram, FaLinkedin, FaLinkedinIn, FaUserAlt} from 'react-icons/fa';
import {MdMail, MdPhone} from 'react-icons/md';
import '../Styles/Contact.scss';
import { useRef } from "react";
import emailjs from "@emailjs/browser";
import { Box, useToast } from "@chakra-ui/react";

const Contact = () => {

    const toast = useToast();
   
    const form = useRef();
   
    let submitForm = (e) =>{
        e.preventDefault();

        emailjs.sendForm('service_3fqa39v', 'template_ce5qexv', form.current,'_DrOsoMqXO_KcO1Fq')
        .then((result) => {
            console.log(result.text);
           if(result.text=='OK')
           {
            toast({
                position: 'top-right',
                render: () => (
                  <Box color='white' p={3} bg='green.500'>
                    Thank you for submitting request.
                  </Box>
                ),
              })
           }
        }, (error) => {
            toast({
                position: 'top-right',
                render: () => (
                  <Box color='white' p={3} bg='red.500'>
                    Something went wrong please try to submit again.
                  </Box>
                ),
              })
        });

    }


  return (
    <div id="Contact">
      <div style={{padding:"1rem 0rem 0rem 2.5rem"}} >
         <h2 className="heading">Contact me</h2>
         <div className='ul1'></div>
         <div className='ul2'></div>
      </div>
        <div id="contactBox">
            <div id='social'>
                <div className="socialBox">
                    <div className="socialIconLink">
                        <a href="mailto:rishabhyadav3602@gmail.com">
                           <SiGmail className="icons" color="#dd4b39"/>
                        </a>
                    </div>
                    <div className="social-details">
                        <h3>Email</h3>
                        <a href="mailto:rishabhyadav3602@gmail.com">rishabhyadav3602@gmail.com</a>
                    </div>
                </div>
                <div className="socialBox">
                    <div className="socialIconLink">
                        <a target='blank' href="https://www.linkedin.com/in/anshul-kumar-yadav/">
                            <FaLinkedinIn className="icons" color="#0A66C2" />   
                        </a>
                    </div>
                    <div className="social-details">
                        <h3>LinkedIn</h3>
                        <a target='blank' href="https://www.linkedin.com/in/anshul-kumar-yadav/">anshul-kumar-yadav</a>
                    </div>
                </div>
                <div className="socialBox">
                    <div className="socialIconLink">
                    <a target='blank' href="https://github.com/AnshulKumarYadav">
                        <SiGithub className="icons" />
                    </a>
                    </div>
                    <div className="social-details">
                        <h3>GitHub</h3>
                        <a target='blank' href="https://github.com/AnshulKumarYadav">AnshulKumarYadav</a>
                    </div>
                </div>
                <div className="socialBox">
                    <div className="socialIconLink">
                    <a target='blank' href="https://www.facebook.com/people/Rishabh-Yadav/100020567491022/">
                        <SiFacebook className="icons" color="#3b5998" />
                    </a>
                    </div>
                    <div className="social-details">
                        <h3>Facebook</h3>
                        <a target='blank' href="https://www.facebook.com/people/Rishabh-Yadav/100020567491022/">Rishabh-Yadav</a>
                    </div>
                </div>
                <div className="socialBox">
                    <div className="socialIconLink" >
                    <a target='blank' href="https://www.instagram.com/rishuyadav3602">
                        <FaInstagram className="icons"
                            color= "#d6249f"
                        />
                    </a>
                    </div>
                    <div className="social-details">
                        <h3>Instagram</h3>
                        <a target='blank' href="https://www.instagram.com/rishuyadav3602">@rishuyadav3602</a>
                    </div>
                </div>
                <div className="socialBox">
                    <div className="socialIconLink">
                        <a target='blank' href="https://twitter.com/RISHABH48133056">
                            <SiTwitter className="icons" color="#1DA1F2" />
                        </a>
                    </div>
                    <div className="social-details">
                        <h3>Twitter</h3>
                        <a target='blank' href="https://twitter.com/RISHABH48133056">@RISHABH48133056</a>
                    </div>
                </div>
            </div>
            <div id="social2">
                <h2 style={{color:"grey"}} className="heading">Connect With Me On Social Media</h2>
                <div className="ul1"></div>
                <ul>
                    <li><a target="blank" href="mailto:rishabhyadav3602@gmail.com"><SiGmail className="fab" aria-hidden/></a></li>
                    <li><a target="blank" href="https://www.linkedin.com/in/anshul-kumar-yadav/"><SiLinkedin className="fab" aria-hidden/></a></li>
                    <li><a target="blank" href="https://github.com/AnshulKumarYadav"><SiGithub className="fab" aria-hidden/></a></li>
                    <li><a target="blank" href="https://www.instagram.com/rishuyadav3602"><SiInstagram className="fab" aria-hidden/></a></li>
                    <li><a target="blank" href="https://www.facebook.com/people/Rishabh-Yadav/100020567491022/"><SiFacebook className="fab" aria-hidden='true'/></a></li>
                    <li><a target="blank" href="tel:7060476249"><MdPhone className="fab" aria-hidden='true'/></a></li>
                </ul>
                <h2 className="heading">Send A Message To Me</h2>
                <div className="ul1"></div>
            </div>
            <div id='contactForm'>
                <form className="form" ref={form} onSubmit={submitForm}>
                    <div className='inputs'>
                        <div>
                            <FaUserAlt style={{margin:"18% 0% 0% 40%"}}/>
                        </div>
                        <input type="text" placeholder='Name' name='name' required/>
                    </div>
                    <div className='inputs'>
                        <div>
                            <FaBookReader style={{margin:"18% 0% 0% 40%"}}/>
                        </div>
                        <input type="text" placeholder='Subject' name="subject" required/>
                    </div>
                    <div className='inputs'>
                        <div>
                            <MdMail style={{margin:"18% 0% 0% 40%"}} />
                        </div>
                        <input type="email" placeholder='Email' name="email" required/>
                    </div>
                    <textarea name="message" cols="30" rows="10" placeholder='Write something here that you want to ask me ......' required/>
                    <input id="submit" type="submit" value="Send" />
                </form>
            </div>
        </div>
    </div>
  );
};

export default Contact;
