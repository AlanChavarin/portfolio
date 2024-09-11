import PortfolioCSS from './styles/Portfolio.module.css'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faEye } from "@fortawesome/free-solid-svg-icons"
import { faGithub } from "@fortawesome/free-brands-svg-icons"
import EyeOfOphidiaGallery from "../reusables/EyeOfOphidiaGallery"
import { eyeofophidiaImageArray, eyeofophidiaImageDescriptionArray, savagefeatsImageArray, savagefeatsImageDescriptionArray } from "../reusables/imageArrays"

function Portfolio() {

  return (
    <div className={PortfolioCSS.wrapper} id='portfolio'>
        <section className={`${PortfolioCSS.parent} boxShadow translateY`} style={{gap:"64px"}}>
            <h1 style={{textAlign: 'center'}} className={PortfolioCSS}>{'<'} Portfolio {'/>'}</h1>
            <div className={PortfolioCSS.container}>
                <div>
                    <div className={PortfolioCSS.header1}>
                        <img src="savagefeats.png" alt="Savage Feats" className={PortfolioCSS.img}/>
                        Savage Feats - Freelance Work
                    </div>
                    <p className={PortfolioCSS.text}>
                        <a href="https://www.savagefeats.com" target="blank" className={PortfolioCSS.a}>Savage Feats</a > is a video production company that creates high quality live stream content for trading card games.
                    </p>
                    <p className={PortfolioCSS.text}>
                        I had the responsibility of creating a website that showcased the company's work, advertised their video production services and allowed them to easily update their portfolio.
                    </p>
                    <p className={PortfolioCSS.text}>
                        My passion project, <a href="https://www.eyeofophidia.net" target="blank" className={PortfolioCSS.a}>eyeofophidia.net</a>, fully became apart of Savage Feats offerings, and it was my responsibility to do a complete overhaul of the tool.
                    </p>
                    <p className={PortfolioCSS.text}>
                        <a href="https://savagefeats.com" target="blank" className={PortfolioCSS.a}>Savage Feats</a> has aquired an additional 2.6k unique users/visitors since the upgrade from the original site. 
                    </p>
                    <p className={PortfolioCSS.text}>
                        This is a fullstack website built using Nextjs, Tailwind, Typescript, Node.js, Express.js, MongoDB, and is deployed using Railway.
                    </p>
                    
                    <p className={PortfolioCSS.linkContainer}>
                        <a href="https://www.savagefeats.com"
                            className={`${PortfolioCSS.githubLink} boxShadowSmall`}
                            target="blank">
                            <FontAwesomeIcon icon={faEye}  className={PortfolioCSS.githubIcon}/>
                            <div className={PortfolioCSS.linkText}>Visit Live Site</div>
                        </a>
                    </p>
                    
                </div>
                <div>
                    <div className={PortfolioCSS.header2}>
                        <FontAwesomeIcon icon={faEye} className={PortfolioCSS.icon}/>
                        Eye of Ophidia
                    </div>
                    <EyeOfOphidiaGallery imageArray={savagefeatsImageArray} imageDescriptionArray={savagefeatsImageDescriptionArray} galleryName="gallerysavagefeats" />
                </div>
                
            </div>
            <div className={PortfolioCSS.container}>
                <div>
                    <div className={PortfolioCSS.header1}>
                        <FontAwesomeIcon icon={faEye} className={PortfolioCSS.icon}/>
                        Eye of Ophidia (Old 1.0 version)
                    </div>
                    <p className={PortfolioCSS.text}>
                        <a href="https://www.eyeofophidia.net" target="blank" className={PortfolioCSS.a}>Eyeofophidia.net</a> is a tool that catalogues all recorded matches for a hero based trading card game called Flesh and Blood TCG. Users can search for matches by player's names, event names, dates, and by hero matchup.
                    </p>
                    <p className={PortfolioCSS.text}>
                        All match and event data is catalogued on the site manually by either me or trusted community members given admin access to the site.
                    </p>
                    <p className={PortfolioCSS.text}>
                        This is a fullstack tool was built using the <span>M.E.R.N. stack</span> (Mongodb, Express, Node, React). It is currently deployed using Railway.
                    </p>
                    <p className={PortfolioCSS.text}>
                        <a href="https://www.eyeofophidia.net" target="blank" className={PortfolioCSS.a}>Eyeofophidia.net</a> has had over 4100 unique visitors from over 59 different countries around the world. Players of the card game have found the site tremendously useful especially right after large tournaments.
                    </p>

                    <p className={PortfolioCSS.text}>
                        As of July 2024, this project has become under the wing of the game's best video production company, Savage Feats.
                    </p>
                    
                    <p className={PortfolioCSS.linkContainer}>
                        <a href="https://www.eyeofophidia.net"
                            className={`${PortfolioCSS.githubLink} boxShadowSmall`}
                            target="blank">
                            <FontAwesomeIcon icon={faEye}  className={PortfolioCSS.githubIcon}/>
                            <div className={PortfolioCSS.linkText}>Visit Live Site</div>
                        </a>
                        <a href="https://github.com/AlanChavarin/eye-of-ophidia" target="blank" className={`${PortfolioCSS.githubLink} boxShadowSmall`}>
                            <FontAwesomeIcon icon={faGithub} className={PortfolioCSS.githubIcon}/>
                            <div className={PortfolioCSS.linkText}>Visit Repository</div>
                        </a>
                    </p>
                    
                </div>
                <div>
                    <div className={PortfolioCSS.header2}>
                        <FontAwesomeIcon icon={faEye} className={PortfolioCSS.icon}/>
                        Eye of Ophidia
                    </div>
                    <EyeOfOphidiaGallery imageArray={eyeofophidiaImageArray} imageDescriptionArray={eyeofophidiaImageDescriptionArray} galleryName="gallery" />
                </div>
                
            </div>
        
        </section>
    </div>
  )
}
export default Portfolio