function resumeHTML() {
  return (
    <div>
    <div class="header">
        <div>
            <div class="name">Alan Chavarin</div>
            <div class="title"><em>Full-stack Web Developer</em></div>
        </div>
        <div class="contact">
            <div>
                <i class="fa-solid fa-location-dot"></i>
                San Diego, CA
            </div>
            <div>
                <i class="fa-solid fa-phone"></i>
                <a class="detailsText" href="tel:619-748-0638">619-748-0638</a>
            </div>

            <div>
                <i class="fa-solid fa-envelope"></i>
                <a class="detailsText" href="mailto: alanchavarin4@hotmail.com">alanchavarin4@hotmail.com</a>
            </div>

            <div>
                <i class="fa-brands fa-linkedin"></i>
                <a class="detailsText" href="https://www.linkedin.com/in/alan-chavarin-5bb910248/">Alan Chavarin</a>
            </div>

            <div>
                <i class="fa-solid fa-briefcase"></i>
                <a class="detailsText" href="https://www.alanchavarin.dev">www.alanchavarin.dev</a>
            </div>
            
        </div>
    </div>

    <div class="body">

        <div class="container">

            <div class="header1">
                <i class="fa-solid fa-pen"></i>
                Summary
            </div>

            <hr/>

            <div class="sectionDetailsText">
                <div class="textItem">
                    Full-stack web developer with over a year of self-taught experience building web applications with the <em>M.E.R.N</em> stack (MongoDB, ExpressJS, React, NodeJS). Adept at learning new technologies, languages, and frameworks as required to build web applications. Proficient in creating user friendly interfaces, back-end APIs, and database design for document based databases. 
                </div>
            </div>
            
        </div>

        <div class="container">

            <div class="header1">
                <i class="fa-solid fa-briefcase"></i>
                Projects
            </div>

            <hr/>

            <div class="sectionDetailsContainer">
                <div class="header2 sectionDetailsContainerItem">
                    Eye of Ophidia
                </div>
                <div class="sectionDetailsContainerItem">
                    <i class="fa-solid fa-globe"></i>
                    <a class="sectionDetailsText" href="https://www.eyeofophidia.net">www.eyeofophidia.net</a>
                </div>
                <div class="sectionDetailsContainerItem">
                    <i class="fa-brands fa-github"></i>
                    <a class="sectionDetailsText" href="https://github.com/AlanChavarin/eye-of-ophidia">www.github.com/AlanChavarin/eye-of-ophidia</a>
                </div>
            </div>
            <div class="sectionDetailsText">
                <ul class="bodyList">
                    <li class="textItem">
                        Full-stack web application built using the
                        <em>M.E.R.N</em> stack (MongoDB, ExpressJS, React, NodeJS).
                    </li>
                    <li class="textItem">
                        Designed to catalog all official live tournament matches for the fantasy trading card game <em>FaBTCG</em>.
                    </li>
                    <li class="textItem">
                        Users can search the database via player names, events, date ranges, and matchups.
                    </li>
                    <li class="textItem">
                        Login and authentication system helps give trusted community members permissions to help catalog match and event data.
                    </li>
                    <li class="textItem">
                        Over 3000 unique users have visited the site from over 20+ countries
                    </li>
                </ul>
            </div>
        </div>

        <div class="educationSkillsContainerParent">
            <div class="container">
                <div class="header1">
                    <i class="fa-solid fa-graduation-cap"></i>
                    Education
                </div>

                <hr/>

                <div class="sectionDetailsContainer">
                    <div class="header2 sectionDetailsContainerItem">
                        August 2022 - Present
                    </div>
                </div>
                <div class="sectionDetailsText educationDetailsSection">
                    <div class="textItem"><em>San Diego State University</em></div>
                    <div class="textItem">Bachelors of Science in Computer Science <em>(in progress)</em></div>
                    <div class="textItem">Projected to graduate in the Fall of 2025</div>
                </div>
                <div class="sectionDetailsContainer">
                    <div class="header2 sectionDetailsContainerItem">
                        July 2019 - May 2022
                    </div>
                </div>
                <div class="sectionDetailsText educationDetailsSection">
                    <div class="textItem"><em>South Western Community College</em></div>
                    <div class="textItem">Associate of Science Transfer (AST) in Computer Science</div>
                </div>
                {/* <div class="sectionDetailsContainer">
                    <div class="header2 sectionDetailsContainerItem" style="margin-top: 32px;">
                        Relevant Course Work
                    </div>
                </div>
                <div class="sectionDetailsText educationDetailsSection">
                    <ul class="bodyList">
                        <li class="textItem">
                            Intro to Software Systems
                        </li>
                        <li class="textItem">
                            Data Structures
                        </li>
                        <li class="textItem">
                            Intro to Computer Programming
                        </li>
                        
                    </ul>
                </div> */}
            </div>

            <div class="container">

                <div class="header1">
                    <i class="fa-solid fa-code"></i>
                    Languages and Skills
                </div>

                <hr/>

                <div class="skillsContainerParent">

                    <div class="skillsContainer">
                        <div class="skillsHeader">
                            Front-end
                        </div>
                        <div class="skillsItem">
                            <i class="fa-brands fa-html5"></i> HTML
                        </div>
                        <div class="skillsItem">
                            <i class="fa-brands fa-css3-alt"></i> CSS
                        </div>
                        <div class="skillsItem">
                            <i class="fa-brands fa-js"></i> JavaScript
                        </div>
                        <div class="skillsItem">
                            <i class="fa-brands fa-react"></i> React
                        </div>
                    </div>

                    <div class="skillsContainer">
                        <div class="skillsHeader">
                            Back-end
                        </div>
                        <div class="skillsItem">
                            <i class="fa-solid fa-leaf"></i> MongoDB
                        </div>
                        <div class="skillsItem">
                            <i class="fa-brands fa-node"></i> NodeJS
                        </div>
                        <div class="skillsItem">
                            <i class="fa-brands fa-node-js"></i> ExpressJS
                        </div>
                    </div>

                    <div class="skillsContainer">
                        <div class="skillsHeader">
                            Testing
                        </div>
                        <div class="skillsItem">
                            <img src="cypress.svg" alt="" /> Cypress
                        </div>
                        <div class="skillsItem">
                            <img src="jest.svg" alt="" height="25%" /> Jest
                        </div>
                    </div>
                </div>
                
            </div>

        </div>

    </div>
</div>
  )
}
export default resumeHTML