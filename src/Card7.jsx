import React from "react";
import User from "../src/assets/roadmap-bg.png"

const Card7 = (props) => {
  return (
    <>
      <div className="flex font-custom animate hover:scale-105 flex-col items-center justify-center">
      <img className=" z-[1] w-[85%]  " src={props.shade}/>
     
        
        
        <div className="bg-transparent border-[2px] shadow-5xl border-[#00ffff] flex flex-col -mt-[45px] md:-mt-[65px]  z-0 md:py-24 py-8 justify-center rounded-[20px] gap-4 items-start h-[320px] md:h-[480px] w-[275px] md:w-full ">
        
          <li className="font-custom font-extrabold pl-2  text-left text-[14px] md:text-[20px] leading-[22px] md:leading-[33px] text-[#00ffff]  ">
           {props.head1} 
          </li>

          <li className="list-disc font-custom font-extrabold pl-2 text-left text-[14px] md:text-[20px] leading-[22px] md:leading-[33px] text-[#00ffff]  ">
           {props.head2} 
          </li>

          <li className="font-custom font-extrabold pl-2 text-left  text-[14px] md:text-[20px] leading-[22px] md:leading-[33px] text-[#00ffff]  ">
           {props.head3} 
          </li>

          <li className="font-custom font-extrabold pl-2  text-left text-[14px] md:text-[20px] leading-[22px] md:leading-[33px] text-[#00ffff]  ">
           {props.head4} 
          </li>

          <li className="font-custom font-extrabold pl-2 text-left  text-[14px] md:text-[20px] leading-[22px] md:leading-[33px] text-[#00ffff]  ">
           {props.head5} 
          </li>
          
         
        </div>
      </div>
    </>
  );
};

export default Card7;
