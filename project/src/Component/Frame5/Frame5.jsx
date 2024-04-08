import Frame6 from "../Frame6/Frame6";
import "./Frame5.css";
const Frame5 = () => {
  return (
    <div className="container-15">
      <div className="container">
        <div className="row1">
          <div className="col1">
            
            <div className="container-txt">
              <p className="txt1">
                Discover the Future of{" "}
                <span className="sp1">
                  Talent
                  <br /> Assessment!
                </span>
              </p>
            </div>
            <div className="conta">
            <p className="container-para">Facing challenges in traditional hiring?<br/>
Uncover the costs, pitfalls, and the game-changing role of Generative AI in<br/> recruitment.</p>
            </div>
            <div className="conta2">
                <p className="text3">🔍 Inside this Whitepaper:
                <ul className="list1">
<li>Manual vs. Machine-based hiring:Costs & Challenges.</li>

<li>The truth about "Interview as a Service."</li>
<li>Generative AI: The simple explanation. Optimize Your Hiring Process Today!</li>
</ul> 
</p>

            <div className="container-btn">
            <button type="button" className="btn2">Download Now for Smarter Recruitment</button>
            </div>
            </div>
          </div>

          <div className="col2">
          <img style={{marginTop:"5px" ,width:"387px",height:"500px"}} src="./images/Rectangle.png" alt=""/>
          </div>
        </div>
      </div>
      <Frame6/>
    </div>
  );
};
export default Frame5;
