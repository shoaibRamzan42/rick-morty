import React from "react";
import AccountBalanceWalletIcon from '@mui/icons-material/AccountBalanceWallet';
import DiamondIcon from '@mui/icons-material/Diamond';
import PublicIcon from '@mui/icons-material/Public';
import SwapHorizIcon from '@mui/icons-material/SwapHoriz';

const Csec4=()=>{
    return(<>
    <div className="flex flex-wrap justify-center gap-10">
        <div className="md:px-8 px-4 py-4 flex flex-col md:items-start items-center gap-4  w-[90%]  md:w-[47%]  border-2 rounded-lg border-[#74e291] bg-transparent shadow-5xl">
            <div className="flex gap-1">
            <AccountBalanceWalletIcon className=" text-[#207938]" />
            <h1 className="uppercase font-semibold md:text-[20px] text-[18px] text-[#74E291] ">1.Creat a Wallet</h1>
            </div>
            <p className="md:text-[16px] text-[14px] w-full font-medium text-white">You can purchase $RMC
 in various different ways. We reccomend downloading Phantom Wallet</p>
        </div>

        <div className="px-8 py-4 flex flex-col md:items-start items-center gap-4 w-[90%]  md:w-[47%]  border-2 rounded-lg border-[#74e291] bg-transparent shadow-5xl">
            <div className="flex items-center gap-1">
            <DiamondIcon className=" text-[#207938]" />
            <h1 className="uppercase font-semibold md:text-[20px] text-[18px] text-[#74E291]">2.Grab some SOL</h1>
            </div>
            <p className="md:text-[16px] text-[14px] w-full font-medium text-white">Purchasing SOL, sending it to your phantom address and swapping using Phantom's in-app wallet, or on a decentralised exchange like Jupiter</p>
        </div>

        <div className="px-8 py-4 flex flex-col md:items-start items-center gap-4 w-[90%]  md:w-[47%]  border-2 rounded-lg border-[#74e291] bg-transparent shadow-5xl">
            <div className="flex gap-1">
            <PublicIcon className=" text-[#207938]" />
            <h1 className="uppercase font-semibold md:text-[20px] text-[18px] text-[#74E291] ">
						3. CONNECT YOUR WALLET					</h1>
            </div>
            <p className="md:text-[16px] text-[14px] w-full font-medium text-white">Connect Your Wallet with RMC swap.</p>
        </div>

        <div className="px-8 py-4 flex flex-col md:items-start items-center gap-4 w-[90%]  md:w-[47%]  border-2 rounded-lg border-[#74e291] bg-transparent shadow-5xl">
            <div className="flex items-center gap-1">
            <SwapHorizIcon  className=" text-[#207938]" />
            <h1 className="uppercase font-semibold md:text-[20px] text-[18px] text-[#74E291]">
						4. Buy Rick and Morty 					</h1>
            </div>
            <p className="md:text-[16px] text-[14px] w-full font-medium text-white">You can purchase $RMC multichain using our integreated Rick-Morty swap, or swap using Jupiter if you already own some $SOL.</p>
        </div>
        </div>
    </>)
}

export default Csec4;