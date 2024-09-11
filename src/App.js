//layout
import Navbar from "./components/layout/Navbar"

//pages
import Home from "./components/pages/Home"
import About from "./components/pages/About"
import TechStack from "./components/pages/TechStack"
import Portfolio from "./components/pages/Portfolio"
import Contact from "./components/pages/Contact"
import EyeOfOphidiaGallery from "./components/reusables/EyeOfOphidiaGallery"
import Resume from "./components/pages/Resume"

//react
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom'

//image arrays
import { eyeofophidiaImageArray, eyeofophidiaImageDescriptionArray, savagefeatsImageArray, savagefeatsImageDescriptionArray } from "./components/reusables/imageArrays"


function App() {

  const onScrollTo = (element) => { 
    document.getElementById(element).scrollIntoView({behavior: "smooth", block: 'center'})
  }

  return (
    <Router >
      <div className="App">
        <Routes>
          <Route path='/' element={<>
          <Navbar onScrollTo={onScrollTo}/>
            <div className="PageContainer">
              <Home onScrollTo={onScrollTo}/>
              {/* <About/> */}
              <Portfolio/>
              <TechStack/>
              <Contact />
            </div></>
          }/>
          <Route path='/gallery' element={<EyeOfOphidiaGallery page={true} imageArray={eyeofophidiaImageArray} imageDescriptionArray={eyeofophidiaImageDescriptionArray} galleryName="gallery" />}/>
          <Route path='/gallerySavageFeats' element={<EyeOfOphidiaGallery page={true} imageArray={savagefeatsImageArray} imageDescriptionArray={savagefeatsImageDescriptionArray} galleryName="gallerysavagefeats" />}/>
          <Route path='/resume' element={<Resume />}/>
        </Routes>
      </div>
    </Router>
  );
}

export default App;
