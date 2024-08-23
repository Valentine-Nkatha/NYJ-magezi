// App.js
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './Navbar';
import Footer from './Footer';
import LandingPage from './LandingPage';
import Podcast from './Podcast';
import Videos from './Videos';
import Portfolio from './Portfolio';
import Files from './Files';
import Blogs from './Blogs';

function App() {
  return (
    <Router>
      <div>
        <Navbar/>
        
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/podcast" element={<Podcast />} />
          <Route path="/videos" element={<Videos />} />
          <Route path="/files" element={<Files />} />
          <Route path="/blogs" element={<Blogs />} />
          <Route path="/portfolio" element={<Portfolio />} />

        
        </Routes>
        
        <Podcast/>
        <Blogs/>
        <Videos/>
        <Portfolio/>
        <Footer/>
      </div>
    </Router>
  );
}

export default App;
