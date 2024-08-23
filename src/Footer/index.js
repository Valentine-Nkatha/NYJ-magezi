import "./index.css";
// import boom from'../Footer/footericons/boomplay.png'
import facebook from "../Footer/footericons/facebook.png";
import logo from "../Footer/footericons/footerlogo.png";
import instagram from "../Footer/footericons/instagram.png";
import twitters from "../Footer/footericons/twitters.png";
import youtube from "../Footer/footericons/youtube.png";

function Footer() {
  return (
    <>
      <div>
        <div className="footer">
          <div>
            {" "}
            <img src={logo} alt="logo" className="logo" />
          </div>
          <div className="footer-section">
            <p className="footers">
              {" "}
              <b> About </b>
            </p>
            <p className="footer-section"> Company </p>
            <p className="footer-section"> News</p>
            <p className="footer-section"> Investors</p>
            <p className="footer-section"> Sustainability</p>
          </div>
          <div className="footer-section">
            <p className="footers">
              {" "}
              <b> Support</b>
            </p>
            <p className="footer-section">Contact Us </p>
            <p className="footer-section">Products </p>
            <p className="footer-section"> Returns</p>
            <p className="footer-section"> Downloads</p>
          </div>
          <div className="footer-section">
            <p className="footers">
              {" "}
              <b> Products</b>
            </p>
            <p className="footer-section"> Blogs</p>
            <p className="footer-section"> Videos</p>
            <p className="footer-section"> Portfolio</p>
            <p className="footer-section"> Podcasts</p>
          </div>
          <div className="icons">
            <span>
              {" "}
              <img src={twitters} alt="twitter " className="icons" />
            </span>
            <span>
              <img src={facebook} alt=" facebook" className="icons" />{" "}
            </span>
            <span>
              {" "}
              <img src={instagram} alt=" instagram" className="icons" />
            </span>
            <span>
              {" "}
              <img src={youtube} alt=" you tube" className="icons" />
            </span>
            {/* <span><img src={boom} alt=' boomplay'/> </span> */}
          </div>
           <div /> 

          <p className="update"> To get updates</p>
          <input placeholder="Enter Email" className="email" />
          <button> Subscribe </button>
          {/* <hr/> */}
          <p className="policy"> @ Magezi Geeks. Inc All Rights Reserved</p>
        </div>
      </div>
    </>
  );
}

export default Footer;
