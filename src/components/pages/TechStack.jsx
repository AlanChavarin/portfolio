import OrangeBorders from "../reusables/OrangesBorders"
import TechStackCSS from './styles/TechStack.module.css'

function TechStack() {
  return (
    <section className={TechStackCSS.parent}>
        <div id='techstack'>
            <div>
                <h1 className={TechStackCSS.h1}>{'< '}Frontend Tech Stack{' />'}</h1>
            </div>
            <div className={TechStackCSS.stackContainer}>
                <div>
                    <img src="react.png" alt="" className={TechStackCSS.img}/>
                    <div className={TechStackCSS.nameDesc}>
                        <div>React</div>
                        <div>Javascript Framework</div>
                    </div>
                </div>

                <div>
                    <img src="JavaScript.png" alt="" className={TechStackCSS.img}/>
                    <div className={TechStackCSS.nameDesc}>
                        <div>Javascript</div>
                        <div>Front End Language</div>
                    </div>
                </div>

                <div>
                    <img src="css.png" alt="" className={TechStackCSS.img}/>
                    <div className={TechStackCSS.nameDesc}>
                        <div>CSS</div>
                        <div>Styling Language</div>
                    </div>
                </div>

                <div>
                    <img src="HTML5.png" alt="" className={TechStackCSS.img}/>
                    <div className={TechStackCSS.nameDesc}>
                        <div>HTML</div>
                        <div>Hypertext Markup Language</div>
                    </div>
                </div>
            </div>
        </div>
        <div>
            <div>
                <h1 className={TechStackCSS.h1}>{'< '}Backend Tech Stack{' />'}</h1>
            </div>
            <div className={TechStackCSS.stackContainer}>
                <div>
                    <img src="nodejs.png" alt="" className={TechStackCSS.img}/>
                    <div className={TechStackCSS.nameDesc}>
                        <div>Node JS</div>
                        <div>Backend Javascript runtime</div>
                    </div>
                </div>

                <div>
                    <img src="express.png" alt="" className={TechStackCSS.img}/>
                    <div className={TechStackCSS.nameDesc}>
                        <div>Express JS</div>
                        <div>NodeJS framework</div>
                    </div>
                </div>

                <div>
                    <img src="mongodb.png" alt="" className={TechStackCSS.img}/>
                    <div className={TechStackCSS.nameDesc}>
                        <div>MongoDB</div>
                        <div>Document-oriented database</div>
                    </div>
                </div>
            </div>
        </div>
        
        <OrangeBorders />
    </section>
  )
}
export default TechStack