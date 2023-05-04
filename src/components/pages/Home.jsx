import HomeCSS from './styles/Home.module.css'

function Home() {
  return (
    <div className={HomeCSS.parent} id='home'>
      <p className={HomeCSS.hello}>
        <b>Hello!</b> my name is <br className={HomeCSS.nameBreak}/>
        <b className={HomeCSS.highlight}> Alan Chavarin</b>
      </p>
      <p>I'm an aspiring <b className={HomeCSS.highlight}>full stack</b> web developer based out of San Diego, California.</p>
      <div className={HomeCSS.logoContainer}>
        <img src="HTML5.png" alt="" width='70'/>
        <img src="css.png" alt="" width='80' />
        <img src="JavaScript.png" alt="" width='50' />
        <img src="react.png" alt="" width='70' />
        <img src="nodejs.png" alt="" width='70'/>
        <img src="express.png" alt="" width='70'/>
        <img src="mongodb.png" alt="" width='75'/>
      </div>
      {/* <OrangeBorders/> */}
    </div>
  )
}
export default Home