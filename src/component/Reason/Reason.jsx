import React from 'react'
import './Reason.css'
import image1 from '../../images/image1.png'
import image2 from '../../images/image2.png'
import image3 from '../../images/image3.png'
import image4 from '../../images/image4.png'
import nb from '../../images/nb.png'
import adidas from '../../images/adidas.png'
import nike from '../../images/nike.png'
import tick from '../../images/tick.png'
const Reason = () => {
  return (
    <>
      <div className="reason" id='reason'>
        <div className="left-r">
          <img src={image1} alt="" />
          <img src={image2} alt="" />
          <img src={image3} alt="" />
          <img src={image4} alt="" />
        </div>
        <div className="right-r">
          <span>some reasons</span>
          <div>
            <span className='stroke-text'>why </span>
            <span>choose us?</span>
          </div>
          <div className='details-r'>
            <div>
              <img src={tick} alt="" />
              <span>OVER 140+ EXPERT COACHS</span>
            </div>
            <div>
              <img src={tick} alt="" />
              <span>TRAIN SMARTER AND FASTER THAN BEFORE</span>
            </div>
            <div>
              <img src={tick} alt="" />
              <span>1 FREE PROGRAM FOR NEW MEMBER</span>
            </div>
            <div>
              <img src={tick} alt="" />
              <span>RELIABLE PARTNERS</span>
            </div>
          </div>
          <span style={{
            color: "var(--orange)",
            fontWeight: "normal"
          }}>
            OUR PARTNER
          </span>
          <div className="partner">
            <img src={nb} alt="" />
            <img src={adidas} alt="" />
            <img src={nike} alt="" />
          </div>
        </div>
      </div>
    </>
  )
}

export default Reason