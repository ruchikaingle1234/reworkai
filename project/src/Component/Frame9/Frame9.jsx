import Frame10 from "../Frame10/Frame10";
import "./Frame9.css";
import { Frame9Data } from "./Frame9Data";
import { useState } from "react";
// import 'mdb-react-ui-kit/dist/css/mdb.min.css';
// import { MDBCollapse, MDBBtn } from 'mdb-react-ui-kit';
import 'bootstrap/dist/css/bootstrap.min.css';



const Frame9 = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleOpen = () => setIsOpen(!isOpen);

  
  const plusfun = () => {
    console.log("nii");
  };
  
  return (
    <div className="container-Frame9">
      <div className="container-tr1">
        <p className="cn">
          Frequently asked <span className="cn1">Questions</span>
        </p>
        <div className="container-tr2">
          <p className="container-tr3">
            We have Compiled the most commonly asked question about our Platform
            for your information and <br />
            to enhance your overall experience.
          </p>
        </div>
      </div>

      <div className="container-tr4">
        <div className="container-tr5">
          <div className="container-l1">
            <p className="container-l2">
              How can I Get started with Rework AI?{" "}
          </p>
          </div>
          
         
          {/* <MDBBtn tag='a' onClick={toggleOpen}>
        Link
      </MDBBtn>
      <MDBBtn onClick={toggleOpen}>Button</MDBBtn>
      <MDBCollapse open={isOpen}>
        Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. Nihil anim
        keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident.
      </MDBCollapse> */}
   

          {/* <div>
            <p className="v3">
              Lorem ipsum dolor sit amet consectetur. Porta velit ultricies
              feugiat tortor odio. Scelerisque habitant quam pharetra adipiscing
              id ipsum et lectus malesuada.
            </p>
          </div> */}
        </div>
        {Frame9Data.map((each) => (
          <div className="container-tr6 mt-3">
            <div className="container  d-flex ">
              <p className="container-l3">{each.parag}</p>
            </div>
            <div className="plus">
              <img src={each.s} alt="" onClick={() => plusfun()} />
            </div>
          </div>
        ))}
      </div>

      <Frame10 />
    </div>
  );
};
export default Frame9;
