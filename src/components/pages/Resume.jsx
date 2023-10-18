//css
import ResumeCSS from './styles/Resume.module.css'

function Resume() {
  return (
    <iframe src="pdf/AlanChavarin_Resume.docx" frameborder="0" className={ResumeCSS.iframe} title="Alan Chavarin's Resume"></iframe>
  )
}
export default Resume