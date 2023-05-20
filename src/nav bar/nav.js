
import './nav.css' 
import { FaHome } from "react-icons/fa";
import { FaCopy } from "react-icons/fa";
import { FaProjectDiagram } from "react-icons/fa";
import { FaIdBadge } from "react-icons/fa";

export default function Nav()
{
    return(
        <>
              <div className='vertical'>

                        
                        <div className='cutt'> <FaHome size={28}/> <a className='navbutton' href='#'>Home</a></div>
                        <div className='cutt'> <FaCopy size={28}/>  <a className='navbutton' href='#bio'>Bio</a> </div>
                        <div className='cutt'> <FaProjectDiagram size={28}/>  <a className='navbutton' href='#project'>Projects</a> </div>
                        <div className='contact cutt'> <FaIdBadge size={28}/>  <a className='navbutton' href='#contact'>Contact</a> </div>
                        
                        
                
                
              </div>  
        </>
    )
}