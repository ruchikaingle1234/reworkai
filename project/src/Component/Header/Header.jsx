import "./Header.css"
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";

import Button from "react-bootstrap/Button";
import "bootstrap/dist/css/bootstrap.min.css";
import Grid from "../Grid/Grid";


const Header=()=>
{
  
    return(
     
      
        <div>
            <div  className="container">
        <Navbar collapseOnSelect expand="lg">
          <Navbar.Brand href="#home">
            <img src="/images/logo.png" alt="Logo" className="logo" />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="ml-auto">
              <Nav.Link href="#features"><p className="n"> Talent Finder</p></Nav.Link>
              <Nav.Link href="#features"><p className="n1">For Recruiters</p></Nav.Link>
              <Nav.Link href="#pricing"><p className="n">For Employers</p></Nav.Link>
              <Nav.Link href="#about"><p className="n">About Us</p></Nav.Link>
              <Nav.Link href="#company"><p className="n">Company</p></Nav.Link>


             <div className="page1 d-flex">
              <div className="pbtn1">
              <Button   variant="outline-primary" className="logbutton"> 
                <p className="logtxt">Log In</p>
              </Button>
              </div>
              <div className="pbtn2">
              <button className="getbutton">
              <p className="gettxt">Get Started</p>
              </button>
              </div>
              </div>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
      </div>
      <div>
      <Grid/>
      
      </div>
        </div>
    )
}
export default Header;