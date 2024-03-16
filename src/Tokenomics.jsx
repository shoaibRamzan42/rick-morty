import React from 'react'
import CheckIcon from '@mui/icons-material/Check';
import token from "../src/assets/token-img3.png"
import { motion } from 'framer-motion';


const Tokenomics = () => {
  return (
    <div className='flex font-Slackey lg:px-16 md:px-12 px-3 py-16 gap-8 flex-col items-center'>
     <h1 className="text-[#00ff00] bg-shade bg-no-repeat bg-cover font-Bold text-[30px] md:text-[35px] lg:text-[45px] ">Tokenomics </h1>
     <div className='lg:py-1 py-3 px-4 shadow-5xl bg-transparent rounded-2xl  border-[1px] border-[#00ffff] flex flex-col-reverse lg:flex-row items-center justify-center'>
        <div className='flex flex-col gap-2 w-full text-[14px] md:w-[60%] lg:w-[50%] md:text-[22px] font-custom justify-center'>
        <motion.div
            initial={{ x: "-100%", opacity: 0 }}
            // viewport={{ once :true,}}
            transition={{ duration: 1.5, ease: "easeInOut" }}
            whileInView={{ x: 0, opacity: 1 }}
            className=""
          >
        <h1 className='text-[#00ff00] text-[14px] md:text-[22px] font-semibold'><CheckIcon fontSize='large' className='text-[#00FFFF]'/> Bridge Launch</h1>
        <h1 className='text-[#00ff00] text-[14px] md:text-[22px] font-semibold'><CheckIcon fontSize='large' className='text-[#00FFFF]'/> Stake V1 To Earn V2</h1>
        <h1 className='text-[#00ff00] text-[14px] md:text-[22px] font-semibold'><CheckIcon fontSize='large' className='text-[#00FFFF]'/>  Presale</h1>
        <h1 className='text-[#00ff00] text-[14px] md:text-[22px] font-semibold'><CheckIcon fontSize='large' className='text-[#00FFFF]'/> No Taxes</h1>
        <h1 className='text-[#00ff00]  text-[14px] md:text-[22px] font-semibold'><CheckIcon fontSize='large' className='text-[#00FFFF]'/> Big Marketing Budget</h1>
        <h1 className='text-[#00ff00]  text-[14px] md:text-[22px] font-semibold'><CheckIcon fontSize='large' className='text-[#00FFFF]'/> Ample CEX Liquidity</h1>
        <h1 className='text-[#00ff00]  text-[14px] md:text-[22px] font-semibold'><CheckIcon fontSize='large' className='text-[#00FFFF]'/> Earn V2 Tokens In P2E Game</h1>
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
