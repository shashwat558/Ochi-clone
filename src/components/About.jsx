import React from 'react'

function About() {
  return (
    <div className='w-full p-20 bg-[#CDEA68] rounded-tl-2xl rounded-tr-2xl'>
        <h1 className='font-[Neue_Montreal]  text-[#212121] text-5xl pr tracking-tight'>Ochi is a strategic partner for fast-grow­ing tech businesses that need to raise funds, sell prod­ucts, ex­plain com­plex ideas, and hire great peo­ple.</h1>
        <div className='flex w-full border-t-[1px] pt-10 mt-20 text-black  border-zinc-400'>
            <div className='w-1/2 '>
                <h1 className='text-6xl'>Our approach</h1>
                <button className='flex items-center gap-10 uppercase px-8 py-4 mt-10 bg-zinc-900 rounded-full text-white '>Read more
                <div className='w-3 h-3 bg-slate-100 rounded-full'></div>
                </button>
            </div>
            <div className='w-1/2 h-[60vh] rounded-3xl bg-red-600'></div>
        </div>
    </div>
  )
}

export default About