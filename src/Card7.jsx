import React from "react";
import User from "../src/assets/roadmap-bg.png"

const Card7 = (props) => {
  return (
    <>
      <div className="flex font-custom animate hover:scale-105 flex-col items-center justify-center">
      <img className=" z-[1] w-[85%]  " src={props.shade}/>
     
        
        
        <div className="bg-[#207938] border-[5px] border-white flex flex-col -mt-[65px]  z-0 py-24 justify-center rounded-[20px] gap-4 items-start h-[345px] md:h-[480px] w-[265px] md:w-full ">
        
          <li className="font-custom font-extrabold pl-2  text-left text-[20px] md:text-[20px] leading-[30px] md:leading-[33px] text-white ">
           {props.head1} 
          </li>

          <li className="list-disc font-custom font-extrabold pl-2 text-left text-[20px] md:text-[20px] leading-[30px] md:leading-[33px] text-white ">
           {props.head2} 
          </li>

          <li className="font-custom font-extrabold pl-2 text-left  text-[20px] md:text-[20px] leading-[30px] md:leading-[33px] text-white ">
           {props.head3} 
          </li>

          <li className="font-custom font-extrabold pl-2  text-left text-[20px] md:text-[20px] leading-[30px] md:leading-[33px] text-white ">
           {props.head4} 
          </li>

          <li className="font-custom font-extrabold pl-2 text-left  text-[20px] md:text-[20px] leading-[30px] md:leading-[33px] text-white ">
           {props.head5} 
          </li>
          
         
        </div>
      </div>
    </>
  );
};

export default Card7;
