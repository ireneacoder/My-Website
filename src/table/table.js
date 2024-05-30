
import './table.css'
export default function Table(props)
{
    return(
        <div className=" w-[84vw] lg:w-[78vw] grid grid-cols-2 gap-[0.625rem] text-[0.8rem] sm:text-[1.1rem] md:text-[1.325rem] leading-[1.4rem] select-none">
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