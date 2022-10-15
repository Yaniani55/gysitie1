import React, {useRef} from 'react'
import emailjs from "@emailjs/browser"
import "./Join.css"

const Join = () => {
    const form =useRef()
    const sendEmail = (e) => {
        e.preventDefault();
    
        emailjs.sendForm('service_465ou9i', 'template_sxzrdbg', form.current, 'VfnFSv0fWXCkaqZGh')
          .then((result) => {
              console.log(result.text);
          }, (error) => {
              console.log(error.text);
          });
      };

  return (
    <div className="Join" id="joins-us">
        <div className="left-j">
            <hr/>
            <div>
                <span className='stroke-text'> READY TO </span>
                <span>LEVEL UP</span>
            </div>
            <div>
                <span>YOUR BODY</span>
                <span className='stroke-text'> WITH US? </span>
            </div>
        </div>
        <div className="right-j">
            <form ref={form} className="email-container" onSubmit={sendEmail}>
                <input type="email" name="user_email" placeholder='Enter your Email address'/>
                <botton className= "btn btn-j">Join Now</botton>
            </form>
        </div>
    </div>
    
  )
}

export default Join