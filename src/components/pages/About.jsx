import AboutCSS from './styles/About.module.css'
import OrangeBorders from '../reusables/OrangesBorders'

function About() {
  return (
    <section style={{alignItems: 'center'}} id='about'>
      <div className={AboutCSS.imageContainer}>
        <img src="sdsunamelogo.jpg" alt="" width='400'/>
        <img src="campus.webp" alt="" width='400'/>
      </div>
      <div className={AboutCSS.aboutMe}>
        <h1>{'< '}About me{' />'}</h1>
        <p>I am 22 years old and currently pursuing a Computer Science degree at San Diego State University. I am planning on completing my degree in the spring of 2025.</p>
        <p>In addition to my classes, I study and improve my web development skills during my free time by working on my portfolio projects. </p>
        <p>Currently, I am looking for a web development internship to gain real world experience before I graduate.</p>
      </div>
      
      <OrangeBorders />
    </section>
  )
}
export default About