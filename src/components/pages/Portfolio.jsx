import OrangeBorders from "../reusables/OrangesBorders"
import PortfolioCSS from './styles/Portfolio.module.css'
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
// import { faEye } from "@fortawesome/free-solid-svg-icons"
// import { faGithub } from "@fortawesome/free-brands-svg-icons"
import EyeOfOphidiaGallery from "../reusables/EyeOfOphidiaGallery"

function Portfolio() {
  return (
    <div className={PortfolioCSS.parent} id='portfolio'>
        <h1 style={{textAlign: 'center'}}>{'<'} Portfolio {'/>'}</h1>
        <div className={PortfolioCSS.container}>
            <div>
                <h1 className={PortfolioCSS.header1}>
                    {/* {"<"}<FontAwesomeIcon icon={faEye} className={PortfolioCSS.icon}/>
                    Eye of Ophidia{" />"} */}
                </h1>
                <p className={PortfolioCSS.text}>
                    <a href="https://www.eyeofophidia.net" target="blank">Eyeofophidia.net</a> is a tool that catalogues all recorded matches for a hero based trading card game called Flesh and Blood TCG. Users can search for matches by player's names, event names, dates, and by hero matchup.
                </p>
                <p className={PortfolioCSS.text}>
                    All match and event data is catalogued on the site manually by either me or trusted community members given admin access to the site.
                </p>
                <p className={PortfolioCSS.text}>
                    This is a fullstack tool was built using the <span>M.E.R.N. stack</span> (Mongodb, Express, Node, React). It is currently deployed using Railway.
                </p>
                
                <p className={PortfolioCSS.linkContainer}>
                    <a href="https://www.eyeofophidia.net"
                        className={`${PortfolioCSS.githubLink} ${PortfolioCSS.text}`}
                        target="blank">
                        {/* <FontAwesomeIcon icon={faEye}  className={PortfolioCSS.githubIcon}/> */}
                        <div>Visit Live Site</div>
                    </a>
                    <a href="https://github.com/AlanChavarin/eye-of-ophidia" target="blank" className={PortfolioCSS.githubLink}>
                        {/* <FontAwesomeIcon icon={faGithub} className={PortfolioCSS.githubIcon}/> */}
                        <div>Visit Repository</div>
                    </a>
                </p>
                
            </div>
            <div>
                <h1 className={PortfolioCSS.header2}>
                    {/* {"<"}<FontAwesomeIcon icon={faEye} className={PortfolioCSS.icon}/>
                    Eye of Ophidia{" />"} */}
                </h1>
                <EyeOfOphidiaGallery />
            </div>
            
        </div>
        
        <OrangeBorders />
    </div>
  )
}
export default Portfolio