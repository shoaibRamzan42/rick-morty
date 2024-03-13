import React from 'react'
import CheckIcon from '@mui/icons-material/Check';
import token from "../src/assets/token-img.svg"

const Tokenomics = () => {
  return (
    <div className='flex font-Slackey lg:px-16 md:px-12 px-3 py-16 gap-8 flex-col items-center'>
     <h1 className="text-[#74E291] font-Bold text-[45px] ">Tokenomics V2</h1>
     <div className='py-8 px-4 bg-[#207938] rounded-2xl  border-[5px] border-white flex items-center justify-center'>
        <div className='flex flex-col gap-2 w-[50%] text-[25px] font-custom justify-center'>
        <h1 className='text-white text-[25px] font-semibold'><CheckIcon fontSize='large' className='text-[#74E291]'/> Bridge Launch</h1>
        <h1 className='text-white text-[25px] font-semibold'><CheckIcon fontSize='large' className='text-[#74E291]'/> Stake V1 To Earn V2</h1>
        <h1 className='text-white text-[25px] font-semibold'><CheckIcon fontSize='large' className='text-[#74E291]'/> No Presale</h1>
        <h1 className='text-white text-[25px] font-semibold'><CheckIcon fontSize='large' className='text-[#74E291]'/> No Taxes</h1>
        <h1 className='text-white  text-[25px] font-semibold'><CheckIcon fontSize='large' className='text-[#74E291]'/> Big Marketing Budget</h1>
        <h1 className='text-white  text-[25px] font-semibold'><CheckIcon fontSize='large' className='text-[#74E291]'/> Ample CEX Liquidity</h1>
        <h1 className='text-white  text-[25px] font-semibold'><CheckIcon fontSize='large' className='text-[#74E291]'/> Earn V2 Tokens In P2E Game</h1>

        </div>
        <div>
    <img src={token} className='w-[100%]' alt="pic" />

        </div>
     </div>
      
    </div>
  )
}

export default Tokenomics
