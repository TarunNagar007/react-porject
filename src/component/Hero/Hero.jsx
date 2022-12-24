import React from 'react';
import { Header } from './Header/Header';
import './Hero.css'
import hero_image from '../../images/hero_image.png'
import hero_image_back from '../../images/hero_image_back.png'
import Heart from '../../images/heart.png'
import Calories from '../../images/calories.png'
function Hero() {
    return (
        <>
            <div className='hero'>

                <div className='blur blur-h'></div>
                <div className='left-h'>
                    <Header />
                    <div className="the-best">
                        <div></div>
                        <span>The Best Fitness Club In Town</span>
                    </div>
                     {/* {hero heanding here}  */}
                    <div className="hero-text">
                        <div>
                            <span className='stroke-text'>Shap </span>
                            <span>Your</span>
                        </div>
                        <div>
                            <span>Idal Body</span>
                        </div>
                        <div>
                            <span>
                            in here we will help you to shap and build your idal body<br/> 
                            live up your life to fullfill.
                            </span>
                            
                        </div>
                    </div>
                    <div className="figures">
                        <div>
                        <span>+140</span>
                        <span>expert coaches</span>
                        </div>

                        <div>
                        <span>+978</span>
                        <span>members joined </span>
                        </div>

                        <div>
                        <span>+50 </span>
                        <span>fitness progrems</span>
                        </div>
                    </div>
                    {/* hero-button */}
                    <div className="hero-btn">
                        <button className='btn' >Get started</button>
                        <button className='btn'>Learn More</button>
                    </div>
                </div>
                <div className='right-h'>
                    <button className='btn'>Join Now</button>

                    <div className="heart-rate">
                        <img src= {Heart} alt='' />

                        <span>Heart Rate</span>
                        <span>116 bpm</span>    

                    </div>
                    {/* hero-images */}
                    <img src= {hero_image} alt='' className='hero_image' />
                    <img src= {hero_image_back} alt='' className='hero_image_back' />
                    {/* Calories */}
                    <div className="calories">
                        <img src={Calories} alt='' />
                        <div>
                        <span> CaloriesBurned </span>
                        <span> 220 kcal</span>
                        </div>
                    </div>
                    
                </div>
            </div>
        </>
    )
}

export default Hero