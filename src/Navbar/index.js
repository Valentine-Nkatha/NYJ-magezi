// Navbar.js
import "./index.css"
import { Link } from 'react-router-dom';
import magezi from "../Assets/Group 1 (1).png"

function Navbar() {
  return (
    <nav>
      <ul className="navbars">
        <div>
      <img src={magezi} alt="Magezi-logo" className="logos" />
      </div>
     
        <li><Link to="/"><b>Landing Page</b></Link></li>
        <li><Link to="/podcast">Podcast</Link></li>
        <li><Link to="/videos">Videos</Link></li>
        <li><Link to="/portfolio">Portfolio</Link></li>
        {/* <li><Link to="/files">Files</Link></li> */}
        <li><Link to="/blogs">Blogs</Link></li>
       
      </ul>
    </nav>
  );
}

export default Navbar;
