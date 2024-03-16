import { useMediaQuery } from "@mui/material";
import img from "../src/assets/Rmc.png";
import { motion } from "framer-motion";

const Grow = () => {
  const smallerthen768 = useMediaQuery("(max-width:768px)");

  return (
    <div className="bg-transparent pt-14 mt-[-3px]">
    <h1 className="text-[#00ff00] font-Slackey text-center bg-shade bg-no-repeat bg-cover font-Bold text-[30px] md:text-[35px] lg:text-[45px] ">What is RMC?</h1>
      <div className="max-w-[1160px] px-[16px] md:px-[20px] mx-auto py-[40px] sm:py-[80px] lg:py-[120px] flex flex-col md:flex-row gap-[32px] sm:gap-[60px] lg:gap-[120px] items-center">
        <div className="relative flex-shrink-0">
          <div className="relative z-10">
          <motion.div
            initial={{ x: "-100%", opacity: 0 }}
            // viewport={{ once :true,}}
            transition={{ duration: 1.5, ease: "easeInOut" }}
            whileInView={{ x: 0, opacity: 1 }}
            className=""
          >
              <img
                src={img}
                alt=""
                className="w-[280px] md:w-[300px] lg:w-[400px]"
              />
            </motion.div>
          </div>
          <div className="absolute top-[-150px] sm:top-[-23px] left-[-125px]">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="368"
              height="368"
              viewBox="0 0 368 368"
              fill="none"
            >
              <g filter="url(#filter0_f_250_7960)">
                <path
                  d="M87.5 280.5H91.9661C141.414 280.5 181.5 240.414 181.5 190.966V186.5H177.034C127.586 186.5 87.5 226.586 87.5 276.034V280.5Z"
                  stroke="#32CD32"
                  strokeWidth="5"
                />
                <path
                  d="M181.5 280.5H177.034C127.586 280.5 87.5 240.414 87.5 190.966V186.5H91.9661C141.414 186.5 181.5 226.586 181.5 276.034V280.5Z"
                  stroke="#32CD32"
                  strokeWidth="5"
                />
                <path
                  d="M186.5 280.5H190.966C240.414 280.5 280.5 240.414 280.5 190.966V186.5H276.034C226.586 186.5 186.5 226.586 186.5 276.034V280.5Z"
                  stroke="#32CD32"
                  strokeWidth="5"
                />
                <path
                  d="M186.5 87.5H190.966C240.414 87.5 280.5 127.586 280.5 177.034V181.5H276.034C226.586 181.5 186.5 141.414 186.5 91.9661V87.5Z"
                  stroke="#32CD32"
                  strokeWidth="5"
                />
                <rect
                  x="87.5"
                  y="87.5"
                  width="94"
                  height="94"
                  rx="47"
                  stroke="#32CD32"
                  strokeWidth="5"
                />
              </g>
              <defs>
                <filter
                  id="filter0_f_250_7960"
                  x="0"
                  y="0"
                  width="368"
                  height="368"
                  filterUnits="userSpaceOnUse"
                  colorInterpolationFilters="sRGB"
                >
                  <feFlood floodOpacity="0" result="BackgroundImageFix" />
                  <feBlend
                    mode="normal"
                    in="SourceGraphic"
                    in2="BackgroundImageFix"
                    result="shape"
                  />
                  <feGaussianBlur
                    stdDeviation="42.5"
                    result="effect1_foregroundBlur_250_7960"
                  />
                </filter>
              </defs>
            </svg>
          </div>
        </div>

        <motion.div
            initial={{ x: "100%", opacity: 0 }}
            // viewport={{ once :true,}}
            transition={{ duration: 1.5, ease: "easeInOut" }}
            whileInView={{ x: 0, opacity: 1 }}
            className=""
          >
        <div className="border shadow-5xl px-4 py-5 rounded-xl br-green">
          <h6
            className={`text-[#00ffff] font-Slackey mb-2 bg-shade bg-no-repeat bg-cover md:text-[18px] sm:text-[28px] font-semibold ${
              smallerthen768 && "text-center "
            }`}
          >
            Real Passive Income
          </h6>
          <h1
            className={`text-[#00ff00] font-custom md:text-[45px] text-[34px]  font-semibold mt-[-4px] ${
              smallerthen768 && "text-center "
            }`}
          >
            What is RMC?
          </h1>
          <p
            className={`pt-[20px] font-Slackey sm:pt-[48px] text-[#00ffff] text-[16px] sm:text-[20px] lg:text-[24px] font-normal ${
              smallerthen768 && "text-center "
            }`}
          >
            RMC is a decentralized token that will allow users to be able to
            stake stable coins and earn stable coins with a good APY (25%).
            <br />
            <br />
            We are solving a huge problem in the crypto space by providing real
            passive income to investors. Just hold RMC and stake your stable
            coins in any one of our pools.
          </p>
        </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Grow;
