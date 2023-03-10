import React from 'react'
import whiteTick from '../../images/whiteTick.png'
import {plansData} from '../../data/plansData'
import './Plan.css'
const Plan = () => {
  return (
    <>
    <div className='plan-container'>
        <div className="program-header">
            <span className='stroke-text'>READY TO START </span>
            <span>YOUR JOURNEY </span>
            <span className='stroke-text'>NOW WITH US </span>
        </div>
        <div className="blur plan-blur"></div>
        <div className="plans">
            {plansData.map((plan, i)=>(
                <div className="plan" key={i}>
                    {plan.icon}
                    <span>{plan.name}</span>
                    <span>$ {plan.price}</span>
                    <div className="features">
                        {plan.features.map((feature , i)=>(
                            <div className="feature">
                                <img src={whiteTick} alt='' />
                                <span key={i}>{feature}</span>
                            </div>
                        ))}
                    </div>
                    <div>
                        <span>See More Benefits -> </span>
                    </div>
                    <button className='btn'>Join Now </button>
                </div>
            ))}
        </div>
    </div>
    </>
  )
}

export default Plan