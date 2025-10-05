// import { collection, getDocs, orderBy, query } from '@firebase/firestore';
import React, { useEffect, useRef, useState } from 'react'
// import { db } from './firebase';
import { agency,
    headphoneherosection,
    herofirstsection,
    hoodieherosection,
    hotelhomesection,
    koreaagencyhomesection,
    lamboherosection,
    portfolioherosection,
    travelherosection,
    themarkhero,
    webdevmmhero,
    examappphoto,
    chattingapp,
    admindashboard,
    typingtest,
    receipt,
    guccifront,
    riotfront,
    samsungfront,
    nodecommerce,
    tictactoe,
    nikefront } from './assets/designs/designs';
import {koreaschool,
    headphone,
    hoodieshop,
    photographer,
    travelagency,
    hotel,} from './assets/designs/fulldesigns';
import { useLocation } from 'react-router-dom';
import gsap from 'gsap';

const Portfolio = () => {
  const [data, setData] = useState([
  {id:1, type:"Design", imageUrl:headphoneherosection, title:'Headphone Store Website', description:'An e-commerce website for a headphone store, offering a wide range of audio products with detailed descriptions and customer reviews.',fulldesignurl:headphone},
  {id:2, type:'Design', imageUrl:agency, title:'Creative Agency Website Design', description:'A dynamic and visually stunning website design for a creative agency, highlighting their services, portfolio, and client testimonials.'},
  {id:3, type:'Full stack projects', imageUrl:examappphoto, link:'https://top-reh.github.io/exam-app/', title:'Exam App', description:'A web application that allows users to take timed exams with multiple-choice questions, providing instant feedback and score tracking.'},
  {id:4, type:'Design', imageUrl:lamboherosection, title:'Luxury Car Landing Page', description:'A high-end landing page design for a luxury car brand, focusing on sleek visuals and key features of the vehicles.'},
  {id:5, type:'Design', imageUrl:herofirstsection, title:'E-commerce Platform', description:'A full-featured e-commerce platform with user authentication, product listings, shopping cart functionality, and payment integration.'},
  {id:6, type:'Design', imageUrl:hoodieherosection, title:'Hoodie Shop', description:'A comprehensive e-commerce platform for selling hoodies, featuring user authentication, product management, and a secure payment gateway.',fulldesignurl:hoodieshop},
  {id:22, type:'Frontend projects', imageUrl:nikefront, link:'https://top-reh.github.io/nike-website/', title:'Nike Front Page Redesign', description:'A modern redesign of the Nike front page, focusing on sleek design and user experience.'},
  {id:7, type:'Design', imageUrl:travelherosection, title:'Travel Agency Website', description:'A visually appealing and user-friendly website for a travel agency, showcasing various travel packages, destinations, and customer testimonials.',fulldesignurl:travelagency},
  {id:18, type:'Design', imageUrl:riotfront, link:'https://top-reh.github.io/riotclonebytop/', title:'Riot Games Front Page Redesign', description:'A modern redesign of the Riot Games front page, focusing on gaming aesthetics and user engagement.'},
  {id:8, type:"Design", imageUrl:portfolioherosection, title:'Photographer Portfolio', description:'A sleek and modern portfolio website for a professional photographer to showcase their work and attract potential clients.',fulldesignurl:photographer},
  {id:9, type:'Design', imageUrl:koreaagencyhomesection, title:'Korea School Website Design', description:'A creative and engaging website design for a language school specializing in teaching Korean, featuring course information and enrollment options.',fulldesignurl:koreaschool},
  {id:10, type:"Design", imageUrl:hotelhomesection, title:'Hotel Booking Website', description:'A comprehensive hotel booking website with room availability, pricing details, and secure payment options.',fulldesignurl:hotel},
  {id:21, type:'Frontend projects', imageUrl:tictactoe, link:'https://top-reh.github.io/tictaptoe/', title:'Tic Tac Toe Game', description:'A simple and interactive Tic Tac Toe game built with HTML, CSS, and JavaScript, allowing two players to compete against each other.'},
  {id:19, type:'Design', imageUrl:samsungfront, link:'https://top-reh.github.io/samsungclone/', title:'Samsung Front Page Redesign', description:'A sleek redesign of the Samsung front page, emphasizing modern design principles and user experience.'},
  {id:17, type:'Design', imageUrl:guccifront, link:'https://top-reh.github.io/gucciwebsite/', title:'Gucci Front Page Redesign', description:'A modern redesign of the Gucci front page, focusing on high fashion aesthetics and user experience.'},
  {id:20, type:'Full stack project', imageUrl:nodecommerce, link:'https://github.com/Top-Reh/node-ecommerce', title:'Node Commerce - E-commerce Platform', description:'A full-featured e-commerce platform built with Node.js, featuring user authentication, product listings, shopping cart functionality, and payment integration.'},
  {id:16, type:'Full stack projects', imageUrl:receipt, link:'https://top-reh.github.io/receipt-generator/', title:'Receipt Generator', description:'A web-based receipt generator that allows users to create and customize receipts for their business transactions, complete with itemized lists and total calculations.'},
  {id:15, type:'Full stack projects', imageUrl:typingtest, link:'https://top-reh.github.io/typing-test/', title:'Typing Test Application', description:'A web-based typing test application that measures typing speed and accuracy, providing users with real-time feedback and performance statistics.'},
  {id:11, type:'Full stack projects', imageUrl:chattingapp, link:'https://top-reh.github.io/chatting-app/', title:'Chatting App', description:'A real-time chatting application that allows users to create accounts, join chat rooms, and send instant messages to each other.'},
  {id:14, type:'Full stack projects', imageUrl:admindashboard, link:'https://top-reh.github.io/admindashboard/', title:'Admin Dashboard', description:'A responsive admin dashboard template with various widgets, charts, and data visualization tools for managing web applications.'},
  {id:12, type:'Full stack projects', imageUrl:themarkhero, link:'https://top-reh.github.io/the-mark/', title:'The Mark - E-commerce Website', description:'A full-featured e-commerce platform with user authentication, product listings, shopping cart functionality, and payment integration.'},
  {id:13, type:'Full stack projects', imageUrl:webdevmmhero, link:'https://webdevmm.com/', title:'WebDevMM - Freelance Marketplace', description:'A freelance marketplace connecting clients with skilled web developers for various projects, featuring user profiles, project listings, and secure payment options.'},
]);
  const [filter, setFilter] = useState('All');
  const [singleData, setSingleData] = useState(null);

  
  let topheroheaderslide = useRef(null);
  let topherodescriptionslide = useRef(null);

  useEffect(() => {
    gsap.fromTo(topheroheaderslide, { x: -100, opacity: 0 },{ x: 0, opacity: 1,duration: 1,});
    gsap.fromTo(topherodescriptionslide, { x: 100, opacity: 0 },{ x: 0, opacity: 1,duration: 1.5,});
  },[]);
  
//id
//type
//imageUrl
//title
//description
    const location = useLocation();

      useEffect(() => {
        window.scrollTo({
          top: 0,
          left: 0,
          behavior: 'smooth'
        });
      }, [location.pathname]);

  // useEffect(() => {
  //   const fetchData = async () => {
  //     try {
  //       const q = query(collection(db, "projects"), orderBy("createdAt", "desc"));
  //         const snapshot = await getDocs(q);
  //         const blogs = snapshot.docs.map(doc => ( doc.data()));
  //         setData(pre => ([...pre, ...blogs]));
  //        console.log('data',blogs);
  //     } catch (error) {
  //       console.error("Error fetching data: ", error);
  //     }
  //   }
  //   fetchData();
  // },[]);

  return (
    <div className="portfolio w-full h-full px-5">
      <div className="portfolio-header w-full h-96 flex items-center justify-between px-6">
        <h1 className="text-9xl font-bold text-center" ref={el => (topheroheaderslide = el)}>My Work</h1>
        <p className="text-lg text-gray-700 w-1/2" ref={el => (topherodescriptionslide = el)}>Here are some of the projects I’ve built that reflect my skills, creativity, and problem-solving approach. Each project represents not only technical execution but also my ability to understand real-world needs and deliver meaningful digital solutions. From agency websites to full eCommerce platforms, I aim to create products that are scalable, user-friendly, and impactful.</p>
      </div>
      <div className='portfolio-content px-3 border-b pb-5 flex items-center justify-start gap-4'>
          <button className={`py-3 px-6 rounded-full font-bold border-solid border border-gray-300 hover:bg-orange-500 hover:text-white ${filter==="All" ? 'bg-orange-500 text-white' : 'bg-white text-black'}`} onClick={() => setFilter('All')}>All</button>
          <button className={`py-3 px-6 rounded-full font-bold border-solid border border-gray-300 hover:bg-orange-500 hover:text-white ${filter==="Full stack projects" ? 'bg-orange-500 text-white' : 'bg-white text-black'}`} onClick={() => setFilter('Full stack projects')}>Full stack projects</button>
          <button className={`py-3 px-6 rounded-full font-bold border-solid border border-gray-300 hover:bg-orange-500 hover:text-white ${filter==="Frontend projects" ? 'bg-orange-500 text-white' : 'bg-white text-black'}`} onClick={() => setFilter('Frontend projects')}>Frontend projects</button>
          <button className={`py-3 px-6 rounded-full font-bold border-solid border border-gray-300 hover:bg-orange-500 hover:text-white ${filter==="Design" ? 'bg-orange-500 text-white' : 'bg-white text-black'}`} onClick={() => setFilter('Design')}>Design</button>
      </div>
      <div className='portfolio-items-container pt-5 '>
        
        {
          [...data].reverse().map((item, index) => (
            item.type === filter || filter === 'All' ? (
              <div key={index} className={`portfolio-item `} style={{backgroundImage: `url(${item.imageUrl})`, backgroundSize: 'cover', backgroundPosition: 'center'}} onClick={() => setSingleData(item)}>
                <p className="portfolio-item-title">{item.title}</p>
                <p className="small-desc">
                  {item.description}
                </p>
              </div>
            ) : null
          ))
        }
        {
          singleData && (<div className={`single-data fixed top-0 left-0 w-full ${singleData ? 'h-full' : 'h-0'} bg-black bg-opacity-80 flex items-center justify-center z-50 overflow-y-scroll pt-96 transition-all`} onClick={() => setSingleData(null)}>
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
        </div>)
        }
      </div>
    </div>
  )
}

export default Portfolio