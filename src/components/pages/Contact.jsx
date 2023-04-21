import ContactCSS from './styles/Contact.module.css'
import OrangeBorders from '../reusables/OrangesBorders'

function Contact() {
  return (
    <div className={ContactCSS.parent}>
        <h1 style={{textAlign: 'center'}}>{"<"} Contact me {"/>"}</h1>
        <form method="POST" id='contact' className={ContactCSS.form}>
            <div>
                <label htmlFor="name">Name</label>
                <input type="text" name="name" />
            </div>
            <div>
                <label htmlFor="email">Email</label>
                <input type="email" name="email" />
            </div>
            <div>
                <label htmlFor="message">Message</label>
                <textarea name="" id="" cols="30" rows="10"></textarea>
            </div>
            <button className={ContactCSS.submit} type="submit">Send</button>
            
        </form>
        <OrangeBorders />
    </div>
    
  )
}
export default Contact

// action="https://formsubmit.co/alanchavarin4@hotmail.com" 