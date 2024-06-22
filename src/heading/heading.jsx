
import './heading.css'
export default function Heading(props)
{
    return(
        <div className="mainheading ">
            
           <div className='back'>{props.heading}</div> 

           {/* <div className='mt-[18rem]'/> */}
           <div className='front'>{props.heading}</div>

        </div>
           
    )
}