import React, { useState } from 'react'
import './Testimonials.css'
import { testimonialsData } from '../../data/testimonialsData'
import leftArrow from '../../images/leftArrow.png'
import rightArrow from '../../images/rightArrow.png'
const Testimonials = () => {
  const [selected, setSelected] = useState(0);
  const tLenght = testimonialsData.length;
  return (
    <>
      <div className="testimonials">
        <div className="left-t">
          <span>Testimonials </span>
          <span className='stroke-text'>what they </span>
          <span>say about us</span>
          <span>{testimonialsData[selected].review}</span>
          <span>
          <span style={{color: 'var(--orange)'}}>
            {testimonialsData[selected].name}{" "}
          </span>
            -{testimonialsData[selected].status}
          
          </span>
        </div>
        <div className="right-t">
          <div></div>
          <div></div>
          <img src={testimonialsData[selected].image} alt='' />
          <div className="arrow">
            <img 
            onClick={()=>{selected === 0 ?setSelected(tLenght -1):setSelected((prev)=> prev -1)}}
            src={leftArrow} alt="" />
            <img 
            onClick={()=>{selected === tLenght -1 ?setSelected(0):setSelected((prev)=> prev +1)}}
            src={rightArrow} alt="" />
          </div>
        </div>

      </div>

    </>
  )
}

export default Testimonials
