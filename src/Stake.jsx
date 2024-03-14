import React from "react";
import stake from "../src/assets/stake.png";

const Stake = () => {
  return (
    <div className="py-16 lg:px-16 font-Slackey md:px-12 px-3">
      <div className="flex flex-col items-center justify-center">
        <div className="flex bg-shade justify-center items-center">
          <img src={stake} className="max-w-[50%]" alt="pic" />
          <h1 className="text-[#242269] justify-center w-[30%] flex items-center gb-stak bg-cover h-[140px] lg:h-[195px] xl:h-[255px] font-semibold text-[11px] lg:text-[16px] xl:text-[18px]">
            Did U miss 100X Pump??
          </h1>
        </div>
        <div className="flex flex-col gap-3  items-center px-4 py-2 border-[#207938] rounded-xl border-[5px] bg-[#74E291] justify-center">
          <h1 className="text-[#242269] text-center text-[36px] leading-[55px] lg:text-[45px]">
            {" "}
            BIGGER & BETTER! ABSORBING ALL DAMP
          </h1>
          <h1 className="text-[#242269] text-center leading-[32px] text-[22px] lg:leading-[35px] w-[90%] lg:text-[25px]">
            {" "}
            Buy and stake $Rick-morty using the button above and start earning
            rewards today. Rick-mortyrs will gain tokens by staking $Rick-morty
            before the claim date.
          </h1>
        </div>
        <div className="pt-16 gap-8 flex flex-col item center justify-center">
          <h1 className=" text-center bg-shade bg-no-repeat bg-cover text-[35px] text-[#74E291] font-bold  lg:text-[45px]">
            V1 Listed and Featured in...
          </h1>
          <div className="items-center gap-8 flex flex-wrap justify-center">
            <img
              className="bg-white  h-20 lg:h-24 p-3 lg:p-4 rounded-full  border-[5px] border-[#207938] "
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/5a/Uniswap_Logo_and_Wordmark.svg/2560px-Uniswap_Logo_and_Wordmark.svg.png"
              alt="pic"
            />

            <img
              className="bg-white h-20 lg:h-24 p-3 lg:p-4 rounded-full  border-[5px] border-[#207938] "
              src="https://mms.businesswire.com/media/20211208005504/en/933723/5/logo-dark.daa82de1.jpg"
              alt="pic"
            />

            <img
              className="bg-white h-20 lg:h-24 p-3 lg:p-4 rounded-full  border-[5px] border-[#207938] "
              src="https://miro.medium.com/v2/resize:fit:1400/1*CzmHdmVSwWyCTXqzq61HjA.png"
              alt="pic"
            />

            <img
              className="bg-white h-20 lg:h-24 p-3 lg:p-4 rounded-full  border-[5px] border-[#207938] "
              src="https://www.marketplacefairness.org/wp-content/uploads/2022/06/Bitget-logo.png"
              alt="pic"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Stake;
