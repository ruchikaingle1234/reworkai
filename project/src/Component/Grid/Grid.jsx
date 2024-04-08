
import Logos from "../Logos/Logos";
import "./Grid.css";
import Button from "react-bootstrap/Button";
const Grid = () => {
  return (
    <div classname="con ">
    <div className="row">
    <div class="column1">

<div className="layout ">
        <p className="p1">
          Power Up Your <span className="span1">Hiring</span>{" "}
          <div>
            <span className="span2"> with Rework .</span>
          </div>{" "}
        </p>

        <p className="p2">
          Empower your business with cutting-edge A.I. technology, simplified
          processes, and top-tier
           talent connections. Rework is your strategic partner in
          redefining how you hire.{" "}
        </p>
        <div className="container2">
          <Button className="book-button">Book A Demo</Button>
        </div>

        <div className="image-container mt-5 ">
          <img src="/images/Group.png" alt="" />
          <p className="credit">No credit Required</p>
          <div>
            <img src="/images/Group.png" alt="" />
            <p className="rec">Streamlined Recruitment Process</p>
          </div>
        </div>
        </div>

    </div>


  <div class="column2">

<div className="imglayout  ">
            <img className="img1" src="/images/image1.png" alt="" />
            <div className="img10k">
              <img
                className="i1"
                style={{ width: "70%" }}
                src="/images/group10k.png"
              />
            </div>
            <div className="img360">
              <img
                className="i1"
                style={{ width: "70%" }}
                src="/images/Group 360.png"
              />
              
            </div>
            </div>

  </div>
  </div>
  <Logos/>
    </div>
  );
};
export default Grid;
