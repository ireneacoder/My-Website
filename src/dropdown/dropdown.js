import { FaChevronDown } from 'react-icons/fa'
import './dropdown.css'
import { useState } from 'react'

export default function Dropdown({title, institute, degree, score, duration}){

    // Dropdown active state
    const [isActive, setIsActive] = useState(false)

    return(
        // Dropdown card
        <div style={{height:isActive?"12.52rem":"2.5rem"}} className='dropdownBar overflow-hidden duration-300 bg-[rgba(17,104,214,0.01)]'>

            {/* Dropdown heading */}
            <div onClick={()=>{setIsActive(!isActive)}} style={{ color:isActive&&"white", backgroundColor:isActive&&"rgba(68,81,177,1)"}} className=' h-[2.5rem] flex justify-between items-center px-4 bg-[rgba(17,104,214,0.08)] cursor-pointer select-none'>
                
                {/* Title */}
                <div className='text-sm'>{title}</div>

                {/* Arrow */}
                <FaChevronDown style={{transform:isActive&&"rotate(180deg)",}} className=' duration-150'/>
            </div>

            {/* Dropdown body */}
            <div className=' flex flex-col gap-1 h-[10rem] border-[2px] border-t-0 border-l-0 border-r-0 border-b-[rgba(17,104,214,1)] py-3 px-3 text-sm'>
                <div className='font-semibold'>{institute}</div>
                <div className=''>{degree}</div>
                <div className=''>{score}</div>
                <div className=''>{duration}</div>
            </div>
        </div>
    )
}