import React from "react";
import AccountBalanceWalletIcon from '@mui/icons-material/AccountBalanceWallet';
import DiamondIcon from '@mui/icons-material/Diamond';
import PublicIcon from '@mui/icons-material/Public';
import SwapHorizIcon from '@mui/icons-material/SwapHoriz';
import { motion } from "framer-motion";

const Csec4=()=>{
    return(<>
    <div className="flex flex-wrap justify-center gap-10">
    
    <motion.div
            initial={{ y: "-100%", opacity: 0 }}
            // viewport={{ once :true,}}
            transition={{ duration: 1.5, ease: "easeInOut" }}
            whileInView={{ y: 0, opacity: 1 }}
            className="md:px-8 px-4 py-4 flex flex-col md:items-start items-center gap-4  w-[90%]  md:w-[47%]  border-2 rounded-lg border-[#00ffff] bg-transparent shadow-5xl"
          >
        <div className="">
        
            <div className="flex gap-1">
            <AccountBalanceWalletIcon className=" text-[#00ffff]" />
            <h1 className="uppercase font-semibold md:text-[20px] text-[18px]  text-[#00ff00] ">1.Creat a Wallet</h1>
            </div>
            <p className="md:text-[16px] text-[14px] w-full font-medium text-[#00ffff]">You can purchase $RMC
 in various different ways. We reccomend downloading Phantom Wallet</p>
        </div>
        </motion.div>

        <motion.div
            initial={{ x: "100%", opacity: 0 }}
            // viewport={{ once :true,}}
            transition={{ duration: 1.5, ease: "easeInOut" }}
            whileInView={{ x: 0, opacity: 1 }}
            className="md:px-8 px-4 py-4 flex flex-col md:items-start items-center gap-4  w-[90%]  md:w-[47%]  border-2 rounded-lg border-[#00ffff] bg-transparent shadow-5xl"
          >
        <div className="">
            <div className="flex items-center gap-1">
            <DiamondIcon className=" text-[#00ffff]" />
            <h1 className="uppercase font-semibold md:text-[20px] text-[18px]  text-[#32CD32]">2.Grab some SOL</h1>
            </div>
            <p className="md:text-[16px] text-[14px] w-full font-medium text-[#00ffff]">Purchasing SOL, sending it to your phantom address and swapping using Phantom's in-app wallet, or on a decentralised exchange like Jupiter</p>
        </div>
        </motion.div>

        <motion.div
            initial={{ x: "-100%", opacity: 0 }}
            // viewport={{ once :true,}}
            transition={{ duration: 1.5, ease: "easeInOut" }}
            whileInView={{ x: 0, opacity: 1 }}
            className="md:px-8 px-4 py-4 flex flex-col md:items-start items-center gap-4  w-[90%]  md:w-[47%]  border-2 rounded-lg border-[#00ffff] bg-transparent shadow-5xl"
          >
        <div className="">
            <div className="flex gap-1">
            <PublicIcon className=" text-[#00ffff]" />
            <h1 className="uppercase font-semibold md:text-[20px] text-[18px]  text-[#00ff00] ">
						3. CONNECT YOUR WALLET					</h1>
            </div>
            <p className="md:text-[16px] text-[14px] w-full font-medium text-[#00ffff]">Connect Your Wallet with RMC swap.</p>
        </div>
        </motion.div>

        <motion.div
            initial={{ y: "100%", opacity: 0 }}
            // viewport={{ once :true,}}
            transition={{ duration: 1.5, ease: "easeInOut" }}
            whileInView={{ y: 0, opacity: 1 }}
            className="md:px-8 px-4 py-4 flex flex-col md:items-start items-center gap-4  w-[90%]  md:w-[47%]  border-2 rounded-lg border-[#00ffff] bg-transparent shadow-5xl"
          >
        <div className="">
            <div className="flex items-center gap-1">
            <SwapHorizIcon  className=" text-[#00ffff]" />
            <h1 className="uppercase font-semibold md:text-[20px] text-[18px]  text-[#32CD32]">
						4. Buy Rick and Morty 					</h1>
            </div>
            <p className="md:text-[16px] text-[14px] w-full font-medium text-[#00ffff]">You can purchase $RMC multichain using our integreated Rick-Morty swap, or swap using Jupiter if you already own some $SOL.</p>
        </div>
        </motion.div>
        </div>
    </>)
}

export default Csec4;