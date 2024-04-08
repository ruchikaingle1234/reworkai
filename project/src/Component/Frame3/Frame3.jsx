import "./Frame3.css"
import { CardFrame } from "./CardFrame";
import Card from 'react-bootstrap/Card';
import Frame4 from "../Frame4/Frame4";
const Frame3=()=>
{ 
    // if (!src) return null;
    return(
        <div>
            <div className=" cont1">
                <div className="container-text  ">
                <p className="pr1">How Our System <span className="span1">Operates</span></p>
                </div>

                <div   className="cardcontainer ">
                {
                CardFrame.map(each=>
                    
                   <Card style={{ width: " 399.33px",
                    height: "282px",
                    border: "none",
                    borderRadius:"none",
                    padding: "30px 30px 60px 30px",
                  
                     backgroundColor: each.color 
                  
                     }}>
      <Card.Body >
      
        
        
        <Card.Subtitle className="ct">{each.title} 
        
     
        <img  className="k1" src={each.a1} alt="" width="84px" height="84px"/>
        
        
        </Card.Subtitle>
        <div className="cont2">
        <Card.Text className="t1">
        {each.desc}
        </Card.Text>
      
        <img className="k2" src={each.f3} alt=""/>
        </div>
        
      </Card.Body>
    </Card>
)}
   

                </div>

            </div>
                     <Frame4/>
        </div>
    )
}
export default Frame3;