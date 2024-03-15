import React from 'react'
import CheckIcon from '@mui/icons-material/Check';
import token from "../src/assets/token-img.png"
import { motion } from 'framer-motion';


const Tokenomics = () => {
  return (
    <div className='flex font-Slackey lg:px-16 md:px-12 px-3 py-16 gap-8 flex-col items-center'>
     <h1 className="text-[#74E291] bg-shade bg-no-repeat bg-cover font-Bold text-[30px] md:text-[35px] lg:text-[45px] ">Tokenomics </h1>
     <div className='lg:py-1 py-3 px-4 shadow-5xl bg-transparent rounded-2xl  border-[1px] border-[#74e291] flex flex-col-reverse lg:flex-row items-center justify-center'>
        <div className='flex flex-col gap-2 w-full text-[14px] md:w-[60%] lg:w-[50%] md:text-[22px] font-custom justify-center'>
        <motion.div
            initial={{ x: "-100%", opacity: 0 }}
            // viewport={{ once :true,}}
            transition={{ duration: 1.5, ease: "easeInOut" }}
            whileInView={{ x: 0, opacity: 1 }}
            className=""
          >
        <h1 className='text-[#74e291] text-[14px] md:text-[22px] font-semibold'><CheckIcon fontSize='large' className='text-white'/> Bridge Launch</h1>
        <h1 className='text-[#74e291] text-[14px] md:text-[22px] font-semibold'><CheckIcon fontSize='large' className='text-white'/> Stake V1 To Earn V2</h1>
        <h1 className='text-[#74e291] text-[14px] md:text-[22px] font-semibold'><CheckIcon fontSize='large' className='text-white'/>  Presale</h1>
        <h1 className='text-[#74e291] text-[14px] md:text-[22px] font-semibold'><CheckIcon fontSize='large' className='text-white'/> No Taxes</h1>
        <h1 className='text-[#74e291]  text-[14px] md:text-[22px] font-semibold'><CheckIcon fontSize='large' className='text-white'/> Big Marketing Budget</h1>
        <h1 className='text-[#74e291]  text-[14px] md:text-[22px] font-semibold'><CheckIcon fontSize='large' className='text-white'/> Ample CEX Liquidity</h1>
        <h1 className='text-[#74e291]  text-[14px] md:text-[22px] font-semibold'><CheckIcon fontSize='large' className='text-white'/> Earn V2 Tokens In P2E Game</h1>
        </motion.div>
        </div>
        <div>
        <motion.div
            whileInView={{ scale: [0.7, 1], opacity: [0, 1] }}
            transition={{ duration: 1.5, ease: "easeInOut" }}
            initial="hidden"
            style={{ opacity: 0 }}
            // viewport={{ once: true }}
            className=""
          >
    <img src={token} className=' ml-[14px] lg:ml-0 w-[100%]' alt="pic" />
    </motion.div>

        </div>
     </div>
      
    </div>
  )
}

export default Tokenomics
