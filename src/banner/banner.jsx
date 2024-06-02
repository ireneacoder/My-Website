
import './banner.css'
export default function Banner(props)
{
    return(
        <div className='colorbox'style={{backgroundColor: props.color}}> 
            <div className='whitespace'>
                <div className='coverimage'style={{backgroundImage: "url('"+ props.img +"')"}}> </div>
            </div>
            
        </div>
    )
}