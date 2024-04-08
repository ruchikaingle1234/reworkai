import "./Frame2.css"
import {CardData} from "./CardData";
import Card from 'react-bootstrap/Card';
import Frame3 from "../Frame3/Frame3";
const Frame2=(props)=>
{
   
   
    
    return(
        <div className="f2 ">
            <div className="container ">
                <div>
                <p className="para1">Our Amazing Benefits <span className="s1">Helpful For Your Hiring</span></p>
                </div>
              <div>
               <div className="container2 ">
                {
                CardData.map(each=>
                   <Card style={{ width: " 343.67px",
                    height: "236px",
                    border: "none"
                  
                     }}>
      <Card.Body>
        <Card.Title><img src={each.src}/></Card.Title>
        <Card.Subtitle className="mb-2 text-muted">{each.percentage}</Card.Subtitle>
        <Card.Subtitle className="mb-2 text-muted">{each.title}</Card.Subtitle>
        <Card.Text>
        {each.des}
        </Card.Text>
        
      </Card.Body>
    </Card>
)}
</div>
</div>
            

</div>
<Frame3/>
        </div>
    )
}
export default Frame2;