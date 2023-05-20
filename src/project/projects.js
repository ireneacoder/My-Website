
import Button from "../button/button";
import { HiArrowLongRight } from "react-icons/hi2";
import './project.css'
export default function Project(props)
{
    return(
        <div style={{backgroundColor: props.color, display:'flex', justifyContent:'center', flexDirection:'column', alignItems:'center', padding:'3rem', minHeight:'20rem', marginTop:'2rem'}}>
            <div className='whitediv'>
                <div className='cover'style={{backgroundImage: "url('"+ props.img +"')"}}> </div>
            </div>
            {/* <a className='button' target={'_blank'} href={props.link}> View More <div style={{ width:'0.7rem'}}></div>    <HiArrowLongRight/> </a> */}
            <div style={{marginTop:'1.8rem'}}> <Button link= {props.link} text='View More'/> </div>
        </div>
    )
}
