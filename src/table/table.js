
import './table.css'
export default function Table(props)
{
    return(
        <div className="table">
            <div className='intersection' >Project Type</div>
            <div className='intersection' >{props.title}</div>

            <div className='intersection' >My Role</div>
            <div className='intersection' >{props.role}</div>

            <div className='intersection' >Duration</div>
            <div className='intersection' >{props.duration}</div>

            <div className='intersection' >Tool Used</div>
            <div className='intersection' >{props.tool}</div>
        </div>
    )
}