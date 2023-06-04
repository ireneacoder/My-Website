import Nav from '../nav bar/nav';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Container from '../skills-container/skill';
import Heading from '../heading/heading';
import './app.css'
import { FiDownload } from "react-icons/fi";
import Education from '../backgroundcard/backgroundcard';
import { HiArrowLongRight } from "react-icons/hi2";
import Achievement from '../achievement/achievement';
import Project from '../project/projects';
import Healthyfi from '../healthyfi app/healthyfi';
import { SiGmail, SiNotion, SiLinkedin, SiInstagram, SiGithub } from "react-icons/si";
import Button from '../button/button';
import MyResume from './RESUME.pdf'
import { useState } from 'react';
import PopupDialog from '../PopupDialog/PopupDialog';


export default function App() {



    return (
        <>


            <Nav />
            <div className='image' >
                <div className='space'>
                    <div className='texts' >
                        <div className='greet'>
                            Hello 👋
                        </div>

                        <p className='name'>
                            I am <span className='namecolor'> Prerna Verma </span>
                        </p>

                        <div className='breif'>
                            <p>A digital product designer. I’m passionate to provide great experience to users through my design skills.</p>
                        </div>

                        <a className='download' href={MyResume} download={'Resume'} target='_blank'> Download Resume <span style={{ height: '2rem', borderStyle: 'solid', borderWidth: '0.05rem', borderColor: 'white', borderTop: 'none', borderRight: 'none', borderBottom: 'none', marginLeft: '1.25rem', paddingLeft: '0.625rem' }}> <FiDownload className='downicon' /></span> </a>

                    </div>
                    <img src='DP.png' className='dp'/>
                </div>
            </div>

            <div className='white' id='bio'>

                <Heading heading='About' />
                <div className='division'>
                    <p className='para'>I am a student of Mathematics and Computing, a five years dual degree course, from Birla Institute of Technology. During the period of Lockdown I started working on enhancing the skills in field of UI/UX designing and fell in love with this field. I am passionate about designing and want to make a career in same field.</p>
                    <p className='para'>I approach the problem with user’s point of view and try to give a solution which is streamlined, easy to use and gives user a happy experience. I research on the problem until I get satisfied as a user. I appreciate every little ideas from all sources that I come across. I am a keen learner and keep learning things to improve my projects everyday and enhance user experience.</p>
                </div>

            </div>

            <div id='skills' className='white'>

                <Heading heading='Skills' />

                <div className='horizontal'>
                    <Container text='User Interface Designer' />
                    <Container text='User Experience Designer' />
                    <Container text='User Experience Research' />
                    <Container text='Prototyping' />
                    <Container text='Wireframing' />
                    <Container text='Poster Designing' />
                    <Container text='HTML' />
                    <Container text='CSS' />
                    <Container text='ReactJs' />
                    <Container text='JavaScript' />
                    <Container text='ExpressJs' />
                    <Container text='Figma' />
                    <Container text='Adobe Illustrator' />
                    <Container text='Basic RESTful APIs' />
                    {/* <Container text='DSA/OOPs'/> */}
                </div>

            </div>
            <div className='white'>

                <Heading heading='Background' />
                <div className='bg'>
                    <div className='head'>Education</div>
                    <Education institute='Birla Institute of Technology, Mesra' degree='Integrated Mathematics and Computing (BSc.+MSc.)' gpa='8.68/10.00 GPA' year='2019-2024 (Expected)' />
                    <div className='gap'></div>
                    <Education institute='MK DAV Public School' board='Central Board of Secondary Education' degree='Intermediate - Science (Mathematics)' gpa='83/100 Percentage' year='2019' />
                    <div className='gap'></div>
                    <Education institute='MK DAV Public School' board='Central Board of Secondary Education' degree='Matriculation' gpa='10/10 CGPA' year='2017' />

                    <div className='head'>Experience</div>
                    <Education institute='Floxus' board='Internship' degree='UI/UX Designer' gpa='2 years' year='It is an ED-TECH company, my role here was to design posters, brochures and UI for the websites.' />
                    <div className='gap'></div>
                    <Education institute='Gigzoe' board='Internship' degree='Graphics Designer' gpa='2 months' year='It is a company which provides platform to user to find jobs and develop their skills,my role here was to design posters, and thumbnails for blogs' />
                    <div className='gap' ></div>
                    <Education institute='metashape.ai' board='Internship' degree='UI/UX Designer' gpa='6 months' year='It is a AI/ML based company which solves user problems using AI. My role here was to design website for the company and posters for social media.' />
                    <div className='gap'></div>
                    <Education institute='FoodStartt' board='Internship' degree='Graphics Designer' gpa='3 months' year='It is a company which sells the leftover foods in the restaurants to needy by offering some offers. My role here was to design the pamphlets and social media posters.' />
                    <div className='gap'></div>
                    <Education institute='Statistical Study on Slope of Line for Data Related to Height-Weight and Covid Infections and Recoveries' board='Research Intern' degree='Under Dr. Soubhik Chakraborty' gpa='Birla Institute of Technology' year='Worked on the  selected topic to analyse the behaviour of straight line when its parameters are input from probability density' />
                </div>
            </div>
            <div className='white'>

                <Heading heading='Achievements' />
                <div>
                    <Achievement imgurl={'certificate-to-be-issued.jpeg'} title='Joint President' desc='The Literary Society, BIT Mesra' />
                    <Achievement imgurl={'certificate.jpeg'} title='TOP 10 Finalist' desc='48Hrs Hackathon, Penthara Technologies' />
                </div>

            </div>

            <div id="project" className='white'>

                <Heading heading='Projects' />
                <div>
                    <Project color='#F5E8FF' img='./healthyfi.png' link='/healthyfi' imgsqr='./cover2 (tab).png' />
                    <Project color='#E1F4FF' img='./startex.png' link='/startex' imgsqr='./cover (tab).png' />
                </div>


            </div>
            <div className='white'> <Heading heading='Gallery' />  </div>
            <div className='galleryimage'>
                <div className="gallery">
                    <img src='./img1.png' />
                    <img src='./img2.png' />
                    <img src='./img3.png' />
                    <img src='./img4.png' />
                    <img src='./img5.png' />
                    <img src='./img6.png' />
                </div>
                <Button text='View Drive' link='https://drive.google.com/drive/folders/1ngRDa5-YDN2XK9cHhsBqIrOhq4k7UVLL?usp=sharing' />

            </div>


            <div>
                <div id='contact' className='white'>
                    <Heading heading='Contact' />
        

                    <div className='outerdiv'>
                        <div className='innerdiv'>
                            <a className='icons' href="mailto:prerna26vrm@gmail.com? subject = Want to Connect" target={'_blank'}><SiGmail className='sizeicon' /></a>
                            <div className='sepration'></div>
                            <a className='icons' href="https://historical-snout-aaa.notion.site/Hi-I-am-Prerna-Verma-1038b6d8035e448ba868ecabb983f6be" target={'_blank'}> <SiNotion className='sizeicon' /> </a>
                            <div className='sepration'> </div>
                            <a className='icons' href="https://www.linkedin.com/in/prerna-verma-6834b01a0/" target={'_blank'}> <SiLinkedin className='sizeicon' /> </a>
                            <div className='sepration'> </div>
                            <a className='icons' href="https://www.instagram.com/_prerna_vrm_/" target={'_blank'}> <SiInstagram className='sizeicon' /> </a>
                            <div className='sepration'> </div>
                            <a className='icons' href="https://github.com/ireneacoder" target={'_blank'}> <SiGithub className='sizeicon' /> </a>
                        </div>
                    </div>
                    <div className='thankyou'> Thankyou for visiting ! </div>
                    <div className='message'> Feel free to reach-out if you like my designs. Hope to learn everyday!</div>
                    <div style={{height:'3rem'}}></div>
                    <Button text='Figma Link to this Website' link='https://www.figma.com/file/X6LzuZt0ENxk7pQJWmh3yE/Portfolio-website?type=design&node-id=0%3A1&t=ZfEYNd90z20DRAdr-1'/>
                </div>
            </div>







        </>
    )
}