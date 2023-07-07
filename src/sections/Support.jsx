import React from 'react'

const Support = () => {
  return (
    <div className='pb-10'>

    <div className="bg-[#E8BA4B] rounded-3xl flex flex-col items-center pt-10 pb-4 sm:px-20 px-8 mt-20">
        <img src='/avatar.svg' className='w-[80px] sm:w-[120px]'/>
        <h4 className='text-black text-center text-3xl sm:text-4xl mt-8 font-bold font-arch'>Join the Ape 2.0 Revolution and make your way to financial freedom</h4>
        <p className='text-black font-bold mt-7 text-xl'>Support</p>
        <p className='text-black font-bold mt-1 text-xl'>banana@apecoin2.vip</p>
        <div className="w-full flex justify-center mt-12 gap-x-3">
            <img src="/social-media/telegram-black.svg" className='cursor-pointer' />
            <img src="/social-media/twitter-black.svg" className='cursor-pointer' />
          </div>
    </div>
    </div>
  )
}

export default Support
