import Frame7 from "../Frame7/Frame7";
import "./Frame6.css"
import { Frame6Data } from "./Frame6Data";
import Card from 'react-bootstrap/Card';

const Frame6=()=>
{
    return(
        <div className="container-Fra">
            <div className="container-t">
                <p className="con-p">Customer <span className="con-span">Testimonials</span></p>
                <p className="con-p1">What others has say About Us</p>
                </div>

                <div className="container-card">
                    <div className="container-c ">
                {
                Frame6Data.map(each=>
                    
                   <Card style={{ //width: " 383.33px",
                    //height: "381px",
                    border: "none",
                  
                    padding:"20px",
                    gap:"30px",
                    
                  
                    //  backgroundColor: each.color, 
                    //  color:each.text,
                    maxHeight:each.h
                    
                  
                     }}>
                       
      <Card.Body  style={{background: "#EFE5FF",borderRadius:"16px",  boxShadow: "0px 4px 24px 0px #00000026"}}>
      <div style={{width: "343.33px",height: "189px"}}>
 <p className="pa1">{each.des1}</p>
</div>
    <div style={{width: "343.33px",
height: "52px",
gap: "19px"

}}>
    
    <p className="pa2"><img className="imagei" src={each.src1}/>{each.des2}<br/></p>
    <div style={{width: "174px",
height: "20px",
gap: "0px",
marginLeft:"20px",
position:"relative",bottom:"37px",left:"40px"

}}><p  className="p3">{each.par}</p></div>
     
        
</div>
     
        
        
        
        
      </Card.Body>
      
    </Card>
    
)}
</div>
                </div>
         <Frame7/>
        </div>
    )
}
export default Frame6;