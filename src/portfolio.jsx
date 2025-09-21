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
    hotel } from './assets/designs/designs';
import { useLocation } from 'react-router-dom';
import gsap from 'gsap';

const Portfolio = () => {
  const [data, setData] = useState([{id:1, type:'Design', imageUrl:hoodieherosection, title:'Hoodie Shop', description:'A comprehensive e-commerce platform for selling hoodies, featuring user authentication, product management, and a secure payment gateway.'},
  {id:2, type:'Design', imageUrl:travelherosection, title:'Travel Agency Website', description:'A visually appealing and user-friendly website for a travel agency, showcasing various travel packages, destinations, and customer testimonials.'},
  {id:3, type:"Design", imageUrl:portfolioherosection, title:'Photographer Portfolio', description:'A sleek and modern portfolio website for a professional photographer to showcase their work and attract potential clients.'},
  {id:4, type:'Design', imageUrl:koreaagencyhomesection, title:'Korea School Website Design', description:'A creative and engaging website design for a language school specializing in teaching Korean, featuring course information and enrollment options.'},
  {id:5, type:"Design", imageUrl:headphoneherosection, title:'Headphone Store Website', description:'An e-commerce website for a headphone store, offering a wide range of audio products with detailed descriptions and customer reviews.'},
  {id:6, type:'Design', imageUrl:agency, title:'Creative Agency Website Design', description:'A dynamic and visually stunning website design for a creative agency, highlighting their services, portfolio, and client testimonials.'},
  {id:7, type:'Design', imageUrl:lamboherosection, title:'Luxury Car Landing Page', description:'A high-end landing page design for a luxury car brand, focusing on sleek visuals and key features of the vehicles.'},
  {id:8, type:'Design', imageUrl:herofirstsection, title:'E-commerce Platform', description:'A full-featured e-commerce platform with user authentication, product listings, shopping cart functionality, and payment integration.'},
  {id:9, type:"Design", imageUrl:hotelhomesection,link:'href/hereyougo', title:'Hotel Booking Website', description:'A comprehensive hotel booking website with room availability, pricing details, and secure payment options.',fulldesignurl:hotel},]);
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
      <div className='portfolio-items-container pt-5'>
        
        {
          data.map((item, index) => (
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