import React from "react";
import AccountBalanceWalletIcon from '@mui/icons-material/AccountBalanceWallet';
import DiamondIcon from '@mui/icons-material/Diamond';
import PublicIcon from '@mui/icons-material/Public';
import SwapHorizIcon from '@mui/icons-material/SwapHoriz';

const Csec4=()=>{
    return(<>
    <div className="flex flex-wrap justify-center gap-10">
        <div className="px-5 py-4 flex flex-col md:items-start items-center gap-4  w-[90%]  md:w-[45%]  border-2 rounded-lg border-[#74e291] bg-[#207938]">
            <div className="flex gap-1">
            <AccountBalanceWalletIcon className=" text-[#74E291]" />
            <h1 className="uppercase font-semibold text-[20px] text-white ">1.Creat a Wallet</h1>
            </div>
            <p className="text-[16px] w-full font-medium text-white">You can purchase $MYVAL in various different ways. We reccomend downloading Phantom Wallet</p>
        </div>

        <div className="px-5 py-4 flex flex-col md:items-start items-center gap-4 w-[90%]  md:w-[45%]  border-2 rounded-lg border-[#74e291] bg-[#207938]">
            <div className="flex items-center gap-1">
            <DiamondIcon className=" text-[#74E291]" />
            <h1 className="uppercase font-semibold text-[20px] text-white ">2.Grab some SOL</h1>
            </div>
            <p className="text-[16px] w-full font-medium text-white">Purchasing SOL, sending it to your phantom address and swapping using Phantom's in-app wallet, or on a decentralised exchange like Jupiter</p>
        </div>

        <div className="px-5 py-4 flex flex-col md:items-start items-center gap-4 w-[90%]  md:w-[45%]  border-2 rounded-lg border-[#74e291] bg-[#207938]">
            <div className="flex gap-1">
            <PublicIcon className=" text-[#74E291]" />
            <h1 className="uppercase font-semibold text-[20px] text-white ">
						3. CONNECT YOUR WALLET					</h1>
            </div>
            <p className="text-[16px] w-full font-medium text-white">Connect Your Wallet with Mayan swap.</p>
        </div>

        <div className="px-5 py-4 flex flex-col md:items-start items-center gap-4 w-[90%]  md:w-[45%]  border-2 rounded-lg border-[#74e291] bg-[#207938]">
            <div className="flex items-center gap-1">
            <SwapHorizIcon  className=" text-[#74E291]" />
            <h1 className="uppercase font-semibold text-[20px] text-white ">
						4. Buy $Valentine Myro					</h1>
            </div>
            <p className="text-[16px] w-full font-medium text-white">You can purchase $MYVAL multichain using our integreated Mayan swap, or swap using Jupiter if you already own some $SOL.</p>
        </div>
        </div>
    </>)
}

export default Csec4;