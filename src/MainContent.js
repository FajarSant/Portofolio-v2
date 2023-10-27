import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navigasi from './Home/Navigasi';
import Home from './Home/Home';
import Biodata from './Home/Biodata';
import Portofolio from './Home/Portofolio';
import Footer from './Home/Footer';
import Skills from './Home/Skils';

function MainContent() {
    return (
      <Router>
        <div>
          <Navigasi/>
          <div className="container mx-auto p-4 ">
              <div className=' items-center p-5 mt-9 mb-5'>
            <Routes>
              <Route path="/" element= {<Home/>} />
              <Route path="/Biodata" element= {<Biodata/>} />
              <Route path="/Portofolio" element= {<Portofolio/>} />
              <Route path="/Skills" element= {<Skills/>} />
            </Routes>
              </div>
          </div>
          <Footer/>
        </div>
      </Router>
    );
  }

  export default MainContent
  