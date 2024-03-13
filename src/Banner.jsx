import { React } from "react";

import { useEffect, useState } from "react";

import ProgressBar from "react-bootstrap/ProgressBar";
import "bootstrap/dist/css/bootstrap.min.css";

const CustomProgressBar = ({ prog }) => {
  return (
    <div>
      <ProgressBar
        striped
        now={prog}
        style={{
          backgroundColor: "white ",
          height: "18px",
        }}
      />
    </div>
  );
};

const Banner = () => {
  const [active, setactive] = useState("eth");
  const [timerHours, setTimerHours] = useState("");
  const [timerMinutes, setTimerMinutes] = useState("");
  const [timerSeconds, setTimerSeconds] = useState("");
  const [timerDays, setTimerDays] = useState("");
  const [usdtRaised, setusdtRaised] = useState(0);
  const [prog, setProg] = useState(50);

  const [tokenValue, settokenValue] = useState(0);
  const [loading, setloading] = useState(false);
  const [secondAmount, setsecondAmount] = useState(0);

  // const { open } = useWeb3Modal()
  // const { address, isConnecting } = useAccount()

  const address = "";
  const isConnecting = " ";
  const handleBuy = async () => {
    try {
      setloading(true);

      let requiredAmount;
      if (active === "eth") {
        console.log(secondAmount);
        let x = (Number(secondAmount) * 0.0001).toFixed(8);

        console.log(x);
        requiredAmount = ethers.utils.parseUnits(x.toString(), "ether");

        console.log(Number(requiredAmount));

        const { request: contractrqst } = await prepareWriteContract({
          address: TOKEN_CONTRACT_ADDRESS,
          abi: TOKEN_CONTRACT_ABI,
          functionName: "buyWithETH",
          args: [secondAmount],
          value: requiredAmount,
        });

        const { hash: contractHash } = await writeContract(contractrqst);

        await waitForTransaction({
          contractHash,
          confirmations: 1,
        });
      } else {
        requiredAmount = tokenValue * Math.pow(10, 6);
        let tokenAddress = USDC_ADDRESS;
        if (active === "usdt") {
          tokenAddress = USDT_ADDRESS;
        }

        const { request } = await prepareWriteContract({
          address: tokenAddress,
          abi: TOKEN_ABI,
          functionName: "approve",
          args: [TOKEN_CONTRACT_ADDRESS, requiredAmount],
        });

        const { hash } = await writeContract(request);

        await waitForTransaction({
          hash,
          confirmations: 1,
        });

        let isUsdt = false;

        if (active === "usdt") {
          isUsdt = true;
        }

        const { request: contractrqst } = await prepareWriteContract({
          address: TOKEN_CONTRACT_ADDRESS,
          abi: TOKEN_CONTRACT_ABI,
          functionName: "buyWithStable",
          args: [isUsdt, secondAmount],
        });

        const { hash: contractHash } = await writeContract(contractrqst);

        await waitForTransaction({
          contractHash,
          confirmations: 1,
        });
      }
    } catch (error) {
      console.log(error);
    } finally {
      setloading(false);
    }
  };

  let interval;

  const startTimer = (countDownDate) => {
    interval = setInterval(() => {
      const now = new Date().getTime();

      const distance = countDownDate - now;

      const days = Math.floor(distance / (24 * 60 * 60 * 1000)) % 30;
      const hours = Math.floor(
        (distance % (24 * 60 * 60 * 1000)) / (1000 * 60 * 60)
      );
      const minutes = Math.floor((distance % (60 * 60 * 1000)) / (1000 * 60));
      const seconds = Math.floor((distance % (60 * 1000)) / 1000);

      if (distance < 0) {
        // Stop Timer
        clearInterval(interval.current);
      } else {
        // Update Timer
        setTimerDays(days);
        setTimerHours(hours);
        setTimerMinutes(minutes);
        setTimerSeconds(seconds);
      }
    }, 1000);
  };

  useEffect(() => {
    const countDownDate = new Date("2023-12-07").getTime();
    const presentDate = new Date().getTime();

    const expiryTime = countDownDate - presentDate;

    if (expiryTime > 0) {
      startTimer(countDownDate);
    }
  });

  useEffect(() => {
    if (tokenValue === 0) {
      setsecondAmount(0);
    } else {
      convertor();
    }
  }, [active, tokenValue]);

  useEffect(() => {
    getUsdtRaisedValue();
  }, [address]);

  const getUsdtRaisedValue = async () => {
    const amount = await readContract({
      address: TOKEN_CONTRACT_ADDRESS,
      abi: TOKEN_CONTRACT_ABI,
      functionName: "amountSold",
    });

    let x = await readContract({
      address: TOKEN_CONTRACT_ADDRESS,
      abi: TOKEN_CONTRACT_ABI,
      functionName: "currentUSD",
      args: [],
    });

    let y = await readContract({
      address: TOKEN_CONTRACT_ADDRESS,
      abi: TOKEN_CONTRACT_ABI,
      functionName: "currentMax",
      args: [],
    });

    let requiredAmount = Number(x) / 1000000;

    setusdtRaised(requiredAmount * Number(amount));
    setProg((Number(x) / Number(y)) * 100);
  };

  const convertor = async () => {
    if (active === "eth") {
      let amount = tokenValue / 0.0001;

      setsecondAmount(amount.toFixed(0));
    } else {
      let amount = tokenValue / 0.2;
      setsecondAmount(amount.toFixed(0));
    }
  };

  return (
    <div className="mt-24 bg-img1 bg-cover bg-no-repeat  py-16 px-3 lg:px-16 md:px-12 flex items-center">
      <div className="flex gap-5 font-Slackey justify-start  flex-col ">
        <h1 className="btn-bg text-3xl bg-no-repeat p-3 font-semibold text-[#242269]">
          Rick-morty<span>V1</span>
        </h1>
        <div className="bg-text text-[18px] text-[#242269] h-[230px] bg-contain bg-no-repeat flex flex-col items-center justify-center p-12  ">
          <p className="mb-1">Missed $Rick-morty's 100x PUMP in 2023?</p>
          <p className="mb-1">Now's your chance to buy Rick-morty V2!</p>
          <p className="mb-1">Launching on Bigger and Better Exchanges!</p>
        </div>
        <div className="flex items-center gap-5">
          <button
            className={`block bg-cover text-[#242269] capitalize animate hover:scale-105 duration-700  btn-bg font-Slackey font-semibold  py-3 md:py-6 px-4 rounded-[5px] text-[12px] md:text-[25px] leading-4 `}
          >
            How to buy & Stake
          </button>
          <button
            className={`block text-[#242269] capitalize animate hover:scale-105 duration-700  btn-bg font-Slackey font-semibold  py-3 md:py-6 px-4 rounded-[5px] text-[12px] md:text-[25px] leading-4 `}
          >
            Whitepaper
          </button>
        </div>
       
      </div>
      
          <div className="max-w-[600px] w-full mt-[40px] md:mt-0 mx-auto md:grow rounded-[24px] relative">
            <div
              className="relative z-10 py-[32px] px-[24px] md:p-[32px] rounded-[24px] h-full"
              style={{
                background: "black",
                backdropFilter: "blur(2px)",
              }}
            >
              <div className="flex font-Slackey text-[#74E291] items-center gap-3 flex-col justify-center">
                
                
                  <h2 className="text-[24px] text-center text-[#74E291] [w-80%]  font-semibold">
                  Last chance to buy Rick-morty V2 before exchange listings
                  </h2>

                
                
                  <h2 className="text-[24px] text-center [w-80%] text-[#74E291] font-semibold">
                  Last chance to buy Rick-morty V2 before exchange listings
                  </h2>

                
              </div>

              <div className="mt-[24px]">
                <h2 className="text-center text-[16px] font-bold text-[#74E291]">
                  BUY NOW BEFORE PRICE <br className="md:hidden" /> INCREASE!
                </h2>
                <div className="my-[24px] relative">
                  {/* <CustomProgressBar prog={prog} /> */}
                  <div className="absolute inset-0 flex justify-center items-center">
                    {/* <h2 className="text-center text-[11px] font-semibold text-white">
                      Until End Of Beta Stage
                    </h2> */}
                  </div>
                </div>
              </div>

              <div className="mb-[24px] font-Slackey mt-[12px] h-[1px] w-full bg-[rgba(63,253,151,0.30)] " />

              <h2 className="text-center font-Slackey text-[16px] font-bold text-[#74E291]">
                USDT RAISED{" "}
                <span className="font-normal">= ${usdtRaised} / $250 ,000</span>
              </h2>

              <div className="flex my-[24px] font-Slackey items-center gap-[10px]">
                <div className=" h-[1px] w-full bg-[rgba(63,253,151,0.30)]" />

                <h2 className="text-center font-Slackey text-[16px] flex-shrink-0 font-bold text-[#74E291]">
                  1 RM <span className="font-normal">= $0.20</span>
                </h2>

                <div className=" h-[1px] w-full bg-[rgba(63,253,151,0.30)]" />
              </div>

              <h2 className="text-center font-Slackey text-[16px] font-bold text-[#74E291] mt-[6px]">
                YOUR PURCHASED RM <span className="font-normal">= 0</span>
              </h2>

              {/* <h2 className='text-center text-[16px] font-bold text-[#BDBDBD] mt-[6px]'>
                                Beta stage:  <span className='font-normal'>$250k $0.20</span>
                            </h2>
                            <h2 className='text-center text-[16px] font-bold text-[#BDBDBD] mt-[6px]'>
                                Stage 1:  <span className='font-normal'>$1.5M $0.22</span>
                            </h2>
                            <h2 className='text-center text-[16px] font-bold text-[#BDBDBD] mt-[6px]'>
                                Stage 2:  <span className='font-normal'>$2.5M $0.25</span>
                            </h2>
                            <h2 className='text-center text-[16px] font-bold text-[#BDBDBD] mt-[6px]'>
                                Stage 3:  <span className='font-normal'>$3.25M $0.27</span>
                            </h2>
                            <h2 className='text-center text-[16px] font-bold text-[#BDBDBD] mt-[6px]'>
                                Stage 4: <span className='font-normal'>$3.5M $0.30</span>
                            </h2> */}

              <div className="grid grid-cols-3 gap-[16px] mt-[24px]">
                <div
                  className="h-[40px] btn-bg rounded-[8px] cursor-pointer flex justify-center items-center gap-[8px]"
                  
                  onClick={() => setactive("eth")}
                >
                  <img src="" alt="" />
                  <h2 className="text-[#242269] bg-cover p-4 font-Slackey font-bold text-[20px]">ETH</h2>
                </div>
                <div
                  className="h-[40px] rounded-[8px] cursor-pointer flex justify-center items-center gap-[8px]"
                 
                  onClick={() => setactive("usdt")}
                >
                  <img src="" alt="" />
                  <h2 className="text-[#242269] btn-bg bg-cover p-3 font-Slackey font-bold text-[20px]">USDT</h2>
                </div>
                <div
                  className="h-[40px] rounded-[8px] cursor-pointer flex justify-center items-center gap-[8px]"
                 
                  onClick={() => setactive("usdc")}
                >
                  <img src="" alt="" />
                  <h2 className="text-[#242269] bg-cover btn-bg p-3 font-Slackey font-bold text-[20px]">USDC</h2>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-[24px] mt-[24px]">
                <div>
                  <h2 className="text-[#BDBDBD] font-Slackey font-normal text-[14px]">
                    Pay with <span className="uppercase">{active}</span>
                  </h2>
                  <div className="md:max-w-[212px] relative mt-[10px]">
                    <input
                      type="number"
                      className="h-[40px] rounded-[8px] text-[#F5F5F5] placeholder:text-[#F5F5F5] placeholder:opacity-60 text-[16px] font-normal w-full outline-none pl-[16px] pr-[45px] bg-black"
                      placeholder="0"
                      onChange={(e) => settokenValue(e.target.value)}
                      value={tokenValue}
                      style={{
                        border: "1px solid  rgba(63, 253, 151, 0.50)",
                      }}
                    />
                    <div className="absolute bottom-0 top-0 right-[13px] flex items-center">
                      {/* <img src={active === 'eth' ? eth : active === 'usdt' ? tether : usd} alt="" /> */}
                    </div>
                  </div>
                </div>

                <div>
                  <h2 className="text-[#BDBDBD] font-Slackey font-normal text-[14px]">
                    RM Value
                  </h2>
                  <div className="md:max-w-[212px] relative mt-[10px]">
                    <input
                      type="number"
                      className="h-[40px] rounded-[8px] text-[#F5F5F5] placeholder:text-[#F5F5F5] placeholder:opacity-60 text-[16px] font-normal w-full outline-none pl-[16px] pr-[45px] bg-black"
                      placeholder="0"
                      disabled
                      value={secondAmount}
                      style={{
                        border: "1px solid  rgba(63, 253, 151, 0.50)",
                      }}
                    />
                    <div className="absolute bottom-0 top-0 right-[13px] flex items-center">
                      <div className="flex justify-center items-center h-[20px] w-[20px] rounded-full bg-[#219653]">
                        <img src="" alt="" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <button
            className={`block text-[#242269] mt-3 w-full capitalize animate hover:scale-105 duration-700  btn-bg font-Slackey font-semibold  py-3 md:py-6 px-4 rounded-[5px] text-[12px] md:text-[25px] leading-4 `}
          >
            Buy Now
          </button>
            </div>

            <div className="absolute inset-[-1px] bg-gradient-to-b from-[#3FFD97] to-black rounded-[24px]" />
          </div>
        
    </div>
  );
};

export default Banner;
