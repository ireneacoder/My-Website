
import './button.css'
import { HiArrowLongRight } from "react-icons/hi2";
export default function Button(props)
{
    return(
        <div className='rotates' onClick={() => props.onClick(true)}>
            <div className='behind'> {props.text} <div style={{ width:'0.8rem'}}></div><HiArrowLongRight/></div>
            <a className='forward' target={'_blank'} href={props.link}>  {props.text} <div style={{ width:'0.7rem'}}></div><HiArrowLongRight/> </a>
         
        </div>
    )
}