import Frame2 from "../Frame2/Frame2";
import { ImageData } from "./ImageData";
import { Image } from "react-bootstrap";
import "./Logos.css"
const Logos=()=>
{
    return(
        <div className="con-a">

        <div>
            <div className="con-b">
        <p className="con-c">Hire for 1000+ Brands Including</p>
        </div>
        <div className="con-d">   
            {
            
            ImageData.map(each =>
           
            <Image  src={each.src} />
            
            )}
            </div>
            
        </div>
        <div>
        <Frame2/>
        </div>
       
        </div>
    )
}
export default Logos;