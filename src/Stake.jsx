import React from "react";
import stake from "../src/assets/stake.png";
import {motion} from "framer-motion"

const Stake = () => {
  return (
    <div className="py-16 lg:px-16 font-Slackey md:px-12 px-3">
      <div className="flex  flex-col items-center justify-center">
      
        <div className="flex  justify-center items-center">
        
        
          <img src={stake} className="md:max-w-[50%] max-w-full" alt="pic" />
          <h1 className="text-[#00ff00] hidden justify-center w-[30%] md:flex items-center gb-stak bg-cover h-[140px] lg:h-[195px] xl:h-[255px] font-semibold text-[11px] lg:text-[16px] xl:text-[18px]">
            Did U miss 100X Pump??
          </h1>
         
        </div>
        <motion.div
            initial={{ x: "100%", opacity: 0 }}
            // viewport={{ once :true,}}
            transition={{ duration: 1.5, ease: "easeInOut" }}
            whileInView={{ x: 0, opacity: 1 }}
            className=""
          >
        <div className="flex flex-col gap-3 shadow-5xl  items-center px-4 py-2 border-[#00ffff] rounded-xl border-[1px] bg-transparent justify-center">
          <h1 className="text-[#00ff00] text-center text-[22px] md:text-[36px] leading-[35px] md:leading-[55px] lg:text-[45px]">
            {" "}
            BIGGER & BETTER! ABSORBING ALL DAMP
          </h1>
          <h1 className="text-[#00FFFF] text-center leading-[28px] text-[18px] md:leading-[32px] md:text-[22px] lg:leading-[35px] md:w-[90%] w-[100%] lg:text-[25px]">
            {" "}
            Buy and stake $Rick-morty using the button above and start earning
            rewards today. Rick-mortyrs will gain tokens by staking $Rick-morty
            before the claim date.
          </h1>
        </div>
        </motion.div>
        <div className="pt-16 gap-8 flex flex-col item center justify-center">
          <h1 className=" text-center bg-shade bg-no-repeat bg-cover text-[32px] md:text-[35px] text-[#00ff00] font-bold  lg:text-[45px]">
            V1 Listed and Featured in...
          </h1>
          <motion.div
            whileInView={{ scale: [0.7, 1], opacity: [0, 1] }}
            transition={{ duration: 1.5, ease: "easeInOut" }}
            initial="hidden"
            style={{ opacity: 0 }}
            // viewport={{ once: true }}
            className=""
          >
          <div className="items-center gap-8 flex flex-wrap justify-center">
            <img
              className="bg-white  h-20 lg:h-24 p-3 lg:p-4 rounded-full  border-[5px] border-[#00ffff] "
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/5a/Uniswap_Logo_and_Wordmark.svg/2560px-Uniswap_Logo_and_Wordmark.svg.png"
              alt="pic"
            />

            <img
              className="bg-white h-20 lg:h-24 p-3 lg:p-4 rounded-full  border-[5px] border-[#00ffff] "
              src="https://mms.businesswire.com/media/20211208005504/en/933723/5/logo-dark.daa82de1.jpg"
              alt="pic"
            />

            <img
              className="bg-white h-20 lg:h-24 p-3 lg:p-4 rounded-full  border-[5px] border-[#00ffff] "
              src="https://miro.medium.com/v2/resize:fit:1400/1*CzmHdmVSwWyCTXqzq61HjA.png"
              alt="pic"
            />

            <img
              className="bg-white h-20 lg:h-24 p-3 lg:p-4 rounded-full  border-[5px] border-[#00ffff] "
              src="https://www.marketplacefairness.org/wp-content/uploads/2022/06/Bitget-logo.png"
              alt="pic"
            />
          </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Stake;
