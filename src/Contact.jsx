import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import Swal from 'sweetalert2';

const Contact = () => {
    const [socialanimation, setSocialAnimation] = useState(0);
    const [result, setResult] = useState("");

    const onSubmit = async (event) => {
        event.preventDefault();
        setResult("Sending....");
        const formData = new FormData(event.target);

        formData.append("access_key", "d91f34c9-49a4-448d-a471-294326ac7fd0");

        const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData
        });

        const data = await response.json();

        if (data.success) {
        setResult("Form Submitted Successfully");
        Swal.fire({
            title: "Success!",
            text: "Sent the message!",
            icon: "success"
        });
        event.target.reset();
        } else {
        console.log("Error", data);
        setResult(data.message);
        Swal.fire({
            title: "Success!",
            text: "Sent the message!",
            icon: "error"
        });
        }
    }

    const location = useLocation();

      useEffect(() => {
        window.scrollTo({
          top: 0,
          left: 0,
          behavior: 'smooth'
        });
      }, [location.pathname]);

  useEffect(() => {
    const interval = setInterval(() => {
        socialanimation < 3 ? setSocialAnimation((prev) => prev + 1) : setSocialAnimation(0);
    }, 4000);

    return () => clearInterval(interval);
}, [socialanimation]);
  return (
    <div className='contact w-full h-screen grid grid-cols-2 items-center justify-center gap-36'>
        <div className='contact-info flex items-center justify-center gap-6 flex-col bg-orange-300 h-full w-full '>
            <h1 className='font-extrabold text-3xl'>Contact</h1>
            <p className='text-center'>Have a project or idea?<br></br>I’d love to hear about it and help you bring it to life!</p>
            <div className='flex items-center justify-center gap-2 flex-col'>
                <h2 className='font-bold'>Email</h2>
                <p>topreh86@gmail.com</p>
            </div>
            <div className='flex items-center justify-center gap-2 flex-col'>
                <h2 className='font-bold'>Phone</h2>
                <p>09686890493</p>
            </div>
            <div className='flex items-center justify-end gap-1 bg-white rounded-full py-1 px-2 border-none relative'>
                    <span className={`bg-orange-300 w-8 h-5/6 absolute top-0 rounded-b-sm transition-all ${socialanimation === 1 ? 'left-11' : socialanimation === 2 ? 'left-20': socialanimation === 3 ? 'left-30': 'left-2'}`}></span>
                    <i className={`bi bi-facebook  text-2xl px-1 rounded-sm rounded-t-none z-10 cursor-pointer ${socialanimation === 0 ? ' text-white transition-all -translate-y-1' : 'text-orange-300'}`} onClick={() => setSocialAnimation(0)}></i>
                    <i className={`bi bi-linkedin  text-2xl px-1 rounded-sm rounded-t-none z-10 cursor-pointer ${socialanimation === 1 ? ' text-white transition-all -translate-y-1' : 'text-orange-300'}`} onClick={() => setSocialAnimation(1)}></i>
                    <i className={`bi bi-telegram  text-2xl px-1 rounded-sm rounded-t-none z-10 cursor-pointer ${socialanimation === 2 ? ' text-white transition-all -translate-y-1' : 'text-orange-300'}`} onClick={() => setSocialAnimation(2)}></i>
                    <i className={`bi bi-github  text-2xl px-1  rounded-sm rounded-t-none z-10 cursor-pointer ${socialanimation === 3 ? ' text-white transition-all -translate-y-1' : 'text-orange-300'}`} onClick={() => setSocialAnimation(3)}></i>
                </div>
        </div>
        <div className="form-container flex items-center justify-center">
            <form className="contact-form" onSubmit={onSubmit}>
                <div className="contact-form-control">
                    <input type="contact-text" required name='name'/>
                    <label>
                        {['N', 'a', 'm', 'e'].map((letter, index) => (
                        <span key={index} style={{ transitionDelay: `${index * 50}ms` }}>
                            {letter}
                        </span>
                        ))}
                    </label>
                </div>
                <div className="contact-form-control">
                    <input type="contact-text" required name='email'/>
                    <label>
                        {['E', 'm', 'a', 'i', 'l'].map((letter, index) => (
                        <span key={index} style={{ transitionDelay: `${index * 50}ms` }}>
                            {letter}
                        </span>
                        ))}
                    </label>
                </div>
                <div className="contact-form-control">
                    <textarea rows="4" name='message' required></textarea>
                    <label>
                        {['M', 'e', 's', 's', 'a', 'g', 'e'].map((letter, index) => (
                        <span key={index} style={{ transitionDelay: `${index * 50}ms` }}>
                            {letter}
                        </span>
                        ))}
                    </label>
                </div>
                <button type="submit" className="form-submit-btn contact-fancy">
                    <span className="contact-top-key"></span>
                    <span className="contact-text">Let's work together</span>
                    <span className="contact-bottom-key-1"></span>
                    <span className="contact-bottom-key-2"></span>
                </button>
            </form>
        </div>
        </div>
  )
}

export default Contact