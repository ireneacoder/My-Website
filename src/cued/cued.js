import Heading from "../heading/heading"
import Banner from "../banner/banner"
import Table from "../table/table"
import Button from '../button/button'
export default function Cued(){
    return(
        <div>           
            <div>
                <Banner color='#E3F7D7' img='./cued_lo.png'/>
                
            </div>
            <div> 
                <Table title='Assigned Project' role=' UI/UX Designer' duration='2 Months' tool=' Figma'/>
            </div>

            <div className="headings"> <Heading heading='About CUED'/> </div>
            <div className='line'>
                <p>The idea of the app is to make it easy for college students to find sponsors for college fests and track total footfall by making registrations online.</p>
            
            </div>

            <div className="headings"> <Heading heading='Problem Statement'/> </div>
            <div className='line'>
                <p>The students in core team of college fests end up settling in low for sponsors and much of time is wasted. Also, they are not able to manage the crowd due to lack of total student count. To solve this issue the app was designed which is under development.</p>
            </div>

            <div className="headings"> <Heading heading='My Responsibilities'/> </div>
            <div className='line'>
                <p>I had to start the project from scratch keeping the following things in priority:- </p>
                <li>Understanding the mindset of our target audience.</li>
                <li>Searching who our competitors where.</li>
                <li>Deciding what good and what bad are our competitors doing.</li>
                <li>Decide the color scheme, sections to be included in the website and giving user the best possible experience.</li>
            </div>

            <div className="headings"> <Heading heading='UX Research'/> </div>
            <div className='line'>
                <p>After having done some research from googling, taking notes from some exercising apps, some sites for inspirational ideas and talking to related people I finalized the problems that will be solved.
                For building the trust with the user and relating it to the students, I decided to go with the warm color pallet. Also I concluded that the target audience for my app would be the people between the age of 18- 24 and hence I decided to go with the minimal and familiar UI design so as to make people be comfortable in using the app.</p>
            </div>

            <div className="headings"> <Heading heading='Moodboard'/> </div>
            <div className='line'>
                <div className='flex'>
                    <div className='marginbox'><div><img  style={{ width:'100%'}} src="./Colours(cued).png" alt="Color moodboard" /></div></div>
                    <div className='marginbox'><div> <img style={{ width:'100%'}} src="./LOGO(cued).png" alt="Logo moodboard" /> </div></div>
                    <div className='marginbox'><div> <img style={{ width:'100%'}} src="./Typography(cued).png" alt="Font moodboard" /> </div></div>
                </div>
            </div>


            <div className="headings"> <Heading heading='Wireframes'/> </div>
            <div className='line'>
                <p>The first approach for the UI was designing the wireframes, the app was for the students to register and have a record of it so the pages for the first iteration were </p>
                <li>Login/ Signup page : To create account for new member or login to  existing one.</li>
                <li>Complete the Account: The form was kept in three section to make it less boring for the user to fill form and let the user fill only the essential information.</li>
                <li>Feed(Home) Page: This was to draw attention of user to the upcoming events and the events whose registration have been started. The user can also use search bar to search for particular event they want , the banner section where they can see the event list which are upcoming but registrations will be started soon and the recommended section based on there history which has event cards whose registrations are open </li>
                <li>Token Page: This will be implemented in the second iteration but the idea was to give some coupons or relaxation to user on there registrations</li>
                <li>Registered Events Page:  This page will have all the event cards which the user has registered for.</li>
                <li>Event Detail Page: This shows the Name of Event, Place, Time , Total registered people, Event Organisers, Detailed explanation and rules, Share option,  Itenary download option, view registered people, last year event video all in one page to attract the user for registring. </li>

                <div className='marginbox'> 
                    <div> <img style={{ width:'100%'}} src="./wireframe(cued).png" alt="Wireframe of App" /> </div>
                </div>
                <div className='marginbox'> 
                    <div> <img style={{ width:'100%'}} src="./wireframe1(cued).png" alt="Wireframe of App" /> </div>
                </div>
                <div className='marginbox'> 
                    <div> <img style={{ width:'100%'}} src="./wireframe2(cued).png" alt="Wireframe of App" /> </div>
                </div>
    
            </div>


            

            <div className="headings"> <Heading heading='User Interface Design'/> </div>
            <div className='line'>
                <div className='subsection'> Mobile Version </div>
                <div className='marginbox'> 
                    <div> <img style={{width:'100%'}} src="./ui(cued).png" alt="Login page" /> </div>
                </div>
                <div className='marginbox'> 
                    <div> <img style={{width:'100%'}} src="./ui1(cued).png" alt="Login page" /> </div>
                </div>
                <div className='marginbox'> 
                    <div> <img style={{width:'100%'}} src="./ui2(cued).png" alt="Login page" /> </div>
                </div>
            
            
            
                <div className='subsection'> Website Version </div>
                <div className='marginbox'> 
                    <div> <img style={{width:'100%'}} src="./ui3(cued).png" alt="Dashboard page 1" /> </div>
                </div>
                <div className='marginbox'> 
                    <div> <img style={{width:'100%'}} src="./ui4(cued).png" alt="Dashboard page 2" /> </div>
                </div>
                <div className='marginbox'> 
                    <div> <img style={{width:'100%'}} src="./ui5(cued).png" alt="Dashboard page 2" /> </div>
                </div>
                
            </div>
            <div className="headings"> <Heading heading='Logo'/> </div>
                <div className='line'>
                    <p>The logo for the app was also designed by me. The idea for the logo was to make it simple, readable and elegant.</p>
                    <div className='marginbox'> 
                        <div> <img style={{width:'100%'}} src="./logodesign(cued).png" alt="logo" /> </div>
                    </div>
            </div>
            <div className="headings"> <Heading heading='Beta-Testing:'/> </div>
            <div className='line'>
                <p>For getting the reviews and suggestions on design I designed the google form and shared the prototyped file with my friends, family and Razespace team. It contained details like:</p>
                <li>What are the designs related things that need to be changed.</li>
                <li>How much will they rate on the scale of 10 for user experience.</li>
                <li>What are the things that are not user friendly.</li>
                <li>If anything they think needs to be added that they think can be helpful.</li>
                <li>What do you liked about the design.</li>
            </div>
        

            {/* <p className='link'> See the <a href='https://www.figma.com/file/X6LzuZt0ENxk7pQJWmh3yE/Portfolio-website?node-id=0%3A1&t=TR6aUNDGlYNX0rTk-1'>Figma</a> Link </p> */}

             <div className='nematoda'>
                <Button text='View Figma File' link='https://www.figma.com/file/kjyE7TySNVMQp8LYRNQ6Tj/Razespace-App?type=design&node-id=635%3A7555&mode=design&t=MuxRsf274xqIIOKK-1'/>     
             </div> 

            <div className="headings"> <Heading heading='Learnings :)'/> </div>
            <div className='line'>
                <p>I was able to design the app for public use in a limited time frame. I learnt about the importance of user persona and keeping things simple yet beautiful. I hope to keep learning and designing much better products than this :). </p>
            </div>

            <div className='end'>  And Hence the Project was completed!! </div>
            <div className=' subend'>I hope you liked the project and the idea :) </div>
        </div>
    )
}