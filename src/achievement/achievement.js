import Button from "../button/button";

export default function Achievement(props)
{
    return(
        <div style={{ backgroundColor:'#F6F7FF', borderLeft:'0.3rem solid #4451B1', paddingLeft: '2rem', marginTop:'1rem', display:'flex', justifyContent:'space-between', alignItems:'center'}}>
            <div>
                <div style={{ fontSize:'1.25rem', fontWeight:'600'}}>{props.title}</div>
                <div style={{ fontSize:'1.1rem'}}>{props.desc}</div>
            </div>
            
            <Button text='Certificate'/>
            
        </div>
        
    )
}

// npx create-react-app reactapp
