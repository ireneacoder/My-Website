
import './sciatica.css'
import Heading from "../heading/heading"
import Banner from "../banner/banner"
import Table from "../table/table"
import Button from '../button/button'
import Overview from '../overview/Overview'
export default function Sciatica()
{
    return(
        <div className=' overflow-x-hidden'>           
            <div>
                <Banner color='#E1F4FF' img='./sciatica_lo.png'/>
                
            </div>
            
            {/* <div className=' flex justify-center items-center w-full'> 
                <Table title='Self Assigned Project' role=' UI/UX Designer' duration='1 Month' tool=' Figma'/>
            </div> */}

            <div className='headings flex flex-col gap-1 -mt-14'>
                <Heading heading={'Overview'}/>
                <Overview type={'Assigned'} duration={'1 Month'} tools={'Figma'} link={'https://www.fixhealth.com/uk/sciatica-treatment'}/>
            </div>
            

            {/* <div className='mt-[4rem] flex justify-center items-center'>
                <Button text='Sciatica Page' link='https://www.fixhealth.com/uk/sciatica-treatment' />
            </div> */}

            <div className="headings"> <Heading heading='About Condition Page'/> </div>
            <div className='line'>
                <p>The condition page is a dedicated page for the physiotherapy providing company. The idea for this page is to educate the user (specifically UK based user) about their condition and make them trust us to get the sessions with Fix Health.</p>
                <div className='subheading'> Assumptions</div>
                <p>1. The user know about their specific condition and also know they need physiotherapy.<br/> 2. The user is specifically from UK.</p>
            </div>

            <div className="headings"> <Heading heading='Problem Statement'/> </div>
            <div className='line'>
                <p>The generic physiotherapy page was not targeting specific condition making them feel if this is for them or not. To solve this problem we added a list of conditions we treat and the response was good but still there were some conditions whose search and treatment request was high. So we decided to make specific conditions page in order to educate the user and get the user specifically from the conditions page.</p>
            </div>

            <div className="headings"> <Heading heading='UX Research'/> </div>
            <div className='line'>
                <p> After watching the MS Clarity recordings for Fix health page we concluded what are the things in which user are interested or are attracting them and what are the things which are not working for us. I also looked for some competitors website based in UK to understand what are the common things they are doing. I also did some UK patients user call to understand their culture and perceptions better. I did some google search to understand what are the common terms they use to understand the user better. With the help of all the  information's we gathered we worked on solving the problem and implementing our thought into a good UI.</p>
            </div>

            <div className="headings"> <Heading heading='My Responsibilities'/> </div>
            <div className='line'>

                <p> I had to start the project from scratch. The mains things I had to do was-</p>

                <p>
                    <li>Understanding the mindset of our target audience.</li>
                    <li>Searching and understanding the user behaviour of UK citizens.</li>
                    <li>Trying to understand the culture there and terms and things which are common and compulsory there</li>
                    <li>Deciding what good and what bad are our competitors doing.</li>
                    <li>Decide sections to be included in the website and giving user the best possible experience.</li>
                    <li>Check the performance of page and do necessary changes by viewing MS Clarity.</li>
                </p>

            </div>

            <div className="headings"> <Heading heading='User Interface Design'/> </div>
            <div className='line border-l-0'>
                
                <div className='uibox '>                
                    <div className='-ml-10'> <img style={{ width:'100%'}} src="./sciatica1.svg" alt="Wireframe of App" /> </div>
                </div>

                <div className='subsection text-xs sm:text-base'>
                    Other Conditions Pages
                </div>

                <div className='uibox bg-[rgba(244,251,255,1)] '> 
                    <div className=''> <img style={{ width:'100%'}} src="./sciatica2.svg" alt="App" /> </div>
                </div>

                <p>
                    The webpage for other conditions were designed similarly, just changing the suitable text and images for the website.
                </p>
                
            </div>


            
            {/* <p className='link'> See the <a href='https://www.figma.com/file/X6LzuZt0ENxk7pQJWmh3yE/Portfolio-website?node-id=0%3A1&t=TR6aUNDGlYNX0rTk-1'>Figma</a> Link </p> */}

            <div className='nematoda -mt-10'>
                <Button text='View Figma File' link='https://www.figma.com/design/7vGNFlFqwnljmrEwQhRWGz/Conditions-page-FH?node-id=0-1&t=LTTRKKGMpu62V1pc-1'/>     
            </div> 

            <div className="headings"> <Heading heading='Learnings :)'/> </div>
            <div className='line'>
                <p>This was my first in-office design project and I learnt a lot from this project. I was working alone as a designer on this project and learnt how to do user research in different ways. I talked to people and the best part was I saw the user behaviour live with the help of MS Clarity. This was a great experience.</p>
                <p>I learnt about the importance of user persona and keeping things simple yet beautiful. I hope to keep learning and designing much better products than this :).</p>
            </div>

            <div className='end'>  And Hence the Project was completed!! </div>
            <div className=' subend'>I hope you liked the project and the idea :) </div>
        </div>
    )
}