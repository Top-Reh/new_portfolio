import React, { useEffect, useRef, useState } from 'react';
import kbb from './assets/abouthero.jpg';
import aboutimage from './assets/mystandingnobg.png';
import ScrollProgress from './progressbaraboutme';
import { Link, useLocation } from 'react-router-dom';
import gsap from 'gsap';
import { themarkhero,
    webdevmmhero,} from './assets/designs/designs';

const About = () => {
  const [data, setData] = useState([
        {id:12, type:'Full stack projects', imageUrl:themarkhero, link:'https://top-reh.github.io/the-mark/', title:'The Mark - E-commerce Website', description:'A full-featured e-commerce platform with user authentication, product listings, shopping cart functionality, and payment integration.'},
          {id:13, type:'Full stack projects', imageUrl:webdevmmhero, link:'https://webdevmm.com/', title:'WebDevMM - Freelance Marketplace', description:'A freelance marketplace connecting clients with skilled web developers for various projects, featuring user profiles, project listings, and secure payment options.'},]);

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

    // Custom hook for breakpoint
    function useBreakpoint() {
      const [width, setWidth] = useState(window.innerWidth);
      useEffect(() => {
        const handleResize = () => setWidth(window.innerWidth);
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
      }, []);
      return width;
    }
  
    const width = useBreakpoint();
  
    // let socialdisplay;
    // if (width < 768) { // desktop
    //   socialdisplay = 'none';
    // }
  
    let objectPosition;
    if (width >= 1280) { // desktop
      objectPosition = '29%';
    } else if (width >= 1024) { // tablet
      objectPosition = '34%';
    } else { // pmobile
      objectPosition = '10%';
    }


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
    <section className='h-full w-full bg-white relative '>
      <div className="aboutheader w-full h-screen flex items-center sm:justify-around justify-center px-5 sm:flex-row flex-col gap-10">
        <h1 className='lg:text-9xl text-7xl font-bold' ref={el => (topheroheaderslide = el)}>ABOUT ME</h1>
        <div className='flex flex-col items-center justify-center text-center gap-7'>
          <p className='lg:w-2/3 sm:w-full text-sm' ref={el => (topherodescriptionslide = el)}>I’m a 20-year-old full-stack web developer currently based in South Korea 🇰🇷. My journey into tech started with curiosity and quickly grew into a mission: to create impactful digital solutions that combine creativity, functionality, and scalability. I believe technology should not only solve problems but also inspire growth, and that’s the mindset I bring to every project I work on.</p>
          <img src={kbb} alt='kbbimage' className='lg:w-3/5 sm:w-full' ref={el => (topheroimageslide = el)}></img>
        </div>
      </div>
      <div className='w-full h-full flex items-center justify-end lg:px-44 px-5 bg-black sm:gap-20 gap-5'>
        <div className="e-card playing" ref={el => (project1slide = el)}>
          <div className="image"></div>
          
          <div className="wave"></div>
          <div className="wave"></div>
          <div className="wave"></div>
          
          <div className="infotop">
            Years of Experience
            <div className="name">3+</div>
          </div>
        </div>
        <div className="e-card playing" ref={el => (project2slide = el)}>
          <div className="image"></div>
          
          <div className="wave"></div>
          <div className="wave"></div>
          <div className="wave"></div>
          
          <div className="infotop">
            Website Developments
            <div className="name">30+</div>
          </div>
        </div>
      </div>
      <div className='about w-full h-screen bg-black sm:grid sm:grid-cols-[2fr_3fr]'>
              <div className='w-full h-full hidden sm:flex items-center justify-end'>
                <img src={aboutimage} alt='About Me' className=' object-cover h-full  w-1/2 ' style={{objectPosition}} ref={(el) => (aboutimageslide = el)}/>
                <h1 className='abouttitle bg-red-500' ref={(el) => (aboutcapslide = el)}>AB OU T ME</h1>
              </div>
              <div className='relative w-full h-full xl:py-5  px-10 flex items-center sm:items-start justify-center flex-col gap-7 '>
                <h1 className='font-semibold text-white text-4xl'><span className='text-orange-500'>WHO</span> AM I?</h1>
                <div className='flex items-start justify-start gap-5'>
                  <span className='h-full w-2 bg-orange-500 '></span>
                  <p className='text-white sm:leading-8 leading-5 lg:text-lg sm:text-sm text-xs'>
                    I’m a 19-year-old full-stack developer currently based in South Korea 🇰🇷, passionate about building scalable web apps and beautiful user experiences. I specialize in modern technologies such as React, Tailwind, Firebase, Node.js, and MongoDB.
      
      I founded WebDevMM, a small agency where I helped local businesses go digital. From landing pages to complete eCommerce systems and dashboards, I’ve delivered solutions that take products from idea to deployment.
      
      My journey began in Myanmar 🇲🇲, where I built strong problem-solving skills, and now continues in Korea, where I’m expanding my expertise and seeking global opportunities.
                  </p>
                </div>
                <a className="fancy" href='/resume.pdf'>
                  <span className="top-key"></span>
                  <span className="text">Download My CV</span>
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

        <div className='sm:grid grid-cols-2 justify-center items-center gap-4 w-full h-2/3 flex flex-col'>
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
