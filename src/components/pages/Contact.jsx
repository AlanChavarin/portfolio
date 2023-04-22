import ContactCSS from './styles/Contact.module.css'
import OrangeBorders from '../reusables/OrangesBorders'

function Contact() {
  return (
    <div className={ContactCSS.parent}>
        <h1 style={{textAlign: 'center'}}>{"<"} Contact me {"/>"}</h1>
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
                <textarea name="text" id="" cols="30" rows="10" placeholder='Hello!'></textarea>
            </div>
            <button className={ContactCSS.submit} type="submit">Send</button>
            
        </form>
        <OrangeBorders />
    </div>
    
  )
}
export default Contact