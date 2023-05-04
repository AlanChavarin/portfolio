//layout
import Navbar from "./components/layout/Navbar"

//pages
import Home from "./components/pages/Home"
import About from "./components/pages/About"
import TechStack from "./components/pages/TechStack"
import Portfolio from "./components/pages/Portfolio"
import Contact from "./components/pages/Contact"
import EyeOfOphidiaGallery from "./components/reusables/EyeOfOphidiaGallery"

//react
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom'


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
                  <Home/>
                  <About/>
                  <TechStack/>
                  <Portfolio/>
                  <Contact />
                </div></>
              }/>
              <Route path='/gallery' element={<EyeOfOphidiaGallery page={true} />}/>
            </Routes>
      </div>
    </Router>
  );
}

export default App;
