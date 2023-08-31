//css
import NavbarCSS from './styles/Navbar.module.css'

//font awesome
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLinkedin, faGithub } from "@fortawesome/free-brands-svg-icons"
import { faBars } from '@fortawesome/free-solid-svg-icons'

//assets
import Sidebar from './Sidebar'

//react
import { useState, useRef } from 'react'

//gsap
import { gsap } from 'gsap'

function Navbar({onScrollTo}) {
  const nav = useRef()
  let lastScroll = 0
  let lastScrollDirection = 'down'

  const handleScrollEvent = () => {
    const scrolled = window.pageYOffset

    if(scrolled < lastScroll && lastScrollDirection==='down'){
      gsap.to(nav.current, {duration: .5, y: '0%'})
      lastScrollDirection='up'
    } 
    else if(lastScroll < scrolled && lastScrollDirection==='up') {
      gsap.to(nav.current, {duration: .5, y: '-100%'})
      lastScrollDirection='down'
    }
    
    lastScroll = scrolled
  }
  
  window.addEventListener('scroll', handleScrollEvent)

  const [sidebar, setSidebar] = useState(false)


  return (
    <>
      <nav className={NavbarCSS.parent} ref={nav}>
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
        <a href="https://www.linkedin.com/in/alan-chavarin-5bb910248/" target="blank">
          <FontAwesomeIcon icon={faLinkedin} className={NavbarCSS.icon}/>
        </a>
        <a href="https://github.com/AlanChavarin" target="blank">
          <FontAwesomeIcon icon={faGithub} className={NavbarCSS.icon}/>
        </a>
        <button className={NavbarCSS.bars} onClick={() => setSidebar(!sidebar)}>
          <FontAwesomeIcon icon={faBars}/>
        </button>

      </nav>
      {sidebar && <Sidebar setSidebar={setSidebar} onScrollTo={onScrollTo}/>}
    </>
  )
}
export default Navbar