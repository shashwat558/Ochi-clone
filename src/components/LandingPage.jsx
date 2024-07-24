import React from 'react'
import { FaArrowUpLong } from "react-icons/fa6";

function LandingPage() {
  return (
    <div className='w-full h-screen  bg-zinc-900 pt-1'>
        <div className='textstructure mt-52 px-20'>
            {["WE CREATE", "EYE OPENING", "PRESENTATIONS"].map((item, index) => {
                return  <div className='masker'>
                            <div className='w-fit flex items-center '>
                                {index === 1 && (<div className='w-[7vw] h-[4.8vw] relative bg-red-500'></div>)}
                                <h1 key={index} className='uppercase text-[7vw] leading-[6vw] text- tracking-tighter  font-["Founders Grotesk"] font-[450]'>
                                {item}
                                </h1>
                            </div>
                        </div>
            }
            )}           
            
        </div>
        <div className="border-t-[1px] border-zinc-800 mt-20 flex justify-between items-center py-5 px-20">
            {["For public and private companies", "From the first pitch to IPO"].map((item, index) => (
                <p className='text-xl font-light tracking-tight leading-none'>{item}</p>
            ))}
            <div className='start flex items-center gap-1'>
                <div className='px-5 capitalize py-2 border-[2px] border-zinc-500 rounded-full font-light text-lg'>START THE PROJECT</div>
                <div className='w-10 h-10 flex rounded-full border-[2px] border-zinc-500 items-center  justify-center'>
                    <span className='rotate-[45deg]'>
                     <FaArrowUpLong />
                    </span>
                </div>
            </div>
        </div>
    </div>
  )
}

export default LandingPage