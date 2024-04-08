

import { Card } from "react-bootstrap"
import "./Frame7.css"
import { Frame7Data } from "./FrameData7";
import Frame8 from "../Frame8/Frame8";

const Frame7=()=>
{
    return(
        
        <div className="conatainer-Frame7">
            <div className="container-5">
                <div className="container">
            <div className="r1">
                <div className="c1">
                <div className="container-tx1">
                 <p className="con-pg"><b>How Rework AI has been a good</b><span className="con-span1"> Hiring platform for Companies</span> </p>
                </div>
                </div>

                <div className="c2">
                <div className="container-cont">
                {Frame7Data.map((each) => (
            <Card
              style={{
                width: " 241.33px",
                height: "182px",
                border:"none",
                background: "#F6F6F6",
                marginLeft:"10px",
                
                borderRight:each.border1,
               
                gap: "10px",

               
              }}
            >
              <Card.Body style={{textAlign:"center"}}>
                <div style={{ width: "101px", height: "64px" }}>
                 <p className="sa1">{each.per}</p> 
                
                <div style={{ width: "241.33px", height: "108px", gap: "0px" }}>
                  <p className="s2">
                    
                    {each.ds1}
                  </p>
                  </div>
                  </div>
              </Card.Body> 

            </Card>
          ))}

                </div>
                </div>

            </div>
            </div>
            </div>
            <Frame8/>
            </div>
    )
}
export default Frame7;