
import './backgroundcard.css'
export default function Education(props)
{
    return(
        <div className='bgwhite'>
            <div className='institute'>{props.institute}</div>
            <div className='val'>{props.degree}</div>
            <div className='val'> {props.board}</div>
            <div className='val'>{props.gpa}</div>
            <div className='val'>{props.year}</div>
        </div>
        

    )
}