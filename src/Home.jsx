import React, { useEffect, useState } from 'react';
import portimg from'./assets/portimg.png';
import image1 from './assets/bioimages/image1.jpg';
import aboutimage from './assets/aboutnobg.png';
import { html ,css, javascript, react, tailwind, firebase, nodejs, mongodb, figma, wordpress, express,github } from './assets/skillsimages/skillsimagesexport';
import './App.css';

const Home = () => {
    const [socialanimation, setSocialAnimation] = useState(0);
    const [skills, setSkills] = useState([html, css, javascript, tailwind, react, firebase, nodejs, express, mongodb, figma, wordpress,github]);
    const [slideIndex, setSlideIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            socialanimation < 3 ? setSocialAnimation((prev) => prev + 1) : setSocialAnimation(0);
            setSlideIndex((prev) => prev + 1);
        }, 4000);

        return () => clearInterval(interval);
    }, []);

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
                <h1 className='text-2xl font-bold text-center'>Neque porro quisquam est qui dolorem ipsum </h1>
                <img src={image1} alt='image1' className='h-14 w-20 rounded-sm object-cover object-center hover:rotate-6'></img>
            </div>
            <div className='flex items-center justify-center gap-1'>
                <h1 className='text-2xl font-bold text-center'>Neque porro quisquam</h1>
                <img src={image1} alt='image1' className='h-14 w-20 rounded-sm object-cover object-center hover:rotate-6'></img>
                <h1 className='text-2xl font-bold text-center'>est qui dolorem ipsum </h1>
            </div>
            <div className='flex items-center justify-center gap-1'>
                <img src={image1} alt='image1' className='h-14 w-20 rounded-sm object-cover object-center hover:rotate-6'></img>
                <h1 className='text-2xl font-bold text-center'>Neque porro quisquam est qui dolorem ipsum </h1>
            </div>
            <div className='flex items-center justify-center gap-1'>
                <h1 className='text-2xl font-bold text-center'>Neque porro quisquam</h1>
                <img src={image1} alt='image1' className='h-14 w-20 rounded-sm object-cover object-center hover:rotate-6'></img>
                <h1 className='text-2xl font-bold text-center'>est qui dolorem ipsum </h1>
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
                            src={skill}
                            alt={`Skill ${index}`}
                            className={`skillimage h-12 w-14 rounded-sm object-cover object-center opacity-20 transition-all duration-500
                                ${index === 0 && slideIndex === 0 ? 'scale-125 opacity-100 z-20' : ''}
                            `}
                        />
                    ))
                }
                </div>
            </div>
            <div className='grid grid-cols-2 w-2/3 justify-center items-center'>
                <div>
                    <img src={skills[0]} className='h-80 w-96 object-cover object-center rounded-sm'></img>
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
    </div>
  )
}

export default Home