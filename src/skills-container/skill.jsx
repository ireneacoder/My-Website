
import './skill.css'
export default function Container({text, percentage=10})
{
    return(
        <span className="box">

            <div className=' progressBar items-center gap-3'>
                
                <div>{percentage}%</div>

                <div className='bg-[rgba(217,217,217,1)] w-[10rem] h-[4px] rounded-full'>
                    <div style={{width: String(percentage)+'%'}} className={`bg-[rgba(134,148,251,1)] h-[4px]`}  />
                </div>

            </div>

            <div className='text'>
                {text}
            </div>
        </span>
    )
}