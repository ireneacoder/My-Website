
import './healthyfi.css'
import Heading from "../heading/heading"
import Banner from "../banner/banner"
import Table from "../table/table"
import Button from '../button/button'
export default function Healthyfi()
{
    return(
        <div>           
            <div>
                <Banner color='#F5E8FF' img='./cover tab(health).png'/>
                
            </div>
            <div> 
                <Table title='Self Assigned Project' role=' UI/UX Designer' duration='2 Months' tool=' Figma'/>
            </div>

            <div className="headings"> <Heading heading='About Healthy-Fi'/> </div>
            <div className='line'>
                <p>Healthy-Fi is an app which is designed for the use of the doctors to recommend the physiotherapy exercises time to time and keep a record of it in a very easy online way. It also provides some other premium facilities to the customer.</p>
                <div className='subheading'> Assumptions</div>
                <p>1. The account is created by the doctors to keep the record of the patient.<br/> 2. User has a good internet connectivity.</p>
            </div>

            <div className="headings"> <Heading heading='Problem Statement'/> </div>
            <div className='line'>
                <p>After too many visits to trainer for physiotherapy an idea of shifting this in an online mode passed my mind. The motive of designing this was to decrease the number of visits to the doctor and be able to manage the deadlines easily.</p>
            </div>

            <div className="headings"> <Heading heading='UX Research'/> </div>
            <div className='line'>
                <p> After having done some research from googling, taking notes from some exercising apps and talking to related people I finalized the problems that will be solved.
                    For building the trust with the user and relating it to the hospital/doctor I decided to go with the color scheme of Blue. Also I concluded that the target audience for my app would be the people between the age of 22- 50 and hence I decided to go with the minimal and familiar UI design so as to make people of older age comfortable in using the app.</p>
            </div>

            <div className="headings"> <Heading heading='User Flow'/> </div>
            <div className='line'>
                <div className='marginbox'> 
                    <div> <img style={{ width: '100%'}} src="./userflow(healthyfi).jpeg" alt=" User flow sketch" /> </div>
                </div>
                <p> This was the raw idea according to which I decided to move forward with, after my research. I kept on taking inputs from people around me by talking to them personally or through google forms and tried to solve their concerns. </p>
            </div>

            <div className="headings"> <Heading heading='Wireframes'/> </div>
            <div className='line'>
                <div className='marginbox'> 
                    <div> <img style={{ width:'100%'}} src="./wireframe(healthyfi).png" alt="Wireframe of App" /> </div>
                </div>
                <p> This was the raw idea according to which I decided to move forward with, after my research. I kept on taking inputs from people around me by talking to them personally or through google forms and tried to solve their concerns. </p>
            </div>


            <div className="headings"> <Heading heading='Moodboard'/> </div>
            <div className='line'>
                <div className='flex'>
                    <div className='marginbox'><div><img  style={{ width:'100%'}} src="./color(healthyfi).png" alt="Color moodboard" /></div></div>
                    <div className='marginbox'><div> <img style={{ width:'100%'}} src="./logo(healthyfi).png" alt="Logo moodboard" /> </div></div>
                    <div className='marginbox'><div> <img style={{ width:'100%'}} src="./font(healthyfi).png" alt="Font moodboard" /> </div></div>
                </div>
            </div>

            <div className="headings"> <Heading heading='User Interface Design'/> </div>
            <div className='line'>
                <div className='subsection'> Login Section:</div>
                <div className='marginbox'> 
                    <div> <img style={{width:'100%'}} src="./ui(h).png" alt="Login page" /> </div>
                </div>
                <p> This is the login section which shows login/signup screen, setting up screen and guide page for new users. Keeping in mind that the user may not be too familiar with the Apps, all the CTAs and instructions are kept minimal. </p>
            
            
                <div className='subsection'> Dashboard Section:</div>
                <div className='marginbox'> 
                    <div> <img style={{width:'100%'}} src="./ui2(h).png" alt="Dashboard page 1" /> </div>
                </div>
                <div className='marginbox'> 
                    <div> <img style={{width:'100%'}} src="./ui3(h).png" alt="Dashboard page 2" /> </div>
                </div>
                <p> The dashboard section included the home screen containing shortcuts to all the other tabs. Menu page, Profile, notification and settings page for the convenience of user. </p>
            
            

                <div className='subsection'> Activity Section:</div>
                <div className='marginbox'> 
                    <div> <img style={{width:'100%'}} src="./ui4(h).png" alt="Activity page" /> </div>
                </div>
                <p>This the main and considered to be mostly used section of the App. This shows all the assigned exercise with the details of it. The main problem which is focused in this section is-</p>
                
                <div className='points'> 
                    <div className='long'> 💡</div> 
                    <div> User should know before-hand about the requirements of the props in particular exercise.</div>
                </div>

                <div className='points'> 
                    <div  className='long'> 💡</div> 
                    <div> Along with video, the written steps should be provided for the convenience of user.</div>
                </div>

                <div className='points'> 
                    <div className='long'> 💡</div> 
                    <div> The option timer helps the user as they do not have to focus on other electrical devices for purpose of time recording. </div>
                </div>

                <div className='points'> 
                    <div className='long'> 💡</div>  
                    <div> Along with this, the user is provided with the option of recording his/her video, which can be sent to the doctor directly to get it checked if it is correct way. </div>
                </div>

            

            
                <div className='subsection'> Progress Section:</div>
                <div className='marginbox'> 
                    <div> <img style={{width:'100%'}} src="./ui5(h).png" alt="Progress page" /> </div>
                </div>
                <p>  This is mainly the report-card for showing the progress, days left, day and all related data. </p>
            

            
                <div className='subsection'> Doctor's Section:</div>
                <div className='marginbox'> 
                    <div> <img style={{width:'100%'}} src="./ui6(h).png" alt="Doctor's Detail page" /> </div>
                </div>
                <p>  This section mainly focusses on the screens for the interaction with doctor where user is allowed to book the appointment with doctor online, have a chat with doctor and calling feature. </p>
            
         </div>
            

            <div className="headings"> <Heading heading='Dark Mode for the App'/> </div>
            <div className='line'>
                <div className='marginbox'> 
                    <div> <img  style={{width:'100%'}} src="./uidark.png" alt=" Dark Mode screen 1" /> </div>
                </div>
                <div className='marginbox'> 
                    <div> <img  style={{width:'100%'}} src="./uidark2(h).png" alt=" Dark Mode screen 2" /> </div>
                </div>
                <div className='marginbox'> 
                    <div> <img style={{width:'100%'}} src="./uidark3(h).png" alt=" Dark Mode screen 3" /> </div>
                </div>
                <div className='marginbox'> 
                    <div> <img  style={{width:'100%'}} src="./uidark4(h).png" alt=" Dark Mode screen 4" /> </div>
                </div>
                <div className='marginbox'> 
                    <div> <img style={{width:'100%'}} src="./uidark5(h).png" alt=" Dark Mode screen 5" /> </div>
                </div>
                <div className='marginbox'> 
                    <div> <img style={{width:'100%'}} src="./uidark6(h).png" alt=" Dark Mode screen 6" /> </div>
                </div>  
            </div>

            {/* <p className='link'> See the <a href='https://www.figma.com/file/X6LzuZt0ENxk7pQJWmh3yE/Portfolio-website?node-id=0%3A1&t=TR6aUNDGlYNX0rTk-1'>Figma</a> Link </p> */}

             <div className='nematoda'>
                <Button text='View Figma File' link='https://www.figma.com/file/X6LzuZt0ENxk7pQJWmh3yE/Portfolio-website?node-id=0%3A1&t=7SRLoTiuGQxFFNjg-1'/>     
             </div> 

            <div className="headings"> <Heading heading='Learnings :)'/> </div>
            <div className='line'>
                <p> This was my first app design and I learnt a lot from this project. I was scared to work with the dark mode and I challenged myself for the same.</p>
                <p>I learnt about the importance of user persona and keeping things simple yet beautiful. I hope to keep learning and designing much better products than this :).</p>
            </div>

            <div className='end'>  And Hence the Project was completed!! </div>
            <div className=' subend'>I hope you liked the project and the idea :) </div>
        </div>
    )
}