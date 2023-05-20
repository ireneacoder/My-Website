
import './banner.css'
export default function Banner(props)
{
    return(
        <div style={{backgroundColor: props.color, display:'flex', justifyContent:'center', flexDirection:'column', alignItems:'center', padding:'3rem', minHeight:'15rem'}}>
            <div className='whitespace'>
                <div className='coverimage'style={{backgroundImage: "url('"+ props.img +"')"}}> </div>
            </div>
            
        </div>
    )
}