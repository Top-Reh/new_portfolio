import React, { useEffect, useState } from 'react';
import './App.css';
import portimg from'./assets/portimg.png';
import image1 from './assets/bioimages/image1.jpg';
import aboutimage from './assets/aboutnobg.png';
import { html ,css, javascript, react, tailwind, firebase, nodejs, mongodb, figma, wordpress, express,github } from './assets/skillsimages/skillsimagesexport';
import {website1 , website2, website3, website4, website5} from './assets/portfolioimages/portfolioimages';
import {themark, webdevmm} from './assets/selfprojects/selfprojects';
import { useLocation } from 'react-router-dom';


const Home = () => {
    const [socialanimation, setSocialAnimation] = useState(0);
    const [skills, setSkills] = useState([
        { name: "react js",imagesrc: react, description: '– Develop fast, scalable, and user-friendly front-end interfaces' },
        { name: "nodejs",imagesrc: nodejs, description: '– Build powerful, server-side applications with scalability' },
        { name: "express",imagesrc: express, description: '– Develop secure and efficient APIs' },
        { name: "javascript",imagesrc: javascript, description: '– Add interactivity and dynamic features to applications' },
        { name: "tailwind",imagesrc: tailwind, description: '– Create modern, responsive designs with efficiency' },
        { name: "firebase",imagesrc: firebase, description: '– Handle authentication, real-time databases, and hosting' },
        { name: "mongodb",imagesrc: mongodb, description: '– Design and manage flexible, document-based databases' },
        { name: "figma",imagesrc: figma, description: '– Design user-friendly interfaces and collaborate on UI/UX' },
        { name: "wordpress",imagesrc: wordpress, description: '– Build and customize websites with speed and flexibility' },
        { name: "github",imagesrc: github, description: '– Manage version control and collaborate on projects effectively' },
        { name: "html",imagesrc: html, description: '– Build structured, accessible, and SEO-friendly websites' },
        { name: "css",imagesrc: css, description: '– Design responsive, elegant, and modern layouts' },
    ]);
    const [slideIndex, setSlideIndex] = useState(0);

    
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
            setSlideIndex((prev) => prev + 1);
        }, 4000);

        return () => clearInterval(interval);
    }, [socialanimation]);

    useEffect(() => {
        if (slideIndex === 1) {
            setTimeout(() => {
                // Rotate the array after the animation
                const firstSkill = skills[0];
                setSkills([...skills.slice(1), firstSkill]);
                setSlideIndex(0);
            }, 500); // match the transition duration
        }
    }, [slideIndex, skills]);

    // useEffect(() => {
    //     const timelimit = setInterval(() => {
    //         skills.filter(0)
    //         console.log(skills);
    //     }, 2000);

    //     return () => clearInterval(timelimit);
    // }, []);

  return (
    <div className='home flex items-center flex-col'>
        <div className='herosection w-full h-screen flex items-center flex-col bg-black'>
            <div className='flex flex-col items-center justify-end h-96 bg-white w-full'>
                <div className='grid grid-cols-2 w-2/3 gap-80'>
                    <p className='text-left p-4'>
                        Full-Stack Web Developer | UI/UX Designer | Startup Dreamer
                    </p>
                    <p className='text-right p-4'>
                    I design and build modern websites and web apps with clean code and beautiful UI 
                    </p>
                </div>
                <div className='w-2/3 flex items-center justify-between'>
                    
                    <button className='resumedownload'>Download Resume</button>
                    <h1 className='homecreative font-bold text-center text-9xl -mb-10'>
                        CREATIVE
                    </h1>
                    <div className='flex items-center justify-end gap-1 bg-black rounded-full py-1 px-2 border-none relative'>
                        <span className={`bg-white w-8 h-5/6 absolute top-0 rounded-b-sm transition-all ${socialanimation === 1 ? 'left-11' : socialanimation === 2 ? 'left-20': socialanimation === 3 ? 'left-30': 'left-2'}`}></span>
                        <i className={`bi bi-facebook  text-2xl px-1 rounded-sm rounded-t-none z-10 cursor-pointer ${socialanimation === 0 ? ' text-black transition-all -translate-y-1' : 'text-white'}`} onClick={() => setSocialAnimation(0)}></i>
                        <i className={`bi bi-linkedin  text-2xl px-1 rounded-sm rounded-t-none z-10 cursor-pointer ${socialanimation === 1 ? ' text-black transition-all -translate-y-1' : 'text-white'}`} onClick={() => setSocialAnimation(1)}></i>
                        <i className={`bi bi-telegram  text-2xl px-1 rounded-sm rounded-t-none z-10 cursor-pointer ${socialanimation === 2 ? ' text-black transition-all -translate-y-1' : 'text-white'}`} onClick={() => setSocialAnimation(2)}></i>
                        <i className={`bi bi-github  text-2xl px-1  rounded-sm rounded-t-none z-10 cursor-pointer ${socialanimation === 3 ? ' text-black transition-all -translate-y-1' : 'text-white'}`} onClick={() => setSocialAnimation(3)}></i>
                    </div>
                </div>
            </div>
            <div className='relative w-3/5 h-3/5 flex items-center justify-center -mt-48 '>
                <img src={portimg} alt='Portfolio' className='w-1/3 mx-auto' />
                <h1 className='font-bold text-center text-9xl text-white absolute bottom-0'>
                    DEVELOPER
                </h1>
            </div>
        </div>
        
        <div className='bio w-full h-screen bg-white flex items-center justify-center flex-col'>
            <div className='flex items-center justify-center gap-1'>
                <h1 className='text-2xl font-bold text-center'>With a strong foundation in front-end and back-end development </h1>
                <img src={image1} alt='image1' className='h-14 w-20 rounded-sm object-cover object-center hover:rotate-6'></img>
            </div>
            <div className='flex items-center justify-center gap-1'>
                <h1 className='text-2xl font-bold text-center'>Not only on functionality but also </h1>
                <img src={image1} alt='image1' className='h-14 w-20 rounded-sm object-cover object-center hover:rotate-6'></img>
                <h1 className='text-2xl font-bold text-center'>on clean design and performance that scales </h1>
            </div>
            <div className='flex items-center justify-center gap-1'>
                <img src={image1} alt='image1' className='h-14 w-20 rounded-sm object-cover object-center hover:rotate-6'></img>
                <h1 className='text-2xl font-bold text-center'>From concept and design to deployment and scaling</h1>
            </div>
            <div className='flex items-center justify-center gap-1'>
                <h1 className='text-2xl font-bold text-center'>I create seamless web applications </h1>
                <img src={image1} alt='image1' className='h-14 w-20 rounded-sm object-cover object-center hover:rotate-6'></img>
                <h1 className='text-2xl font-bold text-center'>that bring ideas to life </h1>
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

    My journey started in Myanmar, where I developed strong problem-solving skills, and now continues in Korea, where I aim to expand my expertise and connect with global opportunities.
                    </p>
                </div> 
                <a className="fancy" href="#">
                    <span className="top-key"></span>
                    <span className="text">Download My CV</span>
                    <span className="bottom-key-1"></span>
                    <span className="bottom-key-2"></span>
                </a>
                <div className='flex items-center justify-between gap-5'>
                    <div className='flex flex-col items-center justify-between gap-2 border-orange-500 border-2 pt-3 pb-3 px-5 rounded-sm bg-orange-500'>
                        <h1 className='text-white'>20+</h1>
                        <p className='text-white'>Website Development</p>
                    </div>
                    <div className='flex flex-col items-center justify-between gap-2 border-orange-500 border-2 pt-3 pb-3 px-5 rounded-sm'>
                        <h1 className='text-white'>30+</h1>
                        <p className='text-white'>Website Designs</p>
                    </div>
                </div>
            </div>
        </div>

        <div className='skill w-full h-screen bg-black flex items-center justify-center flex-col gap-5'>
            <h1 className='font-semibold text-white text-4xl'>My <span className='text-orange-500'>SKILLS</span></h1>
            <div className='flex items-center justify-center gap-5 border-orange-500 border-b-2 pt-3 pb-5 px-5 rounded-sm'>
                <div
                    className='skills-slider flex gap-5'
                    style={{
                        transform: `translateX(-${slideIndex * 80}px)`,
                        transition: slideIndex === 1 ? 'transform 0.5s cubic-bezier(.77,0,.18,1)' : 'none'
                    }}
                >
                {
                    skills.map((skill, index) => (
                        <img
                            key={index}
                            src={skill.imagesrc}
                            alt={`Skill ${index}`}
                            className={`skillimage h-12 w-14 rounded-sm object-cover object-center opacity-20 transition-all duration-500
                                ${index === 0 && slideIndex === 0 ? 'scale-125 opacity-100 z-20' : ''}
                            `}
                        />
                    ))
                }
                </div>
            </div>
            <div className='grid grid-cols-2 w-2/3 justify-center items-center gap-7'>
                <div className='flex items-end justify-end w-full h-full bg-white' style={{ backgroundImage: `url(${skills[0].imagesrc})`, backgroundSize: 'cover', backgroundPosition: 'center' }}>
                    <div className='w-full h-1/4 bg-black bg-opacity-50 flex items-start justify-center flex-col p-3'>
                        <h1 className='text-white font-semibold capitalize'>{skills[0].name}</h1>
                        <p className='text-white text-sm font-light'>{skills[0].description}</p>
                    </div>
                </div>
                <div className='flex items-center justify-between gap-5 flex-col text-white '>
                    <div className='flex items-start justify-start gap-3 flex-col'>
                        <h1 className='font-semibold text-xl text-orange-500'>Front-End</h1>
                        <p className='font-light'>HTML, CSS, JavaScript, React.js, Tailwind CSS, WordPress, Elementor, Bricks Builder
, Figma (UI/UX Design)</p>
                    </div>
                    <div className='flex items-start justify-start gap-3 flex-col'>
                        <h1 className='font-semibold text-xl text-orange-500'>Back-End & Tools</h1>
                        <p className='font-light'>- Node.js, Express.js, MongoDB, Firebase (Firestore, Auth, Storage)
,Git & GitHub, REST APIs</p>
                    </div>
                    <div className='flex items-start justify-start gap-3 flex-col'>
                        <h1 className='font-semibold text-xl text-orange-500'>Other</h1>
                        <p className='font-light'>- Responsive Web Design
,Authentication (Firebase Auth, JWT basics)
, Realtime Apps (Chat, Live Data)
, Project Management Tools (Trello, Notion)</p>
                    </div>
                </div>
            </div>
        </div>

        <div className='biggestproject w-full h-screen  flex items-center justify-center flex-col gap-5'>
            <h1 className='font-semibold text-white text-4xl'>Featured <span className='text-orange-500'>PROJECTS</span></h1>
            <p className='text-white text-center w-2/3'>I have worked on various projects, including personal websites, eCommerce platforms, and web applications. Here are some of my notable projects:</p>
            <div className='flex w-2/3 justify-center items-center gap-5 '>
                <div className="selfprojectparent">
                    <div className="selfpjcard">
                        <div className="selfpjcontent-box" style={{ backgroundImage: `url(${webdevmm})`, backgroundSize: 'cover', backgroundPosition: 'center' }}>
                            <span className="selfpjcard-title">Webdevmm</span>
                            <p className="selfpjcard-content">
                                An agency website built to showcase professional web design and development services. It includes service offerings like custom websites, eCommerce, and Figma design, aimed at helping businesses build their online presence
                            </p>
                            <span className="selfpjsee-more">See More</span>
                        </div>
                        <div className="selfpjdate-box">
                            <span className="selfpjmonth">AGENCY</span>
                            <span className="selfpjdate">webdevmm</span>
                        </div>
                    </div>
                </div>
                <div className="selfprojectparent">
                    <div className="selfpjcard">
                        <div className="selfpjcontent-box" style={{ backgroundImage: `url(${themark})`, backgroundSize: 'cover', backgroundPosition: 'center' }}>
                        <span className="selfpjcard-title">The Mark</span>
                        <p className="selfpjcard-content">
                            A full-featured eCommerce solution inspired by global platforms. It allows sellers to upload products, buyers to purchase securely, and integrates chat features with Firebase to connect users and the support team
                        </p>
                        <span className="selfpjsee-more">See More</span>
                        </div>
                        <div className="selfpjdate-box border-orange-500">
                        <span className="selfpjmonth">ECOMMERCE</span>
                        <span className="selfpjdate">The-Mark</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>

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

            <div className='grid grid-cols-2 justify-center items-center gap-4 w-full h-full'>
                
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
            <div className='grid grid-cols-3 justify-center items-center gap-4 w-full h-2/3'>
                <div className='portfoliocard w-full h-full' id='card'>
                    <div className='content flex items-start justify-end rounded-sm relative p-6' style={{ backgroundImage: `url(${website3})`, backgroundSize: 'cover', backgroundPosition: 'center' }}>
                        <span className='bg-black opacity-30 h-full w-full z-0 absolute top-0 left-0 cursor-pointer hover:opacity-0'></span>
                        <p className='text-white px-5 bg-gray-600 py-2 rounded-full'>Full stack development</p>
                    </div>
                </div>
                <div className='portfoliocard w-full h-full' id='card'>
                    <div className='content flex items-start justify-end rounded-sm relative p-6' style={{ backgroundImage: `url(${website4})`, backgroundSize: 'cover', backgroundPosition: 'center' }}>
                        <span className='bg-black opacity-30 h-full w-full z-0 absolute top-0 left-0 cursor-pointer hover:opacity-0'></span>
                        <p className='text-white px-5 bg-gray-600 py-2 rounded-full'>Full stack development</p>
                    </div>
                </div>
                <div className='portfoliocard w-full h-full' id='card'>
                    <div className='content flex items-start justify-end rounded-sm relative p-6' style={{ backgroundImage: `url(${website5})`, backgroundSize: 'cover', backgroundPosition: 'center' }}>
                        <span className='bg-black opacity-30 h-full w-full z-0 absolute top-0 left-0 cursor-pointer hover:opacity-0'></span>
                        <p className='text-white px-5 bg-gray-600 py-2 rounded-full'>Full stack development</p>
                    </div>
                </div>
            </div>
        </div>

        <div className='contact w-full h-screen flex items-center justify-center gap-36'>
            <div className='contact-info flex items-center justify-center gap-6 flex-col'>
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
                        <span className={`bg-black w-8 h-5/6 absolute top-0 rounded-b-sm transition-all ${socialanimation === 1 ? 'left-11' : socialanimation === 2 ? 'left-20': socialanimation === 3 ? 'left-30': 'left-2'}`}></span>
                        <i className={`bi bi-facebook  text-2xl px-1 rounded-sm rounded-t-none z-10 cursor-pointer ${socialanimation === 0 ? ' text-white transition-all -translate-y-1' : 'text-black'}`} onClick={() => setSocialAnimation(0)}></i>
                        <i className={`bi bi-linkedin  text-2xl px-1 rounded-sm rounded-t-none z-10 cursor-pointer ${socialanimation === 1 ? ' text-white transition-all -translate-y-1' : 'text-black'}`} onClick={() => setSocialAnimation(1)}></i>
                        <i className={`bi bi-telegram  text-2xl px-1 rounded-sm rounded-t-none z-10 cursor-pointer ${socialanimation === 2 ? ' text-white transition-all -translate-y-1' : 'text-black'}`} onClick={() => setSocialAnimation(2)}></i>
                        <i className={`bi bi-github  text-2xl px-1  rounded-sm rounded-t-none z-10 cursor-pointer ${socialanimation === 3 ? ' text-white transition-all -translate-y-1' : 'text-black'}`} onClick={() => setSocialAnimation(3)}></i>
                    </div>
            </div>
            <div className="form-container flex items-center justify-center">
            <form className="contact-form">
                <div className="contact-form-control">
                    <input type="contact-text" required />
                    <label>
                        {['N', 'a', 'm', 'e'].map((letter, index) => (
                        <span key={index} style={{ transitionDelay: `${index * 50}ms` }}>
                            {letter}
                        </span>
                        ))}
                    </label>
                </div>
                <div className="contact-form-control">
                    <input type="contact-text" required />
                    <label>
                        {['E', 'm', 'a', 'i', 'l'].map((letter, index) => (
                        <span key={index} style={{ transitionDelay: `${index * 50}ms` }}>
                            {letter}
                        </span>
                        ))}
                    </label>
                </div>
                <div className="contact-form-control">
                    <textarea rows="4" required></textarea>
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
    </div>
  )
}

export default Home