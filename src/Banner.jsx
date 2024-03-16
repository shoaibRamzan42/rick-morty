import { React } from "react";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import ProgressBar from "react-bootstrap/ProgressBar";
import "bootstrap/dist/css/bootstrap.min.css";
import head1 from "../src/assets/head1.svg"
import head2 from "../src/assets/head2.svg"



const Banner = () => {
  

  return (
    <div className="md:mt-8 mt-12 bg-none flex flex-col md:block items-center justify-center  bg-img1 bg-contain  md:h-[500px] lg:h-[680px] xl:h-[848px] bg-no-repeat  py-16 px-3 lg:px-16 md:px-12 ">
       
        <img src={head2} className="md:hidden max-w-[60%]" alt="pic" />
        <img src={head1} className="md:hidden " alt="pic" />
       
        <div className="flex   md:relative xl:top-[60%] lg:top-[70%]  md:top-[70%] l lg:left-[12%]   md:left-[9%] xl:left-[13%] flex-row   items-center md:gap-12 gap-4">
        <motion.div
            whileInView={{ scale: [0.7, 1], opacity: [0, 1] }}
            transition={{ duration: 1.5, ease: "easeInOut" }}
            initial="hidden"
            style={{ opacity: 0 }}
            // viewport={{ once: true }}
            className=""
          >
          <button
            className={`block bg-cover text-[#00FFFF] capitalize animate hover:scale-105 duration-700  btn-bg font-Slackey font-semibold  sm:py-3 lg:py-8  md:py-5 px-4 rounded-[5px] text-[12px] md:text-[18px] lg:text-[28px] leading-3 lg:leading-4 `}
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
            className=""
          >
          <button
            className={`block text-[#00ffff] capitalize animate hover:scale-105 duration-700  btn-bg font-Slackey font-semibold  sm:py-3 md:py-5 lg:py-8 px-4 rounded-[5px] text-[12px] md:text-[18px] lg:text-[28px] leading-3 lg:leading-4 `}
          >
            Whitepaper
          </button>
          </motion.div>
        </div> 
        </div>          
   
  );
};

export default Banner;
