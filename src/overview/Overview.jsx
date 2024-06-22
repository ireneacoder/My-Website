import Button from '../button/button'
import './Overview.css'

export default function Overview({type, duration, tools, link}){

    // Constant for mapping details to mini-card
    const miniCard = [{name:'Project Type', value: type}, {name:'Duration', value:duration}, {name:'Tools Used', value:tools}]

    return(

        // Overview Card
        <div className=' flex flex-col lg:flex-row justify-start items-stretch gap-[2rem] relative h-[7rem] mb-20 lg:mb-0'>
            
            {/* Content */}
            <div className=' w-full lg:w-[25rem] ml-2 flex flex-col items-start justify-between'>
                
                {/* Text */}
                <div>
                    This section carries all the project details on the time of starting the designing.
                </div>

                {/* PC view button */}
                {
                    link&&
                    <div className=' hidden lg:block'>
                        <Button text='Developed Site' link={link} />
                    </div>
                }

            </div>

            {/* Details */}
            <div className='w-full lg:w-1/2 flex justify-center items-stretch gap-2 relative'>

                {/* Light purple band */}
                <div className=' absolute bg-[rgba(68,81,177,0.05)] w-[200vw] h-[4rem] -left-48 lg:left-10 self-center'/>
                
                {
                    // Individual mini cards
                    miniCard.map((item, idx)=>{
                        return(
                            <div key={idx} className=' z-10 flex flex-col justify-center items-center rounded-md w-[8.5rem] h-[7rem] border border-[rgba(136,136,136,1)] bg-white select-none hover:scale-[1.02] duration-150 cursor-pointer px-2'>

                                <div className='text-[rgba(68,81,177,1)] font-semibold text-xl lg:text-2xl overflow-hidden text-nowrap text-ellipsis'>
                                    {item.value}
                                </div>

                                <div className='text-xs'>
                                    {item.name}
                                </div>

                            </div>
                        )
                    })
                }

            </div>
            
            {/* Mobile/Tab view button */}
            {
                link&&
                <div className=' lg:hidden'>
                    <Button text='Developed Site' link={link} />
                </div>
            }

        </div>
    )
}