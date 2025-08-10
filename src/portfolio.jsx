import React from 'react'

const Portfolio = () => {
  return (
    <div className="portfolio w-full h-full px-5">
      <div className="portfolio-header w-full h-96 flex items-center justify-between px-6">
        <h1 className="text-4xl font-bold text-center">My Portfolio</h1>
        <p className="text-lg text-gray-700">Welcome to my portfolio page. Here you can find my latest projects and achievements.</p>
      </div>
      <div className='portfolio-content px-3 border-b pb-5 flex items-center justify-start gap-4'>
          <button className='py-3 px-6 rounded-full font-bold border-solid border border-gray-300 hover:bg-orange-500 hover:text-white'>Full stack projects</button>
          <button className='py-3 px-6 rounded-full font-bold border-solid border border-gray-300 hover:bg-orange-500 hover:text-white'>Frontend projects</button>
          <button className='py-3 px-6 rounded-full font-bold border-solid border border-gray-300 hover:bg-orange-500 hover:text-white'>Backend projects</button>
          <button className='py-3 px-6 rounded-full font-bold border-solid border border-gray-300 hover:bg-orange-500 hover:text-white'>Designs</button>
          <button className='py-3 px-6 rounded-full font-bold border-solid border border-gray-300 hover:bg-orange-500 hover:text-white'>Clients' websites</button>
      </div>
      <div className='portfolio-items-container pt-5'>
        <div className="portfolio-item portfolio-grid1">
          <p className="portfolio-item-title">Product Name</p>
          <p className="small-desc">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quaerat
            veritatis nobis saepe itaque rerum nostrum aliquid obcaecati odio
            officia deleniti. Expedita iste et illum, quaerat pariatur consequatur
            eum nihil itaque!
          </p>
          <div className="go-corner">
            <div className="go-arrow">→</div>
          </div>
        </div>
        <div className="portfolio-item portfolio-grid2">
          <p className="portfolio-item-title">Product Name</p>
          <p className="small-desc">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quaerat
            veritatis nobis saepe itaque rerum nostrum aliquid obcaecati odio
            officia deleniti. Expedita iste et illum, quaerat pariatur consequatur
            eum nihil itaque!
          </p>
          <div className="go-corner">
            <div className="go-arrow">→</div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Portfolio