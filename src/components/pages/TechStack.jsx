import TechStackCSS from './styles/TechStack.module.css'

function TechStack() {
  return (
    <div className={TechStackCSS.wrapper}>
        <section className={`${TechStackCSS.parent} boxShadow translateY`}>
            <div id='techstack' className={TechStackCSS.stack}>
                <div>
                    <h2 className={TechStackCSS.h2}>{'< '}Frontend Tech Stack{' />'}</h2>
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
                        <img src="next-js.svg" alt="" className={TechStackCSS.img}/>
                        <div className={TechStackCSS.nameDesc}>
                            <div>NextJS</div>
                            <div>React Meta Framework</div>
                        </div>
                    </div>

                    <div>
                        <img src="Typescript_logo_2020.svg.png" alt="" className={TechStackCSS.img}/>
                        <div className={TechStackCSS.nameDesc}>
                            <div>Typescript</div>
                            <div>Front End Language</div>
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
            <div className={TechStackCSS.stack}>
                <div>
                    <h2 className={TechStackCSS.h2}>{'< '}Backend Tech Stack{' />'}</h2>
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
                    <div>
                        <img src="Postgresql_elephant.svg.png" alt="" className={TechStackCSS.img}/>
                        <div className={TechStackCSS.nameDesc}>
                            <div>Postgresql</div>
                            <div>Document-oriented database</div>
                        </div>
                    </div>
                </div>
            </div>
            {/* <div className={TechStackCSS.stack}>
                <div>
                    <h2 className={TechStackCSS.h2}>{'< '}Testing{' />'}</h2>
                </div>
                <div className={TechStackCSS.stackContainer}>
                    <div>
                        <img src="cypress.webp" alt="" className={TechStackCSS.img}/>
                        <div className={TechStackCSS.nameDesc}>
                            <div>Cypress</div>
                            <div>End-to-end testing software</div>
                        </div>
                    </div>

                    <div>
                        <img src="jest.png" alt="" className={TechStackCSS.img}/>
                        <div className={TechStackCSS.nameDesc}>
                            <div>Jest</div>
                            <div>Javascript testing library</div>
                        </div>
                    </div>
                </div>
            </div> */}
        </section>
    </div>
    
  )
}
export default TechStack