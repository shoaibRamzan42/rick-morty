import { React } from "react";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import ProgressBar from "react-bootstrap/ProgressBar";
import "bootstrap/dist/css/bootstrap.min.css";
import head1 from "../src/assets/head1.svg"
import head2 from "../src/assets/head2.svg"



const Banner = () => {
  

  return (
    <div className="md:mt-8  mt-12 bg-none flex flex-col md:block items-center justify-center  bg-img1 bg-contain  md:h-[500px] lg:h-[680px] xl:h-[848px] bg-no-repeat  py-16 px-3 lg:px-16 md:px-12 ">
       
        <img src={head1} className="md:hidden max-w-[110%] " alt="pic" />
        <img src={head2} className="md:hidden max-w-[80%]" alt="pic" />
       
        <div className="flex flex-col   md:relative xl:top-[60%] lg:top-[70%]  md:top-[70%] l lg:left-[12%]   md:left-[9%] xl:left-[13%] md:flex-row justify-center md:justify-start   items-center md:gap-12 gap-4">
        <motion.div
            whileInView={{ scale: [0.7, 1], opacity: [0, 1] }}
            transition={{ duration: 1.5, ease: "easeInOut" }}
            initial="hidden"
            style={{ opacity: 0 }}
            // viewport={{ once: true }}
            className="block bg-cover text-[#00FFFF] text-center w-full md:w-auto capitalize animate hover:scale-105 duration-700  btn-bg font-Slackey font-semibold  sm:py-4 lg:py-8  md:py-5 px-12 md:px-4 rounded-[5px] text-[18px] md:text-[18px] lg:text-[28px] leading-3 lg:leading-4"
          >
          <button
            className={` `}
          >
            How to buy 
          </button>
          </motion.div>

          <motion.div
            whileInView={{ scale: [0.7, 1], opacity: [0, 1] }}
            transition={{ duration: 1.2, ease: "easeInOut" }}
            initial="hidden"
            style={{ opacity: 0 }}
            // viewport={{ once: true }}
            className="block text-[#00ffff] text-center w-full md:w-auto  capitalize animate hover:scale-105 duration-700  btn-bg font-Slackey font-semibold  sm:py-4 md:py-5 lg:py-8 px-12 md:px-4 rounded-[5px] text-[18px] md:text-[18px] lg:text-[28px] leading-3 lg:leading-4"
          >
          <button
            className={` `}
          >
            Whitepaper
          </button>
          </motion.div>
        </div> 
        </div>          
   
  );
};

export default Banner;
