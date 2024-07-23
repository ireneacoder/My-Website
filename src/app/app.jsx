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
import MyResume from './Resume.pdf'
import { useEffect, useState } from 'react';
import PopupDialog from '../PopupDialog/PopupDialog';
import Dropdown from '../dropdown/dropdown';
import ExperienceCard from '../experiencecard/ExperienceCard';
import { useParallax } from 'react-scroll-parallax';


export default function App() {

    const [gridToggle, setGridToggle] = useState(false)
    const [parallaxToggle, setParallax] = useState('HD')

    useEffect(() => {
      
        window.addEventListener("resize", ()=>{
            if(window.innerWidth < 1024){
                setGridToggle(false)
            }
            if(window.innerWidth < 768){
                setParallax(768)
            }
            else if (window.innerWidth < 1280){
                setParallax(1280)
            }
            else{
                setParallax('HD')
            }
        })

        if(window.innerWidth < 768){
            setParallax(768)
        }
        else if (window.innerWidth < 1280){
            setParallax(1280)
        }
        else{
            setParallax('HD')
        }
    
      return () => {}
    }, [])
    
    const parallax = useParallax({
        speed: parallaxToggle === 768? -4: parallaxToggle === 1280? -7: -10,
    });

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
                            <p>A digital product designer. I'm passionate to provide great experience to users through my design skills.</p>
                        </div>

                        <a className='download' href={MyResume} download={'Resume'} target='_blank'> Download Resume <span style={{ height: '2rem', borderStyle: 'solid', borderWidth: '0.05rem', borderColor: 'white', borderTop: 'none', borderRight: 'none', borderBottom: 'none', marginLeft: '1.25rem', paddingLeft: '0.625rem' }}> <FiDownload className='downicon' /></span> </a>

                    </div>
                    <img src='prernaCoverImage.svg' className='dp'/>
                </div>
            </div>

            <div className='white' id='bio'>

                <Heading heading='About' />
                <div className='division pb-3'>
                    <p className='para'>I've completed my Bachelors and Masters of Science in Mathematics and Computing, a five year dual degree course, from Birla Institute of Technology, Mesra. I started working on enhancing my skills in field of UI/UX designing during my sophomore year of university. I am passionate about designing and want to have a successful career in this field.</p>
                    <p className='para'>I approach the problem with user's point of view and try to give a solution which is streamlined, easy to use and gives user a happy experience. I research on the problem until I get satisfied as a user. I appreciate every little ideas from all sources that I come across. I am a keen learner and keep learning new techniques to improve my projects everyday and enhance user interface without compromising the user experience.</p>

                    {/* Dropdown */}
                    <div className='dropdownContainer'>
                        <Dropdown title={'Integrated Masters'} institute={'Birla Institute of Technology, Mesra'} degree={'Integrated Mathematics and Computing (BSc. + MSc.)'} score={'8.619/10.00 GPA'} duration={'2019-2024'}/>
                        <Dropdown title={'Intermediate - (Mathematics)'} institute={'MK DAV Public School'} degree={'Intermediate - Science (Mathematics) CBSE'} score={'83/100 Percentage'} duration={'2019'}/>
                        <Dropdown title={'Matriculation'} institute={'MK DAV Public School'} degree={'Matriculation CBSE'} score={'10/10 CGPA'} duration={'2017'}/>
                    </div>
                    
                </div>

            </div>

            <div id='skills' className='white'>

                <Heading heading='Skills' />
        
                <div className='horizontal justify-center ml-3 sm:justify-start'>
                    <Container percentage={98} text='User Interface Design' />
                    <Container percentage={96} text='User Experience Design' />
                    <Container percentage={90} text='User Experience Research' />
                    <Container percentage={90} text='Prototyping' />
                    <Container percentage={94} text='Wireframing' />
                    <Container percentage={96} text='Poster Designing' />
                    <Container percentage={80} text='HTML' />
                    <Container percentage={92} text='CSS' />
                    <Container percentage={75} text='JavaScript' />
                    <Container percentage={85} text='ReactJs' />
                    {/* <Container text='ExpressJs' /> */}
                    <Container percentage={98} text='Figma' />
                    <Container percentage={77} text='Adobe XD' />
                    {/* <Container text='Basic RESTful APIs' /> */}
                    <Container percentage={70} text='SQL' />
                    {/* <Container text='Flask' /> */}
                    {/* <Container text='DSA/OOPs'/> */}
                </div>

            </div>
            
            <div className={`bg-[rgba(68,81,177,1)] sm:bg-transparent pb-1 sm:pb-0`}>
                <img  className=' -z-10' width={'100%'} src={'/waveBackground.svg'} alt='purple wave'/>
                

                {/* <div className=' z-10 flex flex-col justify-start gap-4 sm:gap-5 mb-[8rem] mx-[8%] md:mx-[18%] -mt-[4rem] sm:-mt-[10rem] lg:-mt-[14rem] h-[30rem]'> */}
                <div ref={parallax.ref} className='z-10 white bg-none flex flex-col justify-start gap-4 sm:gap-5 -mt-[3.5rem] sm:-mt-[10rem] lg:-mt-[14rem]'>

                    <div className=' text-4xl sm:text-5xl md:text-6xl font-bold text-white select-none'>
                        Experience
                    </div>
                    
                    <div className='grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4 duration-150'>
                        <ExperienceCard/>
                        <ExperienceCard org='Cron AI' location='Remote' description='CRON AI develops software for precise 3D object detection and tracking.' link={'https://cronai.ai/'}/>
                        <ExperienceCard org='Metashape.ai' location='Remote' designation='Frontend Developer' duration='11 months' description='MetaShape.ai develops AI software to automate business processes.' link={'https://metashape.ai/'}/>
                        <ExperienceCard org='Floxus' duration='2 years' location='Remote' description='Floxus goal is innovating education with the help of technology.' link={'https://www.floxus.co/'}/>
                        <ExperienceCard org='Statistical Study on Slope of a Line' type='Research Paper' location='' duration='' designation='' empType='' description='Analysed the behaviour of straight line when its parameters are input from probability density. Guide: Dr. Soubhik Chakraborty ' link={'https://www.onlinescientificresearch.com/articles/a-statistical-study-on-the-slope-of-a-line-for-data-related-to-heightweight-and-covid-infectionsrecoveries.pdf'}/>
                        <ExperienceCard org='ARIMA vs. Fourier for Climate Forecasting' type='Research Paper' location='' duration='' designation='' empType='' description='Compared models: ARIMA better for temperature and humidity, Fourier for pressure in climate forecasting. Guide: Dr. Soubhik Chakraborty' link={'https://stm.bookpi.org/STRUFP-V8/article/view/15147'}/>
                    </div>

                </div>
            </div>

            <div className='white'>

                <Heading heading='Achievements' />
                <div>
                    <Achievement imgurl={'certificate-to-be-issued.jpeg'} title='Joint President' desc='The Literary Society, BIT Mesra' />
                    <Achievement imgurl={'certificate.jpeg'} title='Placed in TOP 10 Finalist' desc='48Hrs UI/UX Designing Hackathon, Penthara Technologies' />
                </div>

            </div>

            <div id="project" className='white'>

                
                <Heading heading='Projects' />

                <div className='hidden lg:flex justify-start items-center gap-1 mt-10'>
                    
                    <button onClick={()=>{setGridToggle(false)}} style={{color : !gridToggle&&"#4451B1"}} className='grid-toggle before:ml-[-2.95rem]'>
                        List View
                    </button>

                    <div className='h-[2rem] w-[2px] bg-[#ededed]'/>

                    <button onClick={()=>{setGridToggle(true)}} style={{color : gridToggle&&"#4451B1"}} className='grid-toggle before:ml-[-2.80rem]'>
                        Grid View
                    </button>

                </div>

                <div className=' hidden lg:block h-[2px] w-full bg-[#CECECE]'/>

                <div style={{ gridTemplateColumns : gridToggle?'repeat(2, minmax(0, 1fr))':'repeat(1, minmax(0, 1fr))'}} className=' duration-200 ease-in-out grid gap-3'>
                    <Project color="#E1F4FF" img='./sciatica_lo.png' link='/sciatica' imgsqr='./sciatica_lo.png'/>
                    <Project color='#F5E8FF' img='./dhart-e_lo.png' link='/dhartE' imgsqr='./cover4 (tab).png' />
                    <Project color='#E2CFFF' img='./healthyfi_lo_quality.png' link='/healthyfi' imgsqr='./cover2 (tab).png' />
                    <Project color="#EBFFCB" img='./bankflow_lo.png' link='/bankflow' imgsqr='./bankflow_lo.png'/>
                    <Project color="#f7d2d0" img='./cron_lo.png' link='/cronai' imgsqr='./cron_lo.png'/>                    
                    <Project color='#FFE5DC' img='./startex_lo.png' link='/startex' imgsqr='./cover (tab).png' />
                    <Project color='#FFF3D3' img='./cued_lo.png' link='/cued' imgsqr='./cover3 (tab).png' />
                    <Project color='#E3F7D7' img='./library_lo.png' link='https://github.com/ireneacoder/Library-Management-System' imgsqr='./cover5 (tab).png' />

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