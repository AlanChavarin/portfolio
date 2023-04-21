import OrangeBordersCSS from './styles/OrangeBorder.module.css'

function OrangeBorders() {
  return (
    <>
      <div className={OrangeBordersCSS.topLine}></div>
      <div className={OrangeBordersCSS.leftLine}></div>
      <div className={OrangeBordersCSS.bottomLine}></div>
      <div className={OrangeBordersCSS.rightLine}></div>
    </>
  )
}
export default OrangeBorders