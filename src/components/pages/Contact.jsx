import ContactCSS from './styles/Contact.module.css'

function Contact() {
  return (
    <div className={ContactCSS.wrapper}>
        <section className={`${ContactCSS.parent} boxShadow translateY`}>
            <h1 className={ContactCSS.h1} style={{textAlign: 'center'}}>{"<"} Contact me {"/>"}</h1>
            <p className={ContactCSS.p}>
                Feel free to also contact me directly at: <span> </span>
                <a href="mailto: alanchavarin4@hotmail.com">
                     alanchavarin4@hotmail.com
                </a>
            </p>
            <form method="POST" id='contact' className={ContactCSS.form} action="https://formsubmit.co/alanchavarin4@hotmail.com" >
                <div>
                    <label htmlFor="name">Name</label>
                    <input type="text" name="name" placeholder='John Smith'/>
                </div>
                <div>
                    <label htmlFor="email">Email</label>
                    <input type="email" name="email" placeholder='JohnSmith@aol.com'/>
                </div>
                <div>
                    <label htmlFor="text">Message</label>
                    <textarea className={`boxShadowSmall`} name="text" id="" rows="10" placeholder='Hello!'></textarea>
                </div>
                <button className={`${ContactCSS.submit} boxShadowSmall`} type="submit">
                    Send
                </button>
                
            </form> 
            {/* <OrangeBorders /> */}
        </section>
    </div>
  )
}
export default Contact