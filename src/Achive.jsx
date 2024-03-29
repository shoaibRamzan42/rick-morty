import React from 'react'
import Csec4 from './Csec4'
import image4 from "../src/assets/image4.png"

const Achive = () => {
  return (
    <div id="buy" className="flex font-Slackey lg:px-16 md:px-12 px-3 py-16 gap-8 flex-col items-center">
     <h1 className="text-[#00ffff]  font-Bold text-center text-[30px] md:text-[35px] lg:text-[45px] ">How to Buy and Stake</h1>
    <div className=" flex flex-col xl:gap-0 gap-0 md:gap-3 xl:flex-row items-center justify-center ">
    
    
    <img className="xl:max-w-[40%] max-w-full   md:max-w-[70%] lg:pl-[10px] pl-0  rounded-3xl" src={image4} alt="pic" />
    
    <Csec4 />
    </div>
    </div> 
  )
}

export default Achive
