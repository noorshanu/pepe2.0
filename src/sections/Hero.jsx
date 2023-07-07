import React from 'react'

const Hero = () => {
  return (
    <div className="">
      <div className="flex w-full justify-between items-center  pt-20  sm:py-7 mb-20">
        <img src="/hero.svg" className="w-[50%]   h-auto" />
        <div className="flex-[1] w-[40%] flex flex-col px-2 items-center max-w-xs text-white text-center">
          <h2 className="text-lg font-pop mb-3">Welcome To</h2>
          <h1 className="text-4xl sm:text-7xl font-bold font-pop mb-3">
            APE 2.0
          </h1>
          <p className="sm:text-center text-[0.75rem] sm:text-base  text-start px-4 mb-4 sm:mb-8">
            Missed Pepe 2.0 , Shiba 2.0 ? Don't Miss Ape 2.0
          </p>

          <div className="flex w-full justify-center">
            <button className="bg-[#E8BA4B] py-2 text-[0.5rem] sm:text-base font-bold sm:font-medium px-3 rounded-md text-black font-pop">
              Buy Pinksale
            </button>
            <button className="ml-1 sm:ml-3 bg-[#fff] py-2 text-[0.5rem] sm:text-base font-bold sm:font-medium px-3 rounded-md text-black font-pop">
              Buy Pinksale
            </button>
          </div>
          <div className="w-full flex justify-center mt-8 gap-x-3">
            <a href="https://t.me/APECOIN2point0" target='_blank'>

            <img src="/social-media/telegram-white.svg" className='cursor-pointer' />
            </a>
            <a href="https://twitter.com/APECOIN2point0" target='_blank'>

            <img src="/social-media/twitter-white.svg" className='cursor-pointer' />
            </a>
          </div>
          <div className="hidden sm:flex flex-col ">
            <p className="text-[#E8BA4B] text-[0.8vw] sm:text-base  mt-3 mb-2">
              Contract Address
            </p>
            <p className="break-words">
              0xfb66321d7c674995dfcc2cb67a30bc978dc862ad
            </p>
          </div>
        </div>
      </div>
      <div className="flex sm:hidden w-full justify-center items-center flex-col pb-20 mt-5">
        <p className="text-[#E8BA4B] mt-3 mb-2 text-center">Contract Address</p>
        <p className="text-center text-white break-words w-full">
          0xfb66321d7c674995dfcc2cb67a30bc978dc862ad
        </p>
      </div>
    </div>
  )
}

export default Hero
