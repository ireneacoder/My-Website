

export default function Education(props)
{
    return(
        <div style={{paddingTop:'2rem', paddingBottom:'2rem', lineHeight:'1.825rem', width:'38rem'}}>
            <div style={{fontSize:'1.3rem', fontWeight:'500'}}>{props.institute}</div>
            <div style={{fontSize:'1.13rem'}}>{props.degree}</div>
            <div style={{fontSize:'1.13rem'}}> {props.board}</div>
            <div style={{fontSize:'1.13rem'}}>{props.gpa}</div>
            <div style={{fontSize:'1.13rem'}}>{props.year}</div>
        </div>
        

    )
}