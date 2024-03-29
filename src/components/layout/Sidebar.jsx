//css
import SidebarCSS from './styles/Sidebar.module.css'

//font awesome
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faX } from '@fortawesome/free-solid-svg-icons'
import { faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons'
import { faLink } from '@fortawesome/free-solid-svg-icons'


function Sidebar({setSidebar, onScrollTo}) {
    
    const handleScroll = (to) => {
        setSidebar(false)
        onScrollTo(to)
    }

    const navigateToResumePage = () => {
        const newTab = window.open('/resume', '_blank')
        if (newTab) {
            newTab.focus()
        }
    }

  return (
    <div className={SidebarCSS.parent}>
        <div className={SidebarCSS.sidebar}>
            <button className={SidebarCSS.xButton} onClick={() => setSidebar(false)}>
                <FontAwesomeIcon icon={faX}/>
            </button>
            <button className={SidebarCSS.item} onClick={() => handleScroll('home')}>
                Home
            </button>
            <button className={SidebarCSS.item} onClick={() => handleScroll('techstack')}>
                Tech Stack
            </button>
            <button className={SidebarCSS.item} onClick={() => handleScroll('portfolio')}>
                Portfolio
            </button>
            <button className={SidebarCSS.item} onClick={() => handleScroll('about')}>
                About
            </button>
            <button className={SidebarCSS.item} onClick={() => handleScroll('contact')}>
                Contact
            </button>
            <button className={SidebarCSS.item} onClick={() => navigateToResumePage()}>
                Resume <FontAwesomeIcon icon={faLink} className={SidebarCSS.linkIcon}/>
            </button>


            <a href="https://www.google.com" target="blank" className={SidebarCSS.link}>
                <FontAwesomeIcon icon={faLinkedin} className={SidebarCSS.icon}/>
                <div className={SidebarCSS.linkText}>Linkedin</div>
            </a>

            <a href="https://github.com/AlanChavarin" target="blank" className={SidebarCSS.link}>
                <FontAwesomeIcon icon={faGithub} className={SidebarCSS.icon}/>
                <div className={SidebarCSS.linkText}>Github</div>
            </a>

        </div>
    </div>
  )
}
export default Sidebar