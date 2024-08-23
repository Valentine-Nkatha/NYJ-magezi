// Navbar.js
import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <nav>
      <ul>
        <li><Link to="/">Landing Page</Link></li>
        <li><Link to="/podcast">Podcast</Link></li>
        <li><Link to="/videos">Videos</Link></li>
        <li><Link to="/portfolio">Portfolio</Link></li>
        <li><Link to="/files">Files</Link></li>
        <li><Link to="/blogs">Blogs</Link></li>
      </ul>
    </nav>
  );
}

export default Navbar;
