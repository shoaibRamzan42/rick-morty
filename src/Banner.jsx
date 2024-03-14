import { React } from "react";

import { useEffect, useState } from "react";

import ProgressBar from "react-bootstrap/ProgressBar";
import "bootstrap/dist/css/bootstrap.min.css";

// const CustomProgressBar = ({ prog }) => {
//   return (
//     <div>
//       <ProgressBar
//         striped
//         now={prog}
//         style={{
//           backgroundColor: "white ",
//           height: "18px",
//         }}
//       />
//     </div>
//   );
// };

const Banner = () => {
  // const [active, setactive] = useState("eth");
  // const [timerHours, setTimerHours] = useState("");
  // const [timerMinutes, setTimerMinutes] = useState("");
  // const [timerSeconds, setTimerSeconds] = useState("");
  // const [timerDays, setTimerDays] = useState("");
  // const [usdtRaised, setusdtRaised] = useState(0);
  // const [prog, setProg] = useState(50);

  // const [tokenValue, settokenValue] = useState(0);
  // const [loading, setloading] = useState(false);
  // const [secondAmount, setsecondAmount] = useState(0);

  // // const { open } = useWeb3Modal()
  // // const { address, isConnecting } = useAccount()

  // const address = "";
  // const isConnecting = " ";
  // const handleBuy = async () => {
  //   try {
  //     setloading(true);

  //     let requiredAmount;
  //     if (active === "eth") {
  //       console.log(secondAmount);
  //       let x = (Number(secondAmount) * 0.0001).toFixed(8);

  //       console.log(x);
  //       requiredAmount = ethers.utils.parseUnits(x.toString(), "ether");

  //       console.log(Number(requiredAmount));

  //       const { request: contractrqst } = await prepareWriteContract({
  //         address: TOKEN_CONTRACT_ADDRESS,
  //         abi: TOKEN_CONTRACT_ABI,
  //         functionName: "buyWithETH",
  //         args: [secondAmount],
  //         value: requiredAmount,
  //       });

  //       const { hash: contractHash } = await writeContract(contractrqst);

  //       await waitForTransaction({
  //         contractHash,
  //         confirmations: 1,
  //       });
  //     } else {
  //       requiredAmount = tokenValue * Math.pow(10, 6);
  //       let tokenAddress = USDC_ADDRESS;
  //       if (active === "usdt") {
  //         tokenAddress = USDT_ADDRESS;
  //       }

  //       const { request } = await prepareWriteContract({
  //         address: tokenAddress,
  //         abi: TOKEN_ABI,
  //         functionName: "approve",
  //         args: [TOKEN_CONTRACT_ADDRESS, requiredAmount],
  //       });

  //       const { hash } = await writeContract(request);

  //       await waitForTransaction({
  //         hash,
  //         confirmations: 1,
  //       });

  //       let isUsdt = false;

  //       if (active === "usdt") {
  //         isUsdt = true;
  //       }

  //       const { request: contractrqst } = await prepareWriteContract({
  //         address: TOKEN_CONTRACT_ADDRESS,
  //         abi: TOKEN_CONTRACT_ABI,
  //         functionName: "buyWithStable",
  //         args: [isUsdt, secondAmount],
  //       });

  //       const { hash: contractHash } = await writeContract(contractrqst);

  //       await waitForTransaction({
  //         contractHash,
  //         confirmations: 1,
  //       });
  //     }
  //   } catch (error) {
  //     console.log(error);
  //   } finally {
  //     setloading(false);
  //   }
  // };

  // let interval;

  // const startTimer = (countDownDate) => {
  //   interval = setInterval(() => {
  //     const now = new Date().getTime();

  //     const distance = countDownDate - now;

  //     const days = Math.floor(distance / (24 * 60 * 60 * 1000)) % 30;
  //     const hours = Math.floor(
  //       (distance % (24 * 60 * 60 * 1000)) / (1000 * 60 * 60)
  //     );
  //     const minutes = Math.floor((distance % (60 * 60 * 1000)) / (1000 * 60));
  //     const seconds = Math.floor((distance % (60 * 1000)) / 1000);

  //     if (distance < 0) {
  //       // Stop Timer
  //       clearInterval(interval.current);
  //     } else {
  //       // Update Timer
  //       setTimerDays(days);
  //       setTimerHours(hours);
  //       setTimerMinutes(minutes);
  //       setTimerSeconds(seconds);
  //     }
  //   }, 1000);
  // };

  // useEffect(() => {
  //   const countDownDate = new Date("2023-12-07").getTime();
  //   const presentDate = new Date().getTime();

  //   const expiryTime = countDownDate - presentDate;

  //   if (expiryTime > 0) {
  //     startTimer(countDownDate);
  //   }
  // });

  // useEffect(() => {
  //   if (tokenValue === 0) {
  //     setsecondAmount(0);
  //   } else {
  //     convertor();
  //   }
  // }, [active, tokenValue]);

  // useEffect(() => {
  //   getUsdtRaisedValue();
  // }, [address]);

  // const getUsdtRaisedValue = async () => {
  //   const amount = await readContract({
  //     address: TOKEN_CONTRACT_ADDRESS,
  //     abi: TOKEN_CONTRACT_ABI,
  //     functionName: "amountSold",
  //   });

  //   let x = await readContract({
  //     address: TOKEN_CONTRACT_ADDRESS,
  //     abi: TOKEN_CONTRACT_ABI,
  //     functionName: "currentUSD",
  //     args: [],
  //   });

  //   let y = await readContract({
  //     address: TOKEN_CONTRACT_ADDRESS,
  //     abi: TOKEN_CONTRACT_ABI,
  //     functionName: "currentMax",
  //     args: [],
  //   });

  //   let requiredAmount = Number(x) / 1000000;

  //   setusdtRaised(requiredAmount * Number(amount));
  //   setProg((Number(x) / Number(y)) * 100);
  // };

  // const convertor = async () => {
  //   if (active === "eth") {
  //     let amount = tokenValue / 0.0001;

  //     setsecondAmount(amount.toFixed(0));
  //   } else {
  //     let amount = tokenValue / 0.2;
  //     setsecondAmount(amount.toFixed(0));
  //   }
  // };

  return (
    <div className="mt-24 bg-img1 bg-cover bg-no-repeat  py-16 px-3 lg:px-16 md:px-12 ">
      <div className="flex gap-5 font-Slackey justify-center items-center  flex-col ">
        <h1 className="btn-bg text-[32px]  md:text-[55px] lg:text-[70px] bg-cover bg-no-repeat p-3 font-semibold text-[#242269]">
          Rick-morty<span>V1</span>
        </h1>
        <div className="bg-text lg:text-[21px] text-[8px] h-[113px] md:text-[18px] text-[#242269] md:h-[220px] lg:h-[255px] bg-cover bg-no-repeat flex flex-col items-center justify-center p-8  ">
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
      
         
        
    </div>
  );
};

export default Banner;
