import { collection, getDocs, orderBy, query } from '@firebase/firestore';
import React, { useEffect, useState } from 'react'
import { db } from './firebase';
import { koreaschool, headphone, hoodieshop, photographer, travelagency, hotel } from './assets/designs/designs';
import { useLocation } from 'react-router-dom';

const Portfolio = () => {
  const [data, setData] = useState([{id:1, type:'Full stack projects', imageUrl:hoodieshop, title:'Hoodie Shop', description:'A comprehensive e-commerce platform for selling hoodies, featuring user authentication, product management, and a secure payment gateway.'},
  {id:2, type:'Frontend projects', imageUrl:travelagency, title:'Travel Agency Website', description:'A visually appealing and user-friendly website for a travel agency, showcasing various travel packages, destinations, and customer testimonials.'},
  {id:3, type:'Backend projects', imageUrl:hotel, title:'Hotel Management System', description:'A robust backend system for managing hotel operations, including room bookings, customer data, and billing processes.'},
  {id:4, type:"Clients' websites", imageUrl:photographer, title:'Photographer Portfolio', description:'A sleek and modern portfolio website for a professional photographer to showcase their work and attract potential clients.'},
  {id:5, type:'Design', imageUrl:koreaschool, title:'Korea School Website Design', description:'A creative and engaging website design for a language school specializing in teaching Korean, featuring course information and enrollment options.'},
  {id:6, type:"Clients' websites", imageUrl:headphone, title:'Headphone Store Website', description:'An e-commerce website for a headphone store, offering a wide range of audio products with detailed descriptions and customer reviews.'}]);
  const [filter, setFilter] = useState('All');
  
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

  useEffect(() => {
    const fetchData = async () => {
      try {
        const q = query(collection(db, "projects"), orderBy("createdAt", "desc"));
          const snapshot = await getDocs(q);
          const blogs = snapshot.docs.map(doc => ( doc.data()));
          setData(pre => ([...pre, ...blogs]));
         console.log('data',blogs);
      } catch (error) {
        console.error("Error fetching data: ", error);
      }
    }
    fetchData();
  },[]);

  return (
    <div className="portfolio w-full h-full px-5">
      <div className="portfolio-header w-full h-96 flex items-center justify-between px-6">
        <h1 className="text-9xl font-bold text-center">My Work</h1>
        <p className="text-lg text-gray-700 w-1/2">Here are some of the projects I’ve built that reflect my skills, creativity, and problem-solving approach. Each project represents not only technical execution but also my ability to understand real-world needs and deliver meaningful digital solutions. From agency websites to full eCommerce platforms, I aim to create products that are scalable, user-friendly, and impactful.</p>
      </div>
      <div className='portfolio-content px-3 border-b pb-5 flex items-center justify-start gap-4'>
          <button className={`py-3 px-6 rounded-full font-bold border-solid border border-gray-300 hover:bg-orange-500 hover:text-white ${filter==="All" ? 'bg-orange-500 text-white' : 'bg-white text-black'}`} onClick={() => setFilter('All')}>All</button>
          <button className={`py-3 px-6 rounded-full font-bold border-solid border border-gray-300 hover:bg-orange-500 hover:text-white ${filter==="Full stack projects" ? 'bg-orange-500 text-white' : 'bg-white text-black'}`} onClick={() => setFilter('Full stack projects')}>Full stack projects</button>
          <button className={`py-3 px-6 rounded-full font-bold border-solid border border-gray-300 hover:bg-orange-500 hover:text-white ${filter==="Frontend projects" ? 'bg-orange-500 text-white' : 'bg-white text-black'}`} onClick={() => setFilter('Frontend projects')}>Frontend projects</button>
          <button className={`py-3 px-6 rounded-full font-bold border-solid border border-gray-300 hover:bg-orange-500 hover:text-white ${filter==="Backend projects" ? 'bg-orange-500 text-white' : 'bg-white text-black'}`} onClick={() => setFilter('Backend projects')}>Backend projects</button>
          <button className={`py-3 px-6 rounded-full font-bold border-solid border border-gray-300 hover:bg-orange-500 hover:text-white ${filter==="Design" ? 'bg-orange-500 text-white' : 'bg-white text-black'}`} onClick={() => setFilter('Design')}>Design</button>
          <button className={`py-3 px-6 rounded-full font-bold border-solid border border-gray-300 hover:bg-orange-500 hover:text-white ${filter==="Clients' websites" ? 'bg-orange-500 text-white' : 'bg-white text-black'}`} onClick={() => setFilter("Clients' websites")}>Clients' websites</button>
      </div>
      <div className='portfolio-items-container pt-5'>
        
        {
          data.map((item, index) => (
            item.type === filter || filter === 'All' ? (
              <div key={index} className={`portfolio-item `} style={{backgroundImage: `url(${item.imageUrl})`, backgroundSize: 'cover', backgroundPosition: 'center'}}>
                <p className="portfolio-item-title">{item.title}</p>
                <p className="small-desc">
                  {item.description}
                </p>
                <div className="go-corner">
                  <div className="go-arrow">→</div>
                </div>
              </div>
            ) : null
          ))
        }
      </div>
    </div>
  )
}

export default Portfolio