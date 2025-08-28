import React, { useState } from 'react'

const Admin = () => {
  const [tab, setTab] = useState('newProject');

  return (
    <div className="admin">
      <div className='admin-tabs p-20 pt-28 flex flex-col gap-10 border-r-2 border-gray-300 align-middle items-center'>
        <h1 className={`relative h-10 cursor-pointer transition-all ${tab === 'newProject' ? 'text-lg text-blue-500 font-bold' : 'text-black '}`} onClick={() => setTab('newProject')}>New Project<span className={`admin-line bg-blue-500 absolute bottom-0 left-0 transition-all ${tab === 'newProject' ? 'w-full' : 'w-0'}`}></span></h1>
        <h1 className={`relative h-10 cursor-pointer transition-all ${tab === 'allProjects' ? 'text-lg text-blue-500 font-bold' : 'text-black '}`} onClick={() => setTab('allProjects')}>All Projects<span className={`admin-line bg-blue-500 absolute bottom-0 left-0 transition-all ${tab === 'allProjects' ? 'w-full' : 'w-0'}`}></span></h1>
      </div>
      {
        tab === 'newProject' ? (
          <div className='admin-content p-10'>
        <h1 className='font-bold'>New Project</h1>
        <div className='grid grid-cols-2  gap-4 mt-10'>
          <div className='flex flex-col gap-10 justify-start'>
            <div className="admin-input-container">
              <input
                id="admin-input-field"
                placeholder="Title"
                className="admin-input-field"
                type="text"
              />
              <label htmlFor="admin-input-field" className="admin-input-label">
                Title
              </label>
              <span className="admin-input-highlight"></span>
            </div>
            <div className="admin-input-container">
              <input
                id="admin-input-field"
                placeholder="Type"
                className="admin-input-field"
                type="text"
              />
              <label htmlFor="admin-input-field" className="admin-input-label">
                Type
              </label>
              <span className="admin-input-highlight"></span>
            </div>
            <div className="admin-input-container">
              <input
                id="admin-input-field"
                placeholder="Link"
                className="admin-input-field"
                type="text"
              />
              <label htmlFor="admin-input-field" className="admin-input-label">
                Link
              </label>
              <span className="admin-input-highlight"></span>
            </div>
            <div className="admin-input-container">
              <textarea
                id="admin-input-field"
                placeholder="Description"
                className="admin-input-field"
              />
              <label htmlFor="admin-input-field" className="admin-input-label">
                Description
              </label>
              <span className="admin-input-highlight"></span>
            </div>
            <div className='flex justify-start'>
                <button className='admin-form-btn'> Submit
                  <span></span>
                </button>
            </div>
          </div>
          <div className='flex flex-col gap-10 justify-start'>
            <div className='border-2 border-dashed border-gray-400 h-full w-full flex justify-center items-center'>
              <input type="file" />
            </div>
          </div>
        </div>
      </div>
        ) : (
          <div>
            <h1 className='font-bold p-10'>All Projects</h1>
            <div className='grid grid-cols-3 gap-4 p-10 pt-0 overflow-y-scroll h-[75vh]'>
              <div className='border-2 border-gray-300 flex flex-col gap-3 rounded-md '>
                <img src='https://i.pinimg.com/736x/c2/ba/cc/c2bacc603c68a28532b6a016645a90a6.jpg' alt='spiderman' className='rounded-t-md'></img>
                <div className='p-5 flex flex-col gap-3'>
                  <h1>Website Name</h1>
                  <div className='flex justify-between align-middle items-center'>
                    <p className='bg-gray-400 rounded-full p-2 pl-4 pr-4 text-sm'>Front end Project</p>
                    <p className='text-sm text-gray-500'>2.3.2025</p>
                  </div>  
                  <p>de fe fsfdf  sdf fs  fsdfs de fe fsfdf  sdf fs  fsdfs  de fe fsfdf  sdf fs  fsdfs  de fe fsfdf  sdf fs  fsdfs  de fe fsfdf  sdf fs  fsdfs  </p>

                </div>
                  <div className='flex justify-start '>
                    <button className='w-full p-5 border-r-2 border-t-2'> Edit
                    </button>
                    <button className='w-full p-5 border-t-2'> Delete
                    </button>
                  </div>
              </div>
              <div className='border-2 border-gray-300 flex flex-col gap-3 rounded-md'>
                <img src='https://i.pinimg.com/736x/c2/ba/cc/c2bacc603c68a28532b6a016645a90a6.jpg' alt='spiderman' className='rounded-t-md'></img>
                <div className='p-5 flex flex-col gap-3'>
                  <h1>Website Name</h1>
                  <div className='flex justify-between align-middle items-center'>
                    <p className='bg-gray-400 rounded-full p-2 pl-4 pr-4 text-sm'>Front end Project</p>
                    <p className='text-sm text-gray-500'>2.3.2025</p>
                  </div>  
                  <p>de fe fsfdf  sdf fs  fsdfs de fe fsfdf  sdf fs  fsdfs  de fe fsfdf  sdf fs  fsdfs  de fe fsfdf  sdf fs  fsdfs  de fe fsfdf  sdf fs  fsdfs  </p>

                </div>
                  <div className='flex justify-start '>
                    <button className='w-full p-5 border-r-2 border-t-2'> Edit
                    </button>
                    <button className='w-full p-5 border-t-2'> Delete
                    </button>
                  </div>
              </div>
              <div className='border-2 border-gray-300 flex flex-col gap-3 rounded-md'>
                <img src='https://i.pinimg.com/736x/c2/ba/cc/c2bacc603c68a28532b6a016645a90a6.jpg' alt='spiderman' className='rounded-t-md'></img>
                <div className='p-5 flex flex-col gap-3'>
                  <h1>Website Name</h1>
                  <div className='flex justify-between align-middle items-center'>
                    <p className='bg-gray-400 rounded-full p-2 pl-4 pr-4 text-sm'>Front end Project</p>
                    <p className='text-sm text-gray-500'>2.3.2025</p>
                  </div>  
                  <p>de fe fsfdf  sdf fs  fsdfs de fe fsfdf  sdf fs  fsdfs  de fe fsfdf  sdf fs  fsdfs  de fe fsfdf  sdf fs  fsdfs  de fe fsfdf  sdf fs  fsdfs  </p>

                </div>
                  <div className='flex justify-start '>
                    <button className='w-full p-5 border-r-2 border-t-2'> Edit
                    </button>
                    <button className='w-full p-5 border-t-2'> Delete
                    </button>
                  </div>
              </div>
              <div className='border-2 border-gray-300 flex flex-col gap-3 rounded-md'>
                <img src='https://i.pinimg.com/736x/c2/ba/cc/c2bacc603c68a28532b6a016645a90a6.jpg' alt='spiderman' className='rounded-t-md'></img>
                <div className='p-5 flex flex-col gap-3'>
                  <h1>Website Name</h1>
                  <div className='flex justify-between align-middle items-center'>
                    <p className='bg-gray-400 rounded-full p-2 pl-4 pr-4 text-sm'>Front end Project</p>
                    <p className='text-sm text-gray-500'>2.3.2025</p>
                  </div>  
                  <p>de fe fsfdf  sdf fs  fsdfs de fe fsfdf  sdf fs  fsdfs  de fe fsfdf  sdf fs  fsdfs  de fe fsfdf  sdf fs  fsdfs  de fe fsfdf  sdf fs  fsdfs  </p>

                </div>
                  <div className='flex justify-start '>
                    <button className='w-full p-5 border-r-2 border-t-2'> Edit
                    </button>
                    <button className='w-full p-5 border-t-2'> Delete
                    </button>
                  </div>
              </div>
            </div>
          </div>
        )
      }
    </div>
  )
}

export default Admin