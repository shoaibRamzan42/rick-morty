import React from "react";
import stake from "../src/assets/stake.png";

const Stake = () => {
  return (
    <div className="py-16 lg:px-16 font-Slackey md:px-12 px-3">
      <div className="flex flex-col items-center justify-center">
        <div className="flex justify-center items-center">
          <img src={stake} className="max-w-[50%]" alt="pic" />
          <h1 className="text-[#242269] justify-center w-[30%] flex items-center gb-stak bg-cover h-[230px] font-semibold text-[18px]">
            Did U miss 100X Pump??
          </h1>
        </div>
        <div className="flex flex-col gap-3  items-center px-4 py-2 border-[#207938] rounded-xl border-[5px] bg-[#74E291] justify-center">
          <h1 className="text-[#242269] text-[45px]">
            {" "}
            BIGGER & BETTER! ABSORBING ALL DAMP
          </h1>
          <h1 className="text-[#242269] w-[90%] text-[25px]">
            {" "}
            Buy and stake $SPONGE using the button above and start earning
            rewards today. Spongers will gain tokens by staking $SPONGE before
            the claim date.
          </h1>
        </div >
        <div className="pt-16 gap-8 flex flex-col item center justify-center">
        <h1 className=" text-center text-[#74E291] font-bold  text-[45px]">V1 Listed and Featured in...</h1>
        <div className="items-center gap-8 flex flex-wrap justify-center">
            <img className="bg-white h-24 p-4 rounded-full  border-[5px] border-[#207938] " src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/5a/Uniswap_Logo_and_Wordmark.svg/2560px-Uniswap_Logo_and_Wordmark.svg.png" alt="pic" />

            <img className="bg-white h-24 p-4 rounded-full  border-[5px] border-[#207938] " src="https://mms.businesswire.com/media/20211208005504/en/933723/5/logo-dark.daa82de1.jpg" alt="pic" />

            <img className="bg-white h-24 p-4 rounded-full  border-[5px] border-[#207938] " src="https://miro.medium.com/v2/resize:fit:1400/1*CzmHdmVSwWyCTXqzq61HjA.png" alt="pic" />

            <img className="bg-white h-24 p-4 rounded-full  border-[5px] border-[#207938] " src="https://www.marketplacefairness.org/wp-content/uploads/2022/06/Bitget-logo.png" alt="pic" />

           

            
        </div>
</div>
      </div>
    </div>
  );
};

export default Stake;
