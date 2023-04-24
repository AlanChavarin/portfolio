import NavbarCSS from './styles/Navbar.module.css'
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import { faLinkedin, faGithub } from "@fortawesome/free-brands-svg-icons"

function Navbar({onScrollTo}) {


  return (
    <nav className={NavbarCSS.parent}>
      <button className={NavbarCSS.button} onClick={() => onScrollTo('home')}>
        Home
      </button>
      <button className={NavbarCSS.button} onClick={() => onScrollTo('techstack')}>
        Tech Stack
      </button>
      <button className={NavbarCSS.button} onClick={() => onScrollTo('portfolio')}>
        Portfolio
      </button>
      <button className={NavbarCSS.button} onClick={() => onScrollTo('contact')}>
        Contact
      </button>
      <div className={NavbarCSS.filler}></div>
      {/* <a href="https://www.google.com" target="blank">
        <FontAwesomeIcon icon={faLinkedin} className={NavbarCSS.icon}/>
      </a>
      <a href="https://github.com/AlanChavarin" target="blank">
        <FontAwesomeIcon icon={faGithub} className={NavbarCSS.icon}/>
      </a> */}
    </nav>
  )
}
export default Navbar