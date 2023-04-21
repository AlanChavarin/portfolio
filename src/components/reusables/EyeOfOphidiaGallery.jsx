import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faArrowRightLong, faArrowLeftLong, faX } from "@fortawesome/free-solid-svg-icons"
import EyeOfOphidiaGalleryCSS from './styles/EyeOfOphidiaGallery.module.css'
import { useState } from "react"
import { useNavigate, useSearchParams } from "react-router-dom"

function EyeOfOphidiaGallery({page}) {
  const imageArray = [
    'homepage.PNG',
    'resultspage.PNG',
    'Matchpage.PNG', 
    'eventpage.PNG',
    '1eventpage.PNG',
    'parameters.PNG',
    'issuespage.PNG',
    'postmatchpage.PNG',
    'register.PNG', 
    'homepagemobile.PNG',
    'matchpagemobile.PNG',
    'parametersmobile.PNG',
    'searchresultsmobile.PNG',
  ]
  const imageDescriptionArray = [
    'Home Page',
    'Match Search Results',
    'Match Page',
    'Events page',
    'Event page',
    'Search Parameters Dropdown',
    'Issues Page (Admin only)',
    'Match Submission Page (Admin only)',
    'Login/Registration page',
    'Home Page (Mobile)',
    'Match Page (Mobile)',
    'Parameters Dropdown (Mobile)',
    'Match Search Resuts (Mobile)',
  ]

  const [searchParams] = useSearchParams()
  const [imageIndex, setImageIndex] = useState(
    searchParams.get('pic') ? parseInt(searchParams.get('pic')) : 0
  )
  const navigate = useNavigate()

  const onScroll = (add) => {
    if(imageIndex + add === imageArray.length){
      setImageIndex(0)
    } else if (imageIndex + add < 0){
      setImageIndex(imageArray.length-1)
    } else {
      setImageIndex(imageIndex + add)
    }
  }

  const onClick = () => {
    if(!page){
      navigate(`/gallery?pic=${imageIndex}`)
    }
  }

  return (
    <div className={EyeOfOphidiaGalleryCSS.parent}>
      <div style={{textAlign: 'center'}}>
        {imageDescriptionArray[imageIndex]}
      </div>

      <div className={`${page ? EyeOfOphidiaGalleryCSS.imgContainerFullScreen 
      : EyeOfOphidiaGalleryCSS.imgContainer}`}>

        <img src={`screenshots/${imageArray[imageIndex]}`} alt=""
        className={EyeOfOphidiaGalleryCSS.img} onClick={() => onClick()}/>

      </div>

      <div className={EyeOfOphidiaGalleryCSS.radioContainer}>
        {imageArray.map(image => (
          <input type="radio" checked={image===imageArray[imageIndex]}/>
        ))}
      </div>

      <div className={EyeOfOphidiaGalleryCSS.arrowContainer}>
        <button onClick={() => onScroll(-1)}><FontAwesomeIcon icon={faArrowLeftLong} /></button>
        <button onClick={() => onScroll(1)}><FontAwesomeIcon icon={faArrowRightLong} /></button>
      </div>

      {page && <>
        <button 
          className={`${EyeOfOphidiaGalleryCSS.sideButton} 
          ${EyeOfOphidiaGalleryCSS.sideButtonLeft}`} 
          onClick={() => onScroll(-1)}>
            <FontAwesomeIcon icon={faArrowLeftLong} />
          </button>

          <button 
          className={`${EyeOfOphidiaGalleryCSS.sideButton}
          ${EyeOfOphidiaGalleryCSS.sideButtonRight}`} 
          onClick={() => onScroll(1)}>
            <FontAwesomeIcon icon={faArrowRightLong} />
          </button>

          <button to='/' className={EyeOfOphidiaGalleryCSS.xButton}
           onClick={() => window.history.back()}>
            <FontAwesomeIcon icon={faX} />
          </button>
      </>}
      

    </div>
  )
}
export default EyeOfOphidiaGallery