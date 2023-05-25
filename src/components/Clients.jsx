import React from 'react'

function Clients() {
  return <div className='bg-white-100 p-8 flex flex-col items-center justify-center gap-8 mt-20 xl:mt-0'>
    <h1 className='text-2xl font-medium text-gray-800 text-center'>Find us on social media</h1>
    <div className='flex flex-col md:flex-row items-center justify-center flex-wrap gap-20'>
      <img src="twiter.png" alt="logo twiter" className="w-40" />
      <img src="facebook.png" alt="logo twiter" className="w-40" />
      <img src="instagran.png" alt="logo twiter" className="w-40" />
      <img src="youtube.png" alt="logo twiter" className="w-40" />
      <img src="tiktok.png" alt="logo twiter" className="w-40" />
    </div>
  </div>

}

export default Clients