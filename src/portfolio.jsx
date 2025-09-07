import { collection, getDocs, orderBy, query } from '@firebase/firestore';
import React, { useEffect, useState } from 'react'
import { db } from './firebase';

const Portfolio = () => {
  const [data, setData] = useState([]);
  const [filter, setFilter] = useState('All');

  useEffect(() => {
    const fetchData = async () => {
      try {
        const q = query(collection(db, "projects"), orderBy("createdAt", "desc"));
          const snapshot = await getDocs(q);
          const blogs = snapshot.docs.map(doc => ( doc.data()));
          setData(blogs);
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
              <div key={index} className={`portfolio-item portfolio-grid${(index % 4) + 1}`} style={{backgroundImage: `url(${item.imageUrl})`, backgroundSize: 'cover', backgroundPosition: 'center'}}>
                <p className="portfolio-item-title">{item.title}</p>
                <p className="small-desc">
                  {item.description}
                </p>
                <div className="go-corner">
                  <div className="go-arrow">→</div>
                </div>
              </div>
            ) : <p>No projects found!</p>
          ))
        }
      </div>
    </div>
  )
}

export default Portfolio