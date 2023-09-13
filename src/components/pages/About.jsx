import AboutCSS from './styles/About.module.css'

function About() {
  return (
    <div className={AboutCSS.wrapper} id='about'>
      <section style={{alignItems: 'center'}} id='about' className={`${AboutCSS.parent} boxShadow translateY`}>
        <h1 className={AboutCSS.header2}>{'< '}About me{' />'}</h1>
        <div className={`${AboutCSS.imageContainer} boxShadow`}>
          <img src="sdsunamelogo.jpg" alt="" width='400'/>
          <img src="campus.webp" alt="" width='400'/>
        </div>
        <div className={AboutCSS.aboutMe}>
          <h1 className={AboutCSS.header1}>{'< '}About me{' />'}</h1>
          <p>I am a Computer Science Major San Diego State University. I am planning on completing my degree in the spring of 2025.</p>
          <p>In addition to my classes, I study and improve my web development skills building tools for the web that people find useful.</p>
          <p>I am currently open to web development internship opportunities in order to gain real world experience working in a professional environment .
          </p>
        </div>
        
        {/* <OrangeBorders /> */}
      </section>
    </div>
  )
}
export default About