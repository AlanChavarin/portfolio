import HomeCSS from './styles/Home.module.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowDown, faLink } from '@fortawesome/free-solid-svg-icons'

function Home({onScrollTo}) {
  return (
    <div className={HomeCSS.parent} id='home'>
      <h1 className={HomeCSS.hello}>
        <b>Hello!</b> I'm <br className={HomeCSS.nameBreak}/>
        <b className={HomeCSS.highlight}> Alan Chavarin</b>
      </h1>
      <p className={HomeCSS.p}>
        <b className={HomeCSS.highlight}>Full stack</b> web developer based out of San Diego, California.
      </p>
      <p className={HomeCSS.p2}>
        I build websites and applications for your business. 
      </p>
      <div className={HomeCSS.logoContainer}>
        {/* <img src="HTML5.png" alt="HTML 5" width='70'/>
        <img src="css.png" alt="CSS" width='80' />
        <img src="JavaScript.png" alt="JavaScript" width='50' /> */}
        <img src="figma.jpg" alt="Figma" width='70' className={HomeCSS.logo}/>
        <img src="Typescript_logo_2020.svg.png" alt="TypeScript" width='70' className={HomeCSS.logo}/>
        <img src="next-js.svg" alt="NextJS, a React meta-framework" width='70' className={HomeCSS.logo}/>
        <img src="react.png" alt="React, a Javascript Library" width='70' className={HomeCSS.logo}/>
        <img src="nodejs.png" alt="NodeJS, a Javascript runtime" width='70' className={HomeCSS.logo}/>
        <img src="express.png" alt="NodeJS Framework" width='70' className={HomeCSS.logo}/>
        <img src="mongodb.png" alt="MongoDB, database software" width='75' className={HomeCSS.logo}/>
        <img src="Postgresql_elephant.svg.png" alt="Posgresql, database software" width='75' className={HomeCSS.logo}/>
      </div>
      <button className={`${HomeCSS.button} boxShadow`} onClick={() => onScrollTo('portfolio')}>
        See my work <FontAwesomeIcon icon={faArrowDown} className={HomeCSS.arrowDownIcon} />
      </button>
      <a href="/resume" target="_blank" className={HomeCSS.resumeLink}>
        View Resume <FontAwesomeIcon icon={faLink} className={HomeCSS.linkIcon}/>
      </a>
    </div>
  )
}
export default Home