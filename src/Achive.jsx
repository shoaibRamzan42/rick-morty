import React from 'react'
import Csec4 from './Csec4'
import image4 from "../src/assets/image4.png"

const Achive = () => {
  return (
    <div id="buy" className="flex font-Slackey lg:px-16 md:px-12 px-3 py-16 gap-8 flex-col items-center">
     <h1 className="text-[#74E291] font-Bold text-[45px] ">How to Buy and Stake</h1>
    <div className=" flex flex-col lg:flex-row items-center justify-center ">
    
    <img className="lg:max-w-[40%] max-w-[85%] lg:pl-[10px] pl-0 md:max-w-[55%] rounded-3xl" src={image4} alt="pic" />
    <Csec4 />
    </div>
    </div> 
  )
}

export default Achive
