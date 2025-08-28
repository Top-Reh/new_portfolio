import React from 'react';
import kbb from './assets/aboutmeimages/kbb.png';
import aboutimage from './assets/aboutnobg.png';
import ScrollProgress from './progressbaraboutme';
import {website1 , website2} from './assets/portfolioimages/portfolioimages';

const About = () => {
  return (
    <section className='h-full w-full bg-white relative'>
      <div className="aboutheader w-full h-screen flex items-center justify-around px-5">
        <h1 className='text-9xl font-bold'>ABOUT ME</h1>
        <div className='flex flex-col items-center justify-center text-center gap-7'>
          <p className='w-2/3'>Neque porro quisquam est qui dolorem ipsum Neque porro quisquam est qui dolorem ipsum Neque porro quisquam est qui dolorem ipsum  </p>
          <img src={kbb} alt='kbbimage' className='w-3/5'></img>
        </div>
      </div>
      <div className='w-full h-full flex items-center justify-end px-44 bg-black gap-20'>
        <div className="e-card playing">
          <div className="image"></div>
          
          <div className="wave"></div>
          <div className="wave"></div>
          <div className="wave"></div>
          
          <div className="infotop">
            Projects
            <div className="name">21+</div>
          </div>
        </div>
        <div className="e-card playing">
          <div className="image"></div>
          
          <div className="wave"></div>
          <div className="wave"></div>
          <div className="wave"></div>
          
          <div className="infotop">
            Projects
            <div className="name">21+</div>
          </div>
        </div>
      </div>
      <div className='about w-full h-screen bg-black grid grid-cols-[1fr 2fr]'>
        <div className='w-full h-full flex items-center justify-center '>
            <img src={aboutimage} alt='About Me' className=' object-cover object-left w-2/5 h-full' />
            <h1 className='abouttitle bg-red-500'>AB OU T ME</h1>
        </div>
        <div className='w-full h-full py-5 pr-60 px-10 flex items-start justify-center flex-col gap-7'>
            <h1 className='font-semibold text-white text-4xl'><span className='text-orange-500'>WHO</span> AM I?</h1>
            <div className='flex items-start justify-start gap-5'>
                <span className='h-full w-2 bg-orange-500 '></span>
                <p className='text-white leading-8'>
                I’m a 19-year-old developer from Myanmar 🇲🇲, passionate about building scalable web apps and beautiful user experiences.  
I specialize in full-stack development using modern technologies like React, Tailwind, Firebase, Node.js, and MongoDB.

I founded **WebDevMM**, a small agency helping local businesses go digital.  
Whether it’s a landing page, a complete eCommerce system, or a smart dashboard — I bring your product to life from idea to deployment.

I’m currently studying Korean and preparing to study in South Korea 🇰🇷, where I plan to grow as a global developer.
                </p>
            </div> 
            <a className="fancy" href="#">
                <span className="top-key"></span>
                <span className="text">Let's work together</span>
                <span className="bottom-key-1"></span>
                <span className="bottom-key-2"></span>
            </a>
        </div>
      </div>
      <ScrollProgress />
      <div className='portfolio w-full h-screen bg-black flex items-center justify-center flex-col gap-4 p-5'>
        <h1 className='font-semibold text-white text-4xl mb-2'>Recent <span className='text-orange-500'>WORKS</span></h1>
        <div className='flex w-full items-center justify-end gap-5 '>
            <button className="portfolio-button ">
                <span className="hover-underline-animation"> See more </span>
                <svg
                    id="arrow-horizontal"
                    xmlns="http://www.w3.org/2000/svg"
                    width="30"
                    height="10"
                    viewBox="0 0 46 16"
                >
                    <path
                    id="Path_10"
                    data-name="Path 10"
                    d="M8,0,6.545,1.455l5.506,5.506H-30V9.039H12.052L6.545,14.545,8,16l8-8Z"
                    transform="translate(30)"
                    ></path>
                </svg>
            </button>
        </div>

        <div className='grid grid-cols-2 justify-center items-center gap-4 w-full h-2/3'>
            
            <div className='portfoliocard w-full h-full rounded-sm' id='card'>
                <div className='content flex items-start justify-end rounded-sm relative p-6' style={{ backgroundImage: `url(${website1})`, backgroundSize: 'cover', backgroundPosition: 'center' }}>
                    <span className='bg-black opacity-30 h-full w-full z-0 absolute top-0 left-0 cursor-pointer hover:opacity-0'></span>
                    <p className='text-white px-5 bg-gray-600 py-2 rounded-full'>Full stack development</p>
                </div>
            </div>
            <div className='portfoliocard w-full h-full' id='card'>
                <div className='content flex items-start justify-end rounded-sm relative p-6' style={{ backgroundImage: `url(${website2})`, backgroundSize: 'cover', backgroundPosition: 'center' }}>
                    <span className='bg-black opacity-30 h-full w-full z-0 absolute top-0 left-0 cursor-pointer hover:opacity-0'></span>
                    <p className='text-white px-5 bg-gray-600 py-2 rounded-full'>Full stack development</p>
                </div>
            </div>
        </div>
    </div>
    </section>
  )
}

export default About