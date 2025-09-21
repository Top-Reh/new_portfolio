import React, { useEffect, useRef, useState } from 'react';
import kbb from './assets/abouthero.jpg';
import aboutimage from './assets/mystandingnobg.png';
import ScrollProgress from './progressbaraboutme';
import { Link, useLocation } from 'react-router-dom';
import gsap from 'gsap';
import { hotelhomesection, portfolioherosection} from './assets/designs/designs';

const About = () => {
  const [data, setData] = useState([
        {id:1, type:"Design", imageUrl:portfolioherosection, title:'Photographer Portfolio', description:'A sleek and modern portfolio website for a professional photographer to showcase their work and attract potential clients.'},
        {id:2, type:"Design", imageUrl:hotelhomesection, title:'Hotel Booking Website', description:'A comprehensive hotel booking website with room availability, pricing details, and secure payment options.'}]);

  const location = useLocation();
    const [singleData, setSingleData] = useState(null);
  let topheroheaderslide = useRef(null);
  let topheroimageslide = useRef(null);
  let topherodescriptionslide = useRef(null);
  let project1slide = useRef(null);
  let project2slide = useRef(null);
  let aboutimageslide = useRef(null);
  let aboutcapslide = useRef(null);
  let recentworksslide = useRef(null);
  // let recentworks1slide = useRef(null);
  // let recentworks2slide = useRef(null);
  const recentworksSlides = useRef([]);


  useEffect(() => {
    gsap.fromTo(topheroheaderslide, { x: -100, opacity: 0 },{ x: 0, opacity: 1,duration: 1,});
    gsap.fromTo(topheroimageslide, { y: 100, opacity: 0 },{ y: 0, opacity: 1,duration: 1,});
    gsap.fromTo(topherodescriptionslide, { y: -100, opacity: 0 },{ y: 0, opacity: 1,duration: 1.5,});
    gsap.from(project1slide, { opacity: 0,x:-300});
    gsap.from(project2slide, { opacity: 0,x:100});
    gsap.from(aboutimageslide, { x: -100, opacity: 0, duration: 1.5});
    gsap.from(aboutcapslide, { opacity: 0, scale:0});
    // gsap.from([recentworksslide,recentworks1slide,recentworks2slide], { opacity: 0,scale:0 });
    // gsap.to([recentworks1slide,recentworks2slide],2, {
    //     scale:1,
    //     opacity: 1,
    //     scrollTrigger: {
    //         trigger: recentworksslide, // The element to watch for scroll
    //         start: "top 80%", // When the top of the box hits 80% of the viewport
    //     }
    // });
    gsap.to(recentworksslide,1, {
        scale:1,
        opacity: 1,
        scrollTrigger: {
            trigger: recentworksslide, // The element to watch for scroll
            start: "top 80%", // When the top of the box hits 80% of the viewport
        }
        });
    gsap.from([recentworksslide, ...recentworksSlides.current.filter(Boolean)], { opacity: 0, scale: 0 });
    gsap.to(recentworksSlides.current.filter(Boolean), 2, {
      scale: 1,
      opacity: 1,
      scrollTrigger: {
        trigger: recentworksslide,
        start: "top 80%",
      }
    });
    gsap.to(aboutcapslide, { opacity: 1, scale:1, scrollTrigger: {
        trigger: aboutcapslide, // The element to watch for scroll
        start: "top 80%", // When the top of the box hits 80% of the viewport
    }});
    gsap.to(aboutimageslide, { x: 0, opacity: 1, duration: 1.5, scrollTrigger: {
        trigger: aboutimageslide, // The element to watch for scroll
        start: "top 80%", // When the top of the box hits 80% of the viewport
    }});
    gsap.to([project1slide,project2slide], {
        x:0,
        opacity: 1,
        scrollTrigger: {
            trigger: project1slide, // The element to watch for scroll
            start: "top 80%", // When the top of the box hits 80% of the viewport
        }
    });
  },[])

      useEffect(() => {
        window.scrollTo({
          top: 0,
          left: 0,
          behavior: 'smooth'
        });
      }, [location.pathname]);
  return (
    <section className='h-full w-full bg-white relative'>
      <div className="aboutheader w-full h-screen flex items-center justify-around px-5">
        <h1 className='text-9xl font-bold' ref={el => (topheroheaderslide = el)}>ABOUT ME</h1>
        <div className='flex flex-col items-center justify-center text-center gap-7'>
          <p className='w-2/3' ref={el => (topherodescriptionslide = el)}>I’m a 20-year-old full-stack web developer currently based in South Korea 🇰🇷. My journey into tech started with curiosity and quickly grew into a mission: to create impactful digital solutions that combine creativity, functionality, and scalability. I believe technology should not only solve problems but also inspire growth, and that’s the mindset I bring to every project I work on.</p>
          <img src={kbb} alt='kbbimage' className='w-3/5' ref={el => (topheroimageslide = el)}></img>
        </div>
      </div>
      <div className='w-full h-full flex items-center justify-end px-44 bg-black gap-20'>
        <div className="e-card playing" ref={el => (project1slide = el)}>
          <div className="image"></div>
          
          <div className="wave"></div>
          <div className="wave"></div>
          <div className="wave"></div>
          
          <div className="infotop">
            Projects
            <div className="name">21+</div>
          </div>
        </div>
        <div className="e-card playing" ref={el => (project2slide = el)}>
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
            <img src={aboutimage} alt='About Me' className=' object-cover h-full  w-1/2' style={{objectPosition:'29%'}} ref={(el) => (aboutimageslide = el)}/>
            <h1 className='abouttitle bg-red-500' ref={(el) => (aboutcapslide = el)}>AB OU T ME</h1>
        </div>
        <div className='w-full h-full py-5 pr-60 px-10 flex items-start justify-center flex-col gap-7'>
            <h1 className='font-semibold text-white text-4xl'><span className='text-orange-500'>WHO</span> AM I?</h1>
            <div className='flex items-start justify-start gap-5'>
                <span className='h-full w-2 bg-orange-500 '></span>
                <p className='text-white leading-8 '>
                I’m a 20-year-old developer currently based in South Korea 🇰🇷, passionate about building scalable web apps and beautiful user experiences. I specialize in full-stack development using modern technologies like React, Tailwind, Firebase, Node.js, and MongoDB.

I’ve also worked on freelance projects under WebDevMM, where I helped businesses go digital. From landing pages to full eCommerce systems and dashboards, I’ve delivered complete solutions from idea to deployment.

Alongside my studies in Korea, I’m focused on growing as a global developer and contributing to impactful projects.
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
        <h1 className='font-semibold text-white text-4xl mb-2' ref={el =>(recentworksslide = el)}>Recent <span className='text-orange-500'>WORKS</span></h1>
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

        <div className='grid grid-cols-2 justify-center items-center gap-4 w-full h-2/3'>
            {
              data.map((item, idx) => (
                <div key={item.id} className='portfoliocard w-full h-full' id='card' ref={el => (recentworksSlides.current[idx] = el)} onClick={() => setSingleData(item)}>
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
    </section>
  )
}

export default About