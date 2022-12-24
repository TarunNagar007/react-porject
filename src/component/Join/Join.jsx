import React, { useRef } from 'react'
import './Join.css'
import emailjs from '@emailjs/browser'
const Join = () => {
  const form = useRef()
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_xvly6yu', 'template_syhavaz', form.current, 'tFEYrsNUc3vpm8VRV')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
  };

  return (
    <>
    <div className="join" id='join-us'>
      <div className="left-j">
        <hr />
        <div>
          <span className='stroke-text'>READY TO  </span>
          <span>LEVEL UP</span>
        </div>
        <div>
          <span>YOUR BODY </span>
          <span className='stroke-text'>WITH US?</span>
        </div>
      </div>
      <div className="right-j">
        <form ref={form} className="email-container" onSubmit={sendEmail}>
          <input type='email' name='User_Email' placeholder='Enter Your Email ' />
          <button className='btn btn-j'>Join Now </button>
        </form>
      </div>
    </div>
    </>
  )
}

export default Join