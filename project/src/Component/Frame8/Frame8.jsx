

import { Card } from "react-bootstrap"
import "./Frame8.css"
import { Frame8Data } from "./Fram8Data";
import Frame9 from "../Frame9/Frame9";
// import { Frame8Data } from "./FrameData7";

const Frame8=()=>
{
    return(
        
        <div className="container-Frame8">
            
                
          
                <div className="container-text5">
                 <p className="con-pg1"><b>Success </b><span className="con-span2"> Stories</span> </p>
                </div>
                                        <div className="container">
                <div className="container-fr ">
                {Frame8Data.map((each) => (
            <Card
              style={{
                width: " 384px",
                height: "514px",
                border:"none",
                background:  "#FAFAFA",
                
                borderRadius:"16px",
                gap: "16px",

               
              }}
            >
              <Card.Body >
                <div style={{ width: "384px", height: "245px",borderRadius:"16px" }}>
                    <img style={{ width: "330px", height: "245px",borderRadius:"16px" }}src={each.src4} alt=" "/>
                    </div>
                    <div className="main-txt bg-white">
                    <div className="container-main-txt1 ">
                    <p className="dt1">{each.ds1}</p> 
                    </div>
                 
                
                <div style={{ width: "344px", height: "108px"}}>
                  <p className="dt2">
                    
                    {each.ds2}
                  </p>
                  </div>
                  </div>
                 
              </Card.Body> 

            </Card>
          ))}
          </div>


                </div>
                

                <Frame9/>
                </div>
           
    )
}
export default Frame8;

