import './ExperienceCard.css'

export default function ExperienceCard({org="Fixhealth", empType="Internship", type="Website", designation="UI/UX Designer", duration="6 months", location="Bangalore", description="Fix Health provides personalized physiotherapy for pain-free living.", link="https://www.fixhealth.com/uk"}){
    return(

        // Card
        <div className=' w-full min-h-[12rem] border border-[rgba(188,188,188,1)] px-3 py-4 bg-white select-none hover:scale-[1.02] ease-in-out duration-150 overflow-hidden'>

            {/* Org, employment type and type */}
            <div className='flex justify-between items-start w-full'>

                {/* Org and employment type*/}
                <div className='flex flex-col gap-0'>

                    {/* Org */}
                    <div className='text-[rgba(68,81,177,1)] font-semibold w-[10rem] leading-tight'>{org}</div>

                    {/* Employment type */}
                    <div className='text-xs'>{empType}</div>
                    
                </div>

                {/* Type */}
                <div onClick={()=>{if(link) window.open(link, '_blank')}} className={`flex justify-center items-center min-w-[5rem] px-2 h-[1.25rem] text-xs text-[rgba(68,81,177,1)] bg-[rgba(68,81,177,0.04)] ${link&&'cursor-pointer'}`}>{type}</div>

            </div>

            {/* Designation, duration and location */}
            <div className='flex justify-between items-center mt-2'>

                {/* Designation */}
                <div className='font-semibold text-xs lg:text-base'>{designation}</div>

                {/* Duration and location */}
                <div className='flex justify-center items-center gap-1 text-[0.7rem]'>

                    {/* Duration */}
                    <div className='text-ellipsis text-nowrap overflow-hidden'>
                        {duration}
                    </div>

                    {/* Seperator */}
                    <div style={{display:duration===""||location===""?"none":"block"}} className=' h-[10px] w-[0.7px] bg-black' />

                    {/* Location */}
                    <div className=''>
                        {location}
                    </div>

                </div>
            </div>

            {/* Description */}
            <div className='mt-2 text-balance'>
                {description}
            </div>

        </div>
    )
}