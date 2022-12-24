import React from 'react'
import './Programs.css'
import {programsData} from '../../data/programsData'
import RightArrow from '../../images/rightArrow.png'


const Programs = () => {
  return (
    <>
    <div className="program" id="programs">
        {/* Header-programs */}
        <div className="program-header">
            <span className='stroke-text'>Explore Our </span>
            <span>Programs </span>
            <span className='stroke-text'>to shap you</span>
        </div>
        <div className="program-category">
          {programsData.map((program)=>(
            <div className="category">
              {program.image}
              <span>{program.heading}</span>
              <span>{program.details}</span>
              <div className="join-now">
                <span>Join Now</span>
                <img src={RightArrow} alt='' />
              </div>
            </div>
          ))}
        </div>
    </div>
    </>
  )
}

export default Programs