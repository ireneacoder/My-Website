import Table from '../table/table'
import Banner from '../banner/banner'
import './startex.css'
import Heading from '../heading/heading'
import Button from '../button/button'
export default function Startex()
{
    return(
        <div>
            <div><Banner color='#E1F4FF' img='./startex_lo.png'/></div>

            <div className=' flex justify-center items-center w-full'> 
                <Table title='Assigned Project (Solo)' role=' UI/UX Designer' duration='1.5 Months' tool=' Figma'/> 
            </div>

            <div className='headings'> <Heading heading='About StartEx'/> </div>
            <div className='line'>
                <p>StartEx is a web application which was intended to solve all the concerns of person willing to start his/her own startup and to provide maximum best services for their help.</p>
            </div>

            <div className='headings'> <Heading heading='Problem Statement'/> </div>
            <div className='line'>
                <p>When one thinks of starting own business, they face some problems due to lack of idea and experience. Being a startup company, the main aim of Floxus-an ed-tech company, was to provide the solutions to the problems which people face some of which are:
                         <ul>
                             <li> Guidance from experienced person </li>
                             <li> Correct procedure </li>
                             <li> More exposure and many more </li>
                         </ul>  
                </p>
            </div>

            <div className='headings'> <Heading heading='My Responsibilities'/> </div>
            <div className='line'>
                <p> I had to start the project from scratch. The mains things I had to do was-
                         <ul>
                             <li> Understanding the mindset of our target audience. </li>
                             <li> Searching who our competitors where. </li>
                             <li> Deciding what good and what bad are our competitors doing. </li>
                             <li> Decide the color scheme, sections to be included in the website and giving user the best possible experience. </li>
                         </ul>  
                </p>
            </div>

            <div className='headings'> <Heading heading='The UX Research'/> </div>
            <div className='line'>
                <p> The research was done to validate the ideas for the project and understand the user perspective. It involved primary and secondary research, which included talking to different people in the same field, taking interviews of the client and making web searches for the data of current product . </p>
                <div className='subheading'> My Conclusions: </div>
                <div className='subsection'> Target Audience</div>
                <p> From the data I concluded that people of age between 22-30 are the main user we are targeting for and beside that people of age group between 16-22 and 30-55 can also be the audience of our product. So, I decided to move ahead with the research keeping people of age 21-36 as our target audience. </p>
                <div className='marginbox'> 
                    <div> <img style={{width:'100%'}} src="./AUDIENCE.png" alt="Target Audience" /> </div>
                </div>

                <div className='subsection'> Color Code </div>
                <p> For color scheme various possibilities were thought of but the best I could think of according to the color rule was Blue which is also used to symbolize TRUST.  </p>
                <div className='marginbox'> 
                    <div> <img style={{width:'100%'}} src="./COLOR(S).png" alt="Color Code" /> </div>
                </div>

                <div className='subsection'> Active State </div>
                <div className='marginbox'> 
                    <div> <img style={{width:'100%'}} src="./ACTIVE STATE.png" alt="Active state for navigation" /> </div>
                </div>
                <div className='marginbox'> 
                    <div> <img style={{width:'100%'}} src="./ACTIVE STATE BUTTONS.png" alt="Active State for Button" /> </div>
                </div>
            </div>

                <div className='headings'> <Heading heading='User Flow'/> </div>
                <div className='line'>
                    <div className='rows'>
                        <div className='s' >  
                            <p> This was the rough idea I began with, after completing my research. </p>
                            <p> The sections were decided according to the needs of user. Our clients section was important to build the feeling of trust in user . The About Us section showed the brief idea of what the company did. There was a Previous work section, The Process Step section and the Industries in which we had our experience in.</p>
                            <p> It is important for the user to know about the documentation work before-hand so the section of Needed Documents was added.</p>         
                        </div>

                        <div className='planpic'>
                            <div className='marginbox'> 
                                <img style={{width:'100%'}} src="./userflow(s).png" alt="Active state for navigation" />
                            </div>
                        </div>
                    </div>
                </div>

                <div className="headings"> <Heading heading='Wireframes'/> </div>
                <div className='line'>
                    <div className='marginbox'> 
                        <div> <img style={{ width:'100%'}} src="./wireframe1(startex).png" alt="Wireframe of Webpage" /> </div>
                    </div>
                    <div className='marginbox'> 
                        <div> <img style={{ width:'100%'}} src="./wireframe2(startex).png" alt="Wireframe of Webpage" /> </div>
                    </div>
                    <p> Wireframe is the important section to decide the layout of the website. </p>
                 </div>


                 <div className="headings"> <Heading heading='Iterations'/> </div>
                 <p className='msg'>Although some changes were made after the finalization of Wireframe which are as: </p>
                 <div className='line'>
                    <div className='subsection'> Landing :</div>
                     <p> The most challenging part of this project was designing the Landing page .After doing 6-7 iterations, I finally ended up with this Landing which was voted the highest during the beta design testing. </p>
                    <div className='marginbox'> 
                        <div> <img style={{width:'100%'}} src="./landing.png" alt="Landing page" /> </div>
                    </div>

                    <div className='subsection'> Our Services :</div>
                     <p> The first two iterations had an issue of too much text which is not considered as a good UX .</p>
                    <div className='marginbox'> 
                        <div> <img style={{width:'100%'}} src="./ourservices.png" alt="Our Services Page" /> </div>
                    </div>

                    
                    <div className='subsection'> The FAQ Section :</div>
                     <p>FAQs section is considered important for user point of view and usually user needs the answers to be seen at once which helps them to resolve their problem quickly (in case of query repetition).</p>
                    <div className='marginbox'> 
                        <div> <img style={{width:'100%'}} src="./faq.png" alt="FAQ Page" /> </div>
                    </div>

                    <div className='subsection'> Testimonial :</div>
                     <p> The most challenging part of this project was designing the Landing page .After doing 6-7 iterations, I finally ended up with this Landing which was voted the highest during the beta design testing. </p>
                    <div className='marginbox'> 
                        <div> <img style={{width:'100%'}} src="./testimonial.png" alt="Testimonial Page" /> </div>
                    </div>

                    <div className='subsection'> Service Details Page :</div>
                     <p>The second iteration was much more descriptive and user friendly.</p>
                    <div className='marginbox'> 
                        <div> <img style={{width:'100%'}} src="./servicedetail.png" alt="Service Details Page" /> </div>
                    </div>
                   
                 </div>


                 <div className="headings"> <Heading heading='User Interface Design'/> </div>
                <div className='line'>
                    <div className='marginbox'> 
                        <div> <img style={{ width:'100%'}} src="./ui1(startex).png" alt="UI Design of Webpage" /> </div>
                    </div>
                    <div className='marginbox'> 
                        <div> <img style={{ width:'100%'}} src="./ui2(startex).png" alt="UI Design of Webpage" /> </div>
                    </div>
                    <p> This was the final design for the website for first launch and after sometimes according to the user interaction data the second iteration of this website will be designed. </p>
                 </div>
                 <Button text='View Figma File' link='https://www.figma.com/file/5DgDawSn492qlkCQ5g0V3E/STARTEX-WEBSITE?type=design&node-id=0%3A1&t=cF7RYuHIqGwqC2Ev-1'/>
                 
                 <div className="headings"> <Heading heading='Beta Testing'/> </div>
                <div className='line'>
                    <p> For getting the reviews and suggestions on design I designed the google form and shared the prototyped file with my friends, family and FLOXUS team. It contained details like:
                        <ui>
                            <li>What are the designs related things that need to be changed.</li>
                            <li>How much will they rate on the scale of 10 for user experience.</li>
                            <li>What are the things that are not user friendly.</li>
                            <li>If anything they think needs to be added that they think can be helpful.</li>
                            <li>What do you liked about the design.</li>
                        </ui>
                        This helped me a lot and I was finally able to complete my first project with solving almost all the concerns. The website is under development and after its testing I will be working on its second iteration which might include removing or adding some sections/pages accordingly</p>
                </div>


                <div className="headings"> <Heading heading='Learnings :)'/> </div>
                <div className='line'>
                    <p> This was my first web-designing project. I learnt a lot from this. I believe in learning and the main learnings in this project was having trust in the process, no matter how ugly it looks in the beginning, it will turnout to be good at the end. I also learnt to be able to do the changes in the design and not fall in love with the first design.
                        I hope I will get better with these learning and do even better in next project :).</p>
                </div>

                <div className='end'>  And Hence the Project was completed!! </div>
                <div className=' subend'>I hope you found this case study valuable and informative and I hope you like it :) </div>
        </div>
    )
}