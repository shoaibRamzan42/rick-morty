import React from "react";
import { Link } from "react-router-dom";
import cLogo from "../src/assets/Logo.png"
import {motion} from "framer-motion"
const Footer = () => {
  return (<>
    <div className="lg:px-16 md:px-12 px-3 py-16">
    <motion.div
            whileInView={{ scale: [0.7, 1], opacity: [0, 1] }}
            transition={{ duration: 1.5, ease: "easeInOut" }}
            initial="hidden"
            style={{ opacity: 0 }}
            // viewport={{ once: true }}
            className=""
          >
      <div className="flex flex-col  gap-3  items-center px-4 py-3 bg-transparent shadow-5xl rounded-xl border-[2px] border-[#00ffff] justify-center">
        <h1 className="text-[#00ff00] font-Slackey  md:text-[35px] text-[30px] lg:text-[45px]"> DISCLAIMER</h1>
        <h1 className="text-[#00ffff]  text-center font-custom text-[13px] md:text-[16px] leading-[22px] lg:leading-[30px] w-full md:w-[90%] lg:text-[20px]">
          {" "}
          $Rick-morty   has no association with Nickelodeon or their creation
          Rick-mortyBob SquarePants. This token is simply paying homage to a meme we
          all love and recognise. $Rick-morty  is a meme coin with no intrinsic
          value or expectation of financial return. There is no formal team. The
          Rick-morty ecosystem may offer P2E aspects, however the coin is intended
          for entertainment purposes only.
        </h1>
      </div>
      </motion.div>
    </div>

    <footer>
      <div id="about" className="py-12 font-custom bg-footer bg-auto bg-no-repeat md:py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">

          {/* Top area: Blocks */}
          <div className="grid md:grid-cols-12 gap-8 lg:gap-20 mb-8 md:mb-12">

            {/* 1st block */}
            <div className="md:col-span-4 lg:col-span-5">
              <div className="mb-2">
                {/* Logo */}
                <Link href="/" className="inline-block" aria-label="Cruip">
                <h1 className='md:text-[20px] lg:text-[30px] font-Slackey text-[#00ff00]'>Rick-Morty</h1>
                </Link>
              </div>
              <div className="text-[#00ffff]">We are a consortium of adept developers, skilled technical professionals, and visionary strategists devoted to delivering flawless products.</div>
            </div>

            {/* 2nd, 3rd and 4th blocks */}
            <div className="md:col-span-8 md:grid-cols-3 lg:col-span-7 grid sm:grid-cols-1 gap-8">

              {/* 2nd block */}
              <div className="text-sm">
                <h6 className="text-[#00ff00] font-semibold font-Slackey mb-1">Services</h6>
                <ul>
                  <li className="mb-1">
                    <Link href="/" className="text-[#00ffff] hover:text-[#00ff00] transition duration-150 ease-in-out">Terms</Link>
                  </li>
                  <li className="mb-1">
                    <Link href="/" className="text-[#00ffff] hover:text-[#00ff00] transition duration-150 ease-in-out">Privacy</Link>
                  </li>
                  <li className="mb-1">
                    <Link href="/" className="text-[#00ffff] hover:text-[#00ff00] transition duration-150 ease-in-out">Cookies</Link>
                  </li>
                  <li className="mb-1">
                    <Link href="/" className="text-[#00ffff] hover:text-[#00ff00] transition duration-150 ease-in-out">Legacy</Link>
                  </li>
                  <li className="mb-1">
                    <Link href="/" className="text-[#00ffff] hover:text-[#00ff00] transition duration-150 ease-in-out">Staking</Link>
                  </li>
                  {/* <li className="mb-1">
                    <Link href="/" className="text-[#00ffff] hover:text-[#00ff00] transition duration-150 ease-in-out">Web3 Development</Link>
                  </li> */}
                </ul>
              </div>

              {/* 3rd block */}
              <div className="text-sm">
                <h6 className="text-[#00ff00] font-semibold font-Slackey mb-1">Contact us</h6>
                <ul>
                  <li className="mb-1">
                    <Link href="/" className="text-[#00ffff] hover:text-[#00ff00] transition duration-150 ease-in-out">Telegram</Link>
                  </li>
                  <li className="mb-1">
                    <Link href="/" className="text-[#00ffff] hover:text-[#00ff00] transition duration-150 ease-in-out">Twitter</Link>
                  </li>
                  <li className="mb-1">
                    <Link href="/" className="text-[#00ffff] hover:text-[#00ff00] transition duration-150 ease-in-out">jjsonwilson1999@gmail.com</Link>
                  </li>
                  <li className="mb-1">
                    {/* <Link href="/" className="text-white hover:text-[#00ff00] transition duration-150 ease-in-out">How it Works</Link> */}
                  </li>
                  {/* <li className="mb-1">
                    <Link href="/" className="text-white hover:text-[#00ff00] transition duration-150 ease-in-out">Nostrud exercitation</Link>
                  </li> */}
                </ul>
              </div>

              {/* 4th block */}
              

            </div>

          </div>

          {/* Bottom area */}
          <div className="md:flex md:items-center md:justify-between">

           

            {/* Copyrights note */}
            <div className="text-[#00ff00] font-Slackey font-semibold text-sm mr-4"> Copyrights &copy;2024 Reserved.</div>

          </div>

        </div>
      </div>
    </footer>
    </>
  );
};

export default Footer;
