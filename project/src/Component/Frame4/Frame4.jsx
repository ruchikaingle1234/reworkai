import "./Frame4.css"

import Card from 'react-bootstrap/Card';
import { Frame4Data } from "./Frame4Data";
import { Button } from "bootstrap";
import Frame5 from "../Frame5/Frame5";
const Frame4=()=>
{
    return(
        <div className="clss1">
        <div className="text2">
        <p className="parm1">Choose Your Simple, <span className="sp1">Transparent Pricing</span></p>
        </div>

        <div className="clss2">
        {
                Frame4Data.map(each=>
                   <Card style={{ width: " 366px",
                    height: "756px",
                    border: "none",
                    borderRadius:"10px",
                  
                     backgroundColor: each.color, 
                     color:each.text,
                    
                    //  color:each.m
                  
                     }}>
      <Card.Body >
      
        
        <div className="container text-center">
          <div className="m1"> 
        <p>{each.month} <p className=" text-light">{each.m}</p></p>
        

        
        </div> 
        <p style={{marginTop:"30px",fontFamily:"Garnett Medium",fontSize:"40px",fontWeight:"500px"}}>{each.rupees}</p>
        <p style={{marginTop:"20px",fontFamily:"Garnett Medium",fontSize:"28px",fontWeight:"400",color:"#5C27C0"}}>{each.descr1}<span style={{color:"white"}}>{each.descr3}</span></p>
        <p style={{gap:"1px",fontFamily:"Garnett Medium",fontSize:"28px",fontWeight:"400",color:"#5C27C0"}}>{each.descr2}<span style={{color:"white"}}>{each.descr4}</span></p>
        </div>
        <p style={{gap:"10px",fontFamily:"Poppins",fontSize:"20px",fontWeight:"400"}}><img src={each.src1}/>{each.p1}</p>
        <p style={{gap:"10px",fontFamily:"Poppins",fontSize:"20px",fontWeight:"400"}}><img src={each.src1}/>{each.p2}<span style={{color:"white"}}>{each.p9}</span></p>
        <p style={{gap:"10px",fontFamily:"Poppins",fontSize:"20px",fontWeight:"400"}}><img src={each.src1}/>{each.p3}</p>
        <p style={{marginLeft:"30px",fontFamily:"Poppins",fontSize:"20px",fontWeight:"400"}}>{each.p7}</p>
        <p style={{gap:"10px",fontFamily:"Poppins",fontSize:"20px",fontWeight:"400"}}><img src={each.src2}/>{each.p4}</p>
        <p style={{gap:"10px",fontFamily:"Poppins",fontSize:"20px",fontWeight:"400"}}><img src={each.src2}/>{each.p5}</p>
        <p style={{gap:"10px",fontFamily:"Poppins",fontSize:"20px",fontWeight:"400"}}><img src={each.src2}/>{each.p6}</p>
        
        <div className="btnstart">
        <button className="btnst">{each.b7}</button>
        </div>
        
        
        
      </Card.Body>
    </Card>
)}
   
        </div>
        <div className="containerbtn">
        <button  className="btn9">Book a Demo</button>
        </div>
        <Frame5/>
        </div>

    )
}
export default Frame4;