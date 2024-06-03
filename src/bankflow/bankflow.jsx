
import '../sciatica/sciatica.css'
import Heading from "../heading/heading"
import Banner from "../banner/banner"
import Table from "../table/table"
import Button from '../button/button'
export default function BankFlow()
{
    return(
        <div>           
            <div>
                <Banner color='#E1F4FF' img='./bankflow_lo.png'/>
                
            </div>
            <div className=' flex justify-center items-center w-full'> 
                <Table title='Freelance' role=' UI/UX Designer' duration='1 Month' tool=' Figma'/>
            </div>

            {/* <div className='mt-[4rem] flex justify-center items-center'>
                <Button text='Sciatica Page' link='https://www.fixhealth.com/uk/sciatica-treatment' />
            </div> */}

            <div className="headings"> <Heading heading='About Bank Application'/> </div>
            <div className='line'>
                <p>The banking app provides essential banking services, including login, logout, adding beneficiaries, changing user IDs and passwords, making transactions, registering for internet banking, opening new accounts, viewing account statements, and accessing transaction details. It aims to offer users a convenient and comprehensive platform to manage their banking needs from their devices.</p>
                <div className='subheading'> Assumptions</div>
                <p>1. The target audience is above the age of 20</p>
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
                    <li>Understanding the flow of banking application.</li>
                    <li>Understanding what are the things that has to be kept in mind for security.</li>
                    <li>Learn about what all things can be edited by user and what not.</li>
                    <li>Deciding what good and what bad are our competitors doing.</li>
                    <li>Deciding colour scheme of the website and giving user the best possible experience.</li>
                </p>

            </div>

            <div className="headings"> <Heading heading='User Interface Design'/> </div>
            <div className='line border-l-0'>
                
                <div className='subsection'>
                    Login-Logout Flow
                </div>

                <div className='uibox bg-[rgba(244,251,255,1)] '> 
                    <div className=''> <img style={{ width:'100%'}} src="./Bank1.svg" alt="App" /> </div>
                </div>

                <div className='uibox bg-[rgba(244,251,255,1)] '> 
                    <div className=''> <img style={{ width:'100%'}} src="./Bank2.svg" alt="App" /> </div>
                </div>

                <div className='uibox bg-[rgba(244,251,255,1)] '> 
                    <div className=''> <img style={{ width:'100%'}} src="./Bank3.svg" alt="App" /> </div>
                </div>

                <div>
                    These are the basic pages for an App according to the requirements which are: Login Page, Session Timeout Page, Register page, Forget ID, Forget Password, Set new password and adding beneficiary Page.
                </div>
                
                <div className='subsection'>
                    Opening Account
                </div>

                <div className='uibox  '> 
                    <div className=''> <img style={{ width:'100%'}} src="./openingAcc.svg" alt="App" /> </div>
                </div>

                <div className='subsection '>
                    Account Statement and Transaction
                </div>

                <div className='uibox  '> 
                    <div className=''> <img style={{ width:'100%'}} src="./Bank4.svg" alt="App" /> </div>
                </div>


            </div>


            
            {/* <p className='link'> See the <a href='https://www.figma.com/file/X6LzuZt0ENxk7pQJWmh3yE/Portfolio-website?node-id=0%3A1&t=TR6aUNDGlYNX0rTk-1'>Figma</a> Link </p> */}

            <div className='nematoda -mt-10'>
                <Button text='View Figma File' link='https://www.figma.com/design/D9AsItkA48C6OvNkn1GhzG/bank?node-id=0-1&t=SXlrUWMfEhCPOXlc-1'/>     
            </div> 

            <div className="headings"> <Heading heading='Learnings :)'/> </div>
            <div className='line'>
                <p>It was a great experience designing this website. I was able to fix the user experience which I personally felt poor in existing banking application. I was able to add colours to it and make it more aesthetic yet professional.</p>
                <p>I hope to keep learning and designing much better products than this :).</p>
            </div>

            <div className='end'>  And Hence the Project was completed!! </div>
            <div className=' subend'>I hope you liked the project and the idea :) </div>
        </div>
    )
}