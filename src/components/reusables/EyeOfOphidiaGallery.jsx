import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faArrowRightLong, faArrowLeftLong, faX } from "@fortawesome/free-solid-svg-icons"
import EyeOfOphidiaGalleryCSS from './styles/EyeOfOphidiaGallery.module.css'
import { useState, useEffect } from "react"
import { useNavigate, useSearchParams } from "react-router-dom"

function EyeOfOphidiaGallery({page, imageArray, imageDescriptionArray, galleryName}) {
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
      navigate(`/${galleryName}?pic=${imageIndex}`)
    } else if(page){
      window.history.back()
    }
  }

  const onChange = (e) => {
    e.preventDefault()
    setImageIndex(Number(e.target.getAttribute('index')))

  }

  useEffect(() => {
    imageArray.forEach((image) => {
      const img = new Image()
      img.src = `screenshots/${image}`
    })
  }, [])

  return (
    <div className={EyeOfOphidiaGalleryCSS.parent}>

      <div className={`${page ? EyeOfOphidiaGalleryCSS.imgContainerFullScreen 
      : EyeOfOphidiaGalleryCSS.imgContainer}`}>

        <img src={`screenshots/${imageArray[imageIndex]}`} alt=""
        className={`boxShadow ${page ? EyeOfOphidiaGalleryCSS.imgFullScreen : EyeOfOphidiaGalleryCSS.img}`}
        style={{cursor: page ? 'zoom-out' : ''}}
        onClick={() => onClick()}/>

        

      </div>

      {!page && <>
        <div className={EyeOfOphidiaGalleryCSS.description}>
          {imageDescriptionArray[imageIndex]}
        </div>

        <div className={EyeOfOphidiaGalleryCSS.radioContainer}>
          {imageArray.map((image, index) => (
            <input type="radio" checked={image===imageArray[imageIndex]} index={index} onChange={onChange}/>
          ))}
        </div>

        <div className={EyeOfOphidiaGalleryCSS.arrowContainer}>
          <button className='boxShadow' onClick={() => onScroll(-1)}><FontAwesomeIcon icon={faArrowLeftLong} /></button>
          <button className='boxShadow' onClick={() => onScroll(1)}><FontAwesomeIcon icon={faArrowRightLong} /></button>
        </div>
      </>}

      {page && <>
          <button 
            className={`${EyeOfOphidiaGalleryCSS.sideButton} 
            ${EyeOfOphidiaGalleryCSS.sideButtonLeft}
            `} 
            onClick={() => onScroll(-1)}>
              <FontAwesomeIcon icon={faArrowLeftLong} />
          </button>

          <button 
            className={`${EyeOfOphidiaGalleryCSS.sideButton}
            ${EyeOfOphidiaGalleryCSS.sideButtonRight}
            `} 
            onClick={() => onScroll(1)}>
              <FontAwesomeIcon icon={faArrowRightLong} />
          </button>

          <button to='/' className={EyeOfOphidiaGalleryCSS.xButton}
           onClick={() => onClick()}>
            <FontAwesomeIcon icon={faX} />
          </button>
      </>}
      

    </div>
  )
}
export default EyeOfOphidiaGallery