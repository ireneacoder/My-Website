
import './table.css'
export default function Table(props)
{
    return(
        <div className="table">
            <div className='intersection' style={{fontWeight:'500'}} >Project Type</div>
            <div className='intersection' >{props.title}</div>

            <div className='intersection' style={{fontWeight:'500'}} >My Role</div>
            <div className='intersection' >{props.role}</div>

            <div className='intersection' style={{fontWeight:'500'}} >Duration</div>
            <div className='intersection' >{props.duration}</div>

            <div className='intersection' style={{fontWeight:'500'}} >Tool Used</div>
            <div className='intersection' >{props.tool}</div>
        </div>
    )
}