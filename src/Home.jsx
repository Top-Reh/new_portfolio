import React, { useEffect, useRef, useState } from 'react';
import './App.css';
import portimg from './assets/mysitnobg.png';
import image1 from './assets/bioimages/image1.jpg';
import aboutimage from './assets/mystandingnobg.png';
import { html, css, javascript, react, tailwind, firebase, nodejs, mongodb, figma, wordpress, express, github } from './assets/skillsimages/skillsimagesexport';
import { themark, webdevmm } from './assets/selfprojects/selfprojects';
import { Link, useLocation } from 'react-router-dom';
import { koreaagencyhomesection,portfolioherosection, hotelhomesection, hoodieherosection, travelherosection } from './assets/designs/designs';
import gsap from 'gsap';
import Swal from 'sweetalert2';

const Home = () => {
  const [socialanimation, setSocialAnimation] = useState(0);
    const [singleData, setSingleData] = useState(null);
  const [skills, setSkills] = useState([
    { name: "react js", imagesrc: react, description: '– Develop fast, scalable, and user-friendly front-end interfaces' },
    { name: "nodejs", imagesrc: nodejs, description: '– Build powerful, server-side applications with scalability' },
    { name: "express", imagesrc: express, description: '– Develop secure and efficient APIs' },
    { name: "javascript", imagesrc: javascript, description: '– Add interactivity and dynamic features to applications' },
    { name: "tailwind", imagesrc: tailwind, description: '– Create modern, responsive designs with efficiency' },
    { name: "firebase", imagesrc: firebase, description: '– Handle authentication, real-time databases, and hosting' },
    { name: "mongodb", imagesrc: mongodb, description: '– Design and manage flexible, document-based databases' },
    { name: "figma", imagesrc: figma, description: '– Design user-friendly interfaces and collaborate on UI/UX' },
    { name: "wordpress", imagesrc: wordpress, description: '– Build and customize websites with speed and flexibility' },
    { name: "github", imagesrc: github, description: '– Manage version control and collaborate on projects effectively' },
    { name: "html", imagesrc: html, description: '– Build structured, accessible, and SEO-friendly websites' },
    { name: "css", imagesrc: css, description: '– Design responsive, elegant, and modern layouts' },
  ]);
  const [data, setData] = useState([{id:1, type:"Design", imageUrl:portfolioherosection, title:'Photographer Portfolio', description:'A sleek and modern portfolio website for a professional photographer to showcase their work and attract potential clients.'},
          {id:2, type:"Design", imageUrl:hotelhomesection, title:'Hotel Booking Website', description:'A comprehensive hotel booking website with room availability, pricing details, and secure payment options.'},
    {id:3, type:'Design', imageUrl:hoodieherosection, title:'Hoodie Shop', description:'A comprehensive e-commerce platform for selling hoodies, featuring user authentication, product management, and a secure payment gateway.'},
      {id:4, type:'Design', imageUrl:travelherosection, title:'Travel Agency Website', description:'A visually appealing and user-friendly website for a travel agency, showcasing various travel packages, destinations, and customer testimonials.'},
    { id: 5, type: 'Design', imageUrl: koreaagencyhomesection, title: 'Korea School Website Design', description: 'A creative and engaging website design for a language school specializing in teaching Korean, featuring course information and enrollment options.' }
    
  ]);
  const [slideIndex, setSlideIndex] = useState(0);
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

  // Single refs
  const topheroslide = useRef(null);
  const bottomheroslide = useRef(null);
  const leftheroslide = useRef(null);
  const rightheroslide = useRef(null);
  const socialslide = useRef(null);
  const aboutimageslide = useRef(null);
  const aboutcapslide = useRef(null);
  const aboutoverlayslide = useRef(null);
  const skillheaderslide = useRef(null);
  const skillsetsslide = useRef(null);
  const skilldescriptionslide = useRef(null);
  const skillimageslide = useRef(null);
  const featuredprojectsheaderslide = useRef(null);
  const featuredprojectssubheaderslide = useRef(null);
  const featuredprojectsslide = useRef(null);
  const recentworksslide = useRef(null);

  // Arrays of refs for dynamic/animated elements
  const biotextslides = useRef([]);
  const biotextimages = useRef([]);
  const recentworksSlides = useRef([]);

  // Bio text/image data for dynamic rendering
  const bioBlocks = [
    {
      type: 'text-image',
      text: 'With a strong foundation in front-end and back-end development',
      img: image1,
    },
    {
      type: 'text-image-text',
      text1: 'Not only on functionality but also',
      img: image1,
      text2: 'on clean design and performance that scales',
    },
    {
      type: 'image-text',
      img: image1,
      text: 'From concept and design to deployment and scaling',
    },
    {
      type: 'text-image-text',
      text1: 'I create seamless web applications',
      img: image1,
      text2: 'that bring ideas to life',
    },
  ];

  useEffect(() => {
    // Animate hero section
    gsap.fromTo(topheroslide.current, { y: -50, opacity: 0 }, { y: 0, opacity: 1, duration: 1 });
    gsap.fromTo(bottomheroslide.current, { y: 50, opacity: 0 }, { y: 0, opacity: 1, duration: 1 });
    gsap.fromTo(leftheroslide.current, { x: -50, opacity: 0 }, { x: 0, opacity: 1, duration: 1.5 });
    gsap.fromTo(rightheroslide.current, { x: 50, opacity: 0 }, { x: 0, opacity: 1, duration: 1.5 });
    gsap.fromTo(socialslide.current, { x: 100, opacity: 0 }, { x: 0, opacity: 1, duration: 1.5 });

    // Animate bio section
    gsap.from(biotextslides.current.filter(Boolean).slice(0, 1).concat(biotextslides.current.filter(Boolean).slice(4, 5)), { x: -100, opacity: 0 });
    gsap.from(biotextslides.current.filter(Boolean).slice(1, 4).concat(biotextslides.current.filter(Boolean).slice(5, 6)), { x: 100, opacity: 0 });
    gsap.from(biotextimages.current.filter(Boolean), { scale: 0, opacity: 0 });

    // Animate about section
    gsap.from(aboutimageslide.current, { x: -100, opacity: 0, duration: 1.5 });
    gsap.from(aboutcapslide.current, { opacity: 0, duration: 1.5 });
    gsap.from(aboutoverlayslide.current, { width: '100%' });

    // Animate skills section
    gsap.from([skilldescriptionslide.current, skillheaderslide.current, skillsetsslide.current, skillimageslide.current], { y: 100, opacity: 0 });

    // Animate featured projects
    gsap.from([featuredprojectsheaderslide.current, featuredprojectsslide.current, featuredprojectssubheaderslide.current], { y: 100, opacity: 0 });

    // Animate recent works
    gsap.from([recentworksslide.current, ...recentworksSlides.current.filter(Boolean)], { opacity: 0, scale: 0 });
    gsap.to(recentworksSlides.current.filter(Boolean), 2, {
      scale: 1,
      opacity: 1,
      duration: 2,
      scrollTrigger: {
        trigger: recentworksslide.current,
        start: "top 80%",
      }
    });
    gsap.to(recentworksslide.current, 1, {
      scale: 1,
      opacity: 1,
      duration: 1,
      scrollTrigger: {
        trigger: recentworksslide.current,
        start: "top 80%",
      }
    });

    // Animate featured project slide
    gsap.to(featuredprojectsslide.current, 2, {
      y: 0,
      opacity: 1,
      duration: 1,
      scrollTrigger: {
        trigger: featuredprojectsslide.current,
        start: "top 80%",
      }
    });
    gsap.to([featuredprojectsheaderslide.current, featuredprojectssubheaderslide.current], 1, {
      y: 0,
      opacity: 1,
      duration: 1,
      scrollTrigger: {
        trigger: featuredprojectsheaderslide.current,
        start: "top 80%",
      }
    });

    // Animate skills
    gsap.to([skillimageslide.current, skilldescriptionslide.current], 3, {
      y: 0,
      opacity: 1,
      duration: 1,
      scrollTrigger: {
        trigger: skillimageslide.current,
        start: "top 80%",
      }
    });
    gsap.to(skillsetsslide.current, 2, {
      y: 0,
      opacity: 1,
      duration: 1,
      scrollTrigger: {
        trigger: skillsetsslide.current,
        start: "top 80%",
      }
    });
    gsap.to(skillheaderslide.current, 1, {
      y: 0,
      opacity: 1,
      duration: 1,
      scrollTrigger: {
        trigger: skillheaderslide.current,
        start: "top 80%",
      }
    });

    // Animate about overlay
    gsap.to(aboutoverlayslide.current, 3, {
      width: 0,
      duration: 2.5,
      ease: "power3.out",
      scrollTrigger: {
        trigger: aboutoverlayslide.current,
        start: "top 100%",
      }
    });
    gsap.to(aboutcapslide.current, 2, {
      opacity: 1,
      duration: 1.5,
      scrollTrigger: {
        trigger: aboutcapslide.current,
        start: "top 80%",
      }
    });
    gsap.to(aboutimageslide.current, {
      x: 0,
      opacity: 1,
      duration: 1.5,
      scrollTrigger: {
        trigger: aboutimageslide.current,
        start: "top 80%",
      }
    });

    // Animate bio text/images individually
    biotextslides.current.filter(Boolean).forEach((slide) => {
      gsap.to(slide, {
        x: 0,
        opacity: 1,
        duration: 1,
        scrollTrigger: {
          trigger: slide,
          start: "top 80%",
        }
      });
    });
    biotextimages.current.filter(Boolean).forEach((img) => {
      gsap.to(img, {
        scale: 1,
        opacity: 1,
        duration: 1,
        scrollTrigger: {
          trigger: img,
          start: "top 80%",
        }
      });
    });
  }, []);

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
        const firstSkill = skills[0];
        setSkills([...skills.slice(1), firstSkill]);
        setSlideIndex(0);
      }, 500);
    }
  }, [slideIndex, skills]);

  return (
    <div className='home flex items-center flex-col'>
      <div className='herosection w-full h-screen flex items-center flex-col bg-black'>
        <div className='flex flex-col items-center justify-end h-96 bg-white w-full' ref={topheroslide}>
          <div className='grid grid-cols-2 w-2/3 gap-80'>
            <p className='text-left p-4' ref={leftheroslide}>
              Full-Stack Web Developer | UI/UX Designer | Startup Dreamer
            </p>
            <p className='text-right p-4 ' ref={rightheroslide}>
              I design and build modern websites and web apps with clean code and beautiful UI
            </p>
          </div>
          <div className='w-2/3 flex items-center justify-between'>
            <button className='resumedownload ' ref={leftheroslide}>Download Resume</button>
            <h1 className='homecreative font-bold text-center text-9xl -mb-10 '>
              CREATIVE
            </h1>
            <div className='flex items-center justify-end gap-1 bg-black rounded-full py-1 px-2 border-none relative socialanimation'  ref={socialslide}>
              <a
  href="https://facebook.com/profile.php?id=100070858609953&mibextid=ZbWKwL"
  target="_blank"
  rel="noopener noreferrer"
  className={`relative z-10 ${socialanimation === 0 ? ' text-black transition-all -translate-y-1' : 'text-white'}`}
> <i className={`bi bi-facebook  text-2xl px-1 rounded-sm rounded-t-none socialanimation cursor-pointer ${socialanimation === 0 ? ' text-black transition-all -translate-y-1' : 'text-white'}`} onClick={() => setSocialAnimation(0)}></i></a>
              <a
  href="https://facebook.com/profile.php?id=100070858609953&mibextid=ZbWKwL"
  target="_blank"
  rel="noopener noreferrer"
  className={`relative z-10 ${socialanimation === 1 ? ' text-black transition-all -translate-y-1' : 'text-white'}`}
><i className={`bi bi-linkedin  text-2xl px-1 rounded-sm rounded-t-none socialanimation cursor-pointer ${socialanimation === 1 ? ' text-black transition-all -translate-y-1' : 'text-white'}`} onClick={() => setSocialAnimation(1)}></i></a>              
              <a
  href="https://facebook.com/profile.php?id=100070858609953&mibextid=ZbWKwL"
  target="_blank"
  rel="noopener noreferrer"
  className={`relative z-10 ${socialanimation === 2 ? ' text-black transition-all -translate-y-1' : 'text-white'}`}
> <i className={`bi bi-telegram  text-2xl px-1 rounded-sm rounded-t-none socialanimation cursor-pointer ${socialanimation === 2 ? ' text-black transition-all -translate-y-1' : 'text-white'}`} onClick={() => setSocialAnimation(2)}></i></a>              
              <a
  href="https://facebook.com/profile.php?id=100070858609953&mibextid=ZbWKwL"
  target="_blank"
  rel="noopener noreferrer"
  className={`relative z-10 ${socialanimation === 3 ? ' text-black transition-all -translate-y-1' : 'text-white'}`}
> <i className={`bi bi-github  text-2xl px-1  rounded-sm rounded-t-none socialanimation cursor-pointer ${socialanimation === 3 ? ' text-black transition-all -translate-y-1' : 'text-white'}`} onClick={() => setSocialAnimation(3)}></i></a>
              
              
              
              <span className={`bg-white w-8 h-5/6 absolute top-0 rounded-b-sm transition-all pointer-events-none ${socialanimation === 1 ? 'left-11' : socialanimation === 2 ? 'left-20' : socialanimation === 3 ? 'left-30' : 'left-2'}`} ></span>
             
            </div>
          </div>
        </div>
        <div className='relative w-3/5  flex items-center justify-center  ' ref={bottomheroslide}>
          <img src={portimg} alt='Portfolio' className='mx-auto -mt-52' style={{width:'800px'}}/>
          <h1 className='font-bold text-center text-9xl text-white absolute bottom-0'>
            DEVELOPER
          </h1>
        </div>
      </div>

      <div className='bio w-full h-screen bg-white flex items-center justify-center flex-col'>
        {bioBlocks.map((block, idx) => {
          if (block.type === 'text-image') {
            return (
              <div className='flex items-center justify-center gap-1' key={idx}>
                <h1 className='text-2xl font-bold text-center biotext' ref={el => (biotextslides.current[idx] = el)}>{block.text}</h1>
                <img src={block.img} alt='bio' className='h-14 w-20 rounded-sm object-cover object-center hover:rotate-6' ref={el => (biotextimages.current[idx] = el)} />
              </div>
            );
          }
          if (block.type === 'text-image-text') {
            return (
              <div className='flex items-center justify-center gap-1' key={idx}>
                <h1 className='text-2xl font-bold text-center' ref={el => (biotextslides.current[idx * 2] = el)}>{block.text1}</h1>
                <img src={block.img} alt='bio' className='h-14 w-20 rounded-sm object-cover object-center hover:rotate-6' ref={el => (biotextimages.current[idx] = el)} />
                <h1 className='text-2xl font-bold text-center' ref={el => (biotextslides.current[idx * 2 + 1] = el)}>{block.text2}</h1>
              </div>
            );
          }
          if (block.type === 'image-text') {
            return (
              <div className='flex items-center justify-center gap-1' key={idx}>
                <img src={block.img} alt='bio' className='h-14 w-20 rounded-sm object-cover object-center hover:rotate-6' ref={el => (biotextimages.current[idx] = el)} />
                <h1 className='text-2xl font-bold text-center' ref={el => (biotextslides.current[idx] = el)}>{block.text}</h1>
              </div>
            );
          }
          return null;
        })}
      </div>

      <div className='about w-full h-screen bg-black grid grid-cols-[1fr_2fr]'>
        <div className='w-full h-full flex items-center justify-center '>
          <img src={aboutimage} alt='About Me' className=' object-cover h-full  w-1/2' style={{objectPosition:'29%'}} ref={aboutimageslide} />
          <h1 className='abouttitle bg-red-500' ref={aboutcapslide}>AB OU T ME</h1>
        </div>
        <div className='relative w-full h-full py-5 pr-60 px-10 flex items-start justify-center flex-col gap-7'>
          <div className='w-full h-full absolute bg-orange-500' ref={aboutoverlayslide}></div>
          <h1 className='font-semibold text-white text-4xl'><span className='text-orange-500'>WHO</span> AM I?</h1>
          <div className='flex items-start justify-start gap-5'>
            <span className='h-full w-2 bg-orange-500 '></span>
            <p className='text-white leading-8'>
              I’m a 19-year-old full-stack developer currently based in South Korea 🇰🇷, passionate about building scalable web apps and beautiful user experiences. I specialize in modern technologies such as React, Tailwind, Firebase, Node.js, and MongoDB.

I founded WebDevMM, a small agency where I helped local businesses go digital. From landing pages to complete eCommerce systems and dashboards, I’ve delivered solutions that take products from idea to deployment.

My journey began in Myanmar 🇲🇲, where I built strong problem-solving skills, and now continues in Korea, where I’m expanding my expertise and seeking global opportunities.
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
        <h1 className='font-semibold text-white text-4xl' ref={skillheaderslide}>My <span className='text-orange-500'>SKILLS</span></h1>
        <div className='flex items-center justify-center gap-5 border-orange-500 border-b-2 pt-3 pb-5 px-5 rounded-sm' ref={skillsetsslide}>
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
          <div className='flex items-end justify-end w-full h-full bg-white' style={{ backgroundImage: `url(${skills[0].imagesrc})`, backgroundSize: 'cover', backgroundPosition: 'center' }} ref={skillimageslide}>
            <div className='w-full h-1/4 bg-black bg-opacity-50 flex items-start justify-center flex-col p-3'>
              <h1 className='text-white font-semibold capitalize'>{skills[0].name}</h1>
              <p className='text-white text-sm font-light'>{skills[0].description}</p>
            </div>
          </div>
          <div className='flex items-center justify-between gap-5 flex-col text-white ' ref={skilldescriptionslide}>
            <div className='flex items-start justify-start gap-3 flex-col'>
              <h1 className='font-semibold text-xl text-orange-500'>Front-End</h1>
              <p className='font-light'>HTML, CSS, JavaScript, React.js, Tailwind CSS, WordPress, Elementor, Bricks Builder, Figma (UI/UX Design)</p>
            </div>
            <div className='flex items-start justify-start gap-3 flex-col'>
              <h1 className='font-semibold text-xl text-orange-500'>Back-End & Tools</h1>
              <p className='font-light'>- Node.js, Express.js, MongoDB, Firebase (Firestore, Auth, Storage), Git & GitHub, REST APIs</p>
            </div>
            <div className='flex items-start justify-start gap-3 flex-col'>
              <h1 className='font-semibold text-xl text-orange-500'>Other</h1>
              <p className='font-light'>- Responsive Web Design, Authentication (Firebase Auth, JWT basics), Realtime Apps (Chat, Live Data), Project Management Tools (Trello, Notion)</p>
            </div>
          </div>
        </div>
      </div>

      <div className='biggestproject w-full h-screen  flex items-center justify-center flex-col gap-5'>
        <h1 className='font-semibold text-white text-4xl' ref={featuredprojectsheaderslide}>Featured <span className='text-orange-500'>PROJECTS</span></h1>
        <p className='text-white text-center w-2/3' ref={featuredprojectssubheaderslide}>I have worked on various projects, including personal websites, eCommerce platforms, and web applications. Here are some of my notable projects:</p>
        <div className='flex w-2/3 justify-center items-center gap-5 ' ref={featuredprojectsslide}>
          <div className="selfprojectparent">
            <div className="selfpjcard">
              <div className="selfpjcontent-box" style={{ backgroundImage: `url(${webdevmm})`, backgroundSize: 'cover', backgroundPosition: 'center' }}>
                <span className="selfpjcard-title">Webdevmm</span>
                <p className="selfpjcard-content">
                  An agency website built to showcase professional web design and development services. It includes service offerings like custom websites, eCommerce, and Figma design, aimed at helping businesses build their online presence
                </p>
                <a className="selfpjsee-more" href="https://webdevmm.com/">Go to website</a>
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
                <a className="selfpjsee-more" href='https://top-reh.github.io/the-mark/'>Go to website</a>
              </div>
              <div className="selfpjdate-box border-orange-500">
                <span className="selfpjmonth">ECOMMERCE</span>
                <span className="selfpjdate">The-Mark</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className='portfolio w-full bg-black flex items-center justify-center flex-col gap-4 p-5'>
        <h1 className='font-semibold text-white text-4xl mb-2' ref={recentworksslide}>Recent <span className='text-orange-500'>WORKS</span></h1>
        <div className='flex w-full items-center justify-end gap-5 '>
          <button className="portfolio-button ">
            <Link to="/portfolio"><span className="hover-underline-animation"> See more </span></Link>
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
          <div className='homeportfolio gap-4 w-full'>
            {
                data.map((item, idx) => (
                    <div key={item.id} className={`portfoliocard w-full h-full rounded-sm ${'homeportfolio'+item.id}`} id='card' ref={el => (recentworksSlides.current[idx] = el)} onClick={() => setSingleData(item)}>
                        <div className='content flex items-start justify-end rounded-sm relative p-6' style={{ backgroundImage: `url(${item.imageUrl})`, backgroundSize: 'cover', backgroundPosition: 'center' }}>
                            <span className='bg-black opacity-30 h-full w-full z-0 absolute top-0 left-0 cursor-pointer hover:opacity-0'></span>
                            <p className='text-white px-5 bg-gray-600 py-2 rounded-full'>{item.type}</p>
                        </div>
                    </div>
                ))
            }
          {
            singleData && (
              <div className='single-data fixed top-0 left-0 w-full h-full bg-black bg-opacity-80 flex items-center justify-center z-50 overflow-y-scroll pt-96' onClick={() => setSingleData(null)}>
                <div className={`single-data-content bg-white p-5 rounded-lg  w-4/5  `} style={{marginTop: singleData.fulldesignurl ? '265%' : '0px'}} onClick={(e) => e.stopPropagation()}>
                  <img src={singleData.imageUrl} alt={singleData.title} className='w-full h-auto mb-3 rounded'/>
                  <h2 className='text-3xl font-bold mb-3'>{singleData.title}</h2>
                  {
                    singleData.link && <a href={singleData.link} target='_blank' rel='noreferrer' className='text-blue-500 underline mb-3 inline-block'>Visit Website</a>
                  }
                  <p className='text-gray-700'>{singleData.description}</p>
                  {
                    singleData.fulldesignurl && <img src={singleData.fulldesignurl} alt={singleData.title} className='w-full h-auto mt-3 rounded'/>
                  }
                </div>
              </div>
            )
          }
        </div>
      </div>

      <div className='contact w-full h-screen flex items-center justify-center gap-36'>
        <div className='contact-info flex items-center justify-center gap-6 flex-col'>
          <h1 className='font-extrabold text-3xl'>Contact</h1>
          <p className='text-center'>Have a project or idea?<br />I’d love to hear about it and help you bring it to life!</p>
          <div className='flex items-center justify-center gap-2 flex-col'>
            <h2 className='font-bold'>Email</h2>
            <p>topreh86@gmail.com</p>
          </div>
          <div className='flex items-center justify-center gap-2 flex-col'>
            <h2 className='font-bold'>Phone</h2>
            <p>09686890493</p>
          </div>
          <div className='flex items-center justify-end gap-1 bg-white rounded-full py-1 px-2 border-none relative'>
            <span className={`bg-black w-8 h-5/6 absolute top-0 rounded-b-sm transition-all ${socialanimation === 1 ? 'left-11' : socialanimation === 2 ? 'left-20' : socialanimation === 3 ? 'left-30' : 'left-2'}`}></span>
            <i className={`bi bi-facebook  text-2xl px-1 rounded-sm rounded-t-none z-10 cursor-pointer ${socialanimation === 0 ? ' text-white transition-all -translate-y-1' : 'text-black'}`} onClick={() => setSocialAnimation(0)}></i>
            <i className={`bi bi-linkedin  text-2xl px-1 rounded-sm rounded-t-none z-10 cursor-pointer ${socialanimation === 1 ? ' text-white transition-all -translate-y-1' : 'text-black'}`} onClick={() => setSocialAnimation(1)}></i>
            <i className={`bi bi-telegram  text-2xl px-1 rounded-sm rounded-t-none z-10 cursor-pointer ${socialanimation === 2 ? ' text-white transition-all -translate-y-1' : 'text-black'}`} onClick={() => setSocialAnimation(2)}></i>
            <i className={`bi bi-github  text-2xl px-1  rounded-sm rounded-t-none z-10 cursor-pointer ${socialanimation === 3 ? ' text-white transition-all -translate-y-1' : 'text-black'}`} onClick={() => setSocialAnimation(3)}></i>
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
    </div>
  );
};

export default Home;