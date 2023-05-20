
import img1 from './img1.png'
import img2 from './img2.png'
import img3 from './img3.png'
import { CCarousel, CCarouselItem, CImage } from '@coreui/react';

export default function Carousel()
{
    return(
        <div>

            {/* <div style={{display:"flex", justifyContent:"space- evenly", alignItems:"center"}}> */}
                    <div style={{width:"100%", height:"70%"}}>
                        <CCarousel controls indicators style={{width: '100%'}}>
                       
                            
                            <CCarouselItem>
                                
                                    <div style={{ width:'100%', height:'100%', display:'flex', justifyContent:'space-around'}} >
                                       <div> <img height='450px' src="./img1.png" alt="image 1" /></div> 
                                        <div> <img height= '450px' src="./img2.png" alt="image 2" /> </div>
                                        <div> <img height= '450px' src="./img3.png" alt="image 3" /></div>
                                    </div>
                                   
                            </CCarouselItem>
                         
                            {/* <CCarouselItem>
                                <CImage className="d-block w-100" src={img2} alt="slide 2" />
                            </CCarouselItem> */}
                        
                            <CCarouselItem>
                            <CImage className="d-block w-100" src={img3}  alt="slide 3" />
                            </CCarouselItem>
                        </CCarousel>
                        
                    </div>
            {/* </div> */}

        </div>
            
    )
}