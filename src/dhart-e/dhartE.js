
import Heading from "../heading/heading"
import Banner from "../banner/banner"
import Table from "../table/table"
import Button from '../button/button'
export default function DhartE(){
    return(
        <div>           
            <div>
                <Banner color='#E3F7D7' img='./cover tab(dharte).png'/>
                
            </div>
            <div> 
                <Table title='Assigned Project' role=' UI/UX Designer' duration='2 Months' tool=' Figma'/>
            </div>

            <div className='nematoda'>
                <Button text='dhart-E Website' link='https://dhart-e.com/'/>     
             </div> 

            <div className="headings"> <Heading heading='About dhart-E'/> </div>
            <div className='line'>
                <p>dhart-E is a company which re-imagine and transform commercial vehicles, to drive clean energy initiative, while providing data-driven, smart solutions for last mile logistic management.It is subsidiary of [cron.ai](http://cron.ai).</p>
            
            </div>

            <div className="headings"> <Heading heading='Problem Statement'/> </div>
            <div className='line'>
                <p>It was an assigned project, whose basic idea was to make the website impactful and attract customers based in industries. They wanted to showcase there products and highlight the key features for the product. This project is the first release of dhart-E.</p>
            </div>

            <div className="headings"> <Heading heading='My Responsibilities'/> </div>
            <div className='line'>
                <p>The key responsibilities during this process were:</p>
                <li>Design a good UX for the website.</li>
                <li>Research and finalize the sections in each page.</li>
                <li>Design an elegant website for the launch.</li>
                <li>Showcase there products and highlight features for products.</li>
            </div>

            <div className="headings"> <Heading heading='UX Research'/> </div>
            <div className='line'>
                <p>The first approach was looking for who our competitors were and who our target audience were. By doing some research I deduced that the industry people were our target audience, the delivery services was main target. From this I concluded:</p>
                <li>It should be attractive but to the point.</li>
                <li>Should have less content and more graphics.</li>
                <li>Should show the benefits for them.</li>
                <p>For the UI I went on searching for inspirations on dribble, instagram and envato and concluded to go for minimal design, greater font size. The two primary colors were decided by the company. The main sections to be highlighted were kept in navigation bar and seperate product page were designed for different products showcasing all the required details.</p>
            </div>


            <div className="headings"> <Heading heading='User Interface Design'/> </div>
            <div className='line'>
                <div className='subsection'> Website View </div>
                <div className='marginbox'> 
                    <div> <img style={{width:'100%'}} src="./ui(dharte).png" alt="Home Page" /> </div>
                </div>
                <div className='marginbox'> 
                    <div> <img style={{width:'100%'}} src="./ui1(dharte).png" alt=" About Us Page" /> </div>
                </div>
                <div className='marginbox'> 
                    <div> <img style={{width:'100%'}} src="./ui2(dharte).png" alt="Product Page" /> </div>
                </div>
                <div className='marginbox'> 
                    <div> <img style={{width:'100%'}} src="./ui3(dharte).png" alt="Contact Us Page" /> </div>
                </div>
            
            
            
                <div className='subsection'> Mobile View </div>
                <div className='marginbox'> 
                    <div> <img style={{width:'100%'}} src="./ui4(dharte).png" alt="Home page" /> </div>
                </div>
                <div className='marginbox'> 
                    <div> <img style={{width:'100%'}} src="./ui5(dharte).png" alt="About Us Page" /> </div>
                </div>
                <div className='marginbox'> 
                    <div> <img style={{width:'100%'}} src="./ui6(dharte).png" alt="Product Page" /> </div>
                </div>
                <div className='marginbox'> 
                    <div> <img style={{width:'100%'}} src="./ui7(dharte).png" alt="Contact Us Page" /> </div>
                </div>
                
            </div>
            
            <div className="headings"> <Heading heading='Beta-Testing:'/> </div>
            <div className='line'>
                <p>For getting the reviews and suggestions on design I designed the google form and shared the prototyped file with my friends, family and dhart-E team. It contained details like:</p>
                <li>What are the designs related things that need to be changed.</li>
                <li>How much will they rate on the scale of 10 for user experience.</li>
                <li>What are the things that are not user friendly.</li>
                <li>If anything they think needs to be added that they think can be helpful.</li>
                <li>What do you liked about the design.</li>
            </div>
        

            {/* <p className='link'> See the <a href='https://www.figma.com/file/X6LzuZt0ENxk7pQJWmh3yE/Portfolio-website?node-id=0%3A1&t=TR6aUNDGlYNX0rTk-1'>Figma</a> Link </p> */}

             <div className='nematoda'>
                <Button text='View Figma File' link='https://www.figma.com/file/5jkKtexHBRxKYjBEV37GPV/DHART-E-WEBSITE?type=design&node-id=0%3A1&mode=design&t=WmPFne5CMrtEcG0z-1'/>     
             </div> 


            <div className='end'>  And Hence the Project was completed!! </div>
            <div className=' subend'>I hope you liked the project and the idea :) </div>
        </div>
    )
}