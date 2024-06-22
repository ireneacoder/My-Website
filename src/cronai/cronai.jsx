
import '../sciatica/sciatica.css'
import Heading from "../heading/heading"
import Banner from "../banner/banner"
import Table from "../table/table"
import Button from '../button/button'
import Overview from '../overview/Overview'
export default function CronAI()
{
    return(
        <div className='overflow-x-hidden'>           
            <div>
                <Banner color='#E1F4FF' img='./bankflow_lo.png'/>
                
            </div>
            {/* <div className=' flex justify-center items-center w-full'> 
                <Table title='Assigned' role=' UI/UX Designer' duration='3 Months' tool=' Figma'/>
            </div> */}

            <div className='headings flex flex-col gap-1 -mt-14'>
                <Heading heading={'Overview'}/>
                <Overview type={'Assigned'} duration={'3 Months'} tools={'Figma'} link={'https://cronai.ai/'}/>
            </div>

            {/* <div className='mt-[4rem] flex justify-center items-center'>
                <Button text='Cron.AI Website' link='https://cronai.ai/' />
            </div> */}

            <div className="headings"> <Heading heading='About Cron.AI'/> </div>
            <div className='line'>
                <p>CRON AI develops advanced sensing software for drones, cars, and surveillance. Their senseEDGE product uses deep learning for accurate 3D object detection and tracking, focusing on easy, scalable deployment across various industries.</p>
            </div>

            <div className="headings"> <Heading heading='Problem Statement'/> </div>
            <div className='line'>
                <p>Designing a website for CRON AI is essential to showcase their technology, build credibility, attract clients, and provide customer support, making it easier for people to learn about and connect with the company.</p>
            </div>

            <div className="headings"> <Heading heading='UX Research'/> </div>
            <div className='line'>
                <p>The target audience is industries like Automotive Industry, Surveillance and Security and Smart Cities. We searched for the competition online in different countries and concluded how to showcase the product. We did some search and talk with the marketing team to understand the market requirement better. They had the branding done so there was nothing much to do on color and typography part.</p>
            </div>

            <div className="headings"> <Heading heading='My Responsibilities'/> </div>
            <div className='line'>

                <p> I had to start the project from scratch. The mains things I had to do was-</p>

                <p>
                    <li>Design a good and elegant UX for the website.</li>
                    <li>Research and finalize the sections in each page.</li>
                    <li>Showcase there products and highlight features for products.</li>
                    <li>Do some UX Research to understand the market, competition and the target audience better.</li>
                </p>

            </div>

            <div className="headings"> <Heading heading='User Interface Design'/> </div>
            <div className='line border-l-0'>
                
                <div className='subsection'>
                    Product Description Pages
                </div>

                <div className='uibox bg-[rgba(244,251,255,1)] '> 
                    <div className=''> <img style={{ width:'100%'}} src="./cronai1.svg" alt="App" /> </div>
                </div>
                
                <div className='subsection'>
                    Page for business purpose
                </div>

                <div className='uibox  '> 
                    <div className=''> <img style={{ width:'100%'}} src="./cronai2.svg" alt="App" /> </div>
                </div>

                <div className='subsection '>
                    Pages for trust & team building 
                </div>

                <div className='uibox  '> 
                    <div className=''> <img style={{ width:'100%'}} src="./cronai3.svg" alt="App" /> </div>
                </div>


            </div>


            
            {/* <p className='link'> See the <a href='https://www.figma.com/file/X6LzuZt0ENxk7pQJWmh3yE/Portfolio-website?node-id=0%3A1&t=TR6aUNDGlYNX0rTk-1'>Figma</a> Link </p> */}

            <div className='nematoda -mt-10'>
                <Button text='View Figma File' link='https://www.figma.com/design/0VlDxjKFd9QOEFcxEwkqzz/CRON-AI?node-id=505-32&t=d93cpU7qQB6fbq9f-0'/>     
            </div> 

            <div className="headings"> <Heading heading='Learnings :)'/> </div>
            <div className='line'>
                <p>This project taught me a lot. I learnt the design need not be thought from scratch and there might be some problems whose solution is already been found. I also learnt to differentiate and understand what element is necessary and what is not. I learnt to make a website according to the end result. </p>
                <p>I learnt how to showcase a product according to market need. I hope to keep learning and designing much better products than this :).</p>
            </div>

            <div className='end'>  And Hence the Project was completed!! </div>
            <div className=' subend'>I hope you liked the project and the idea :) </div>
        </div>
    )
}