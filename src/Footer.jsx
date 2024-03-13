import React from "react";
import { Link } from "react-router-dom";
import cLogo from "../src/assets/Logo.png"
const Footer = () => {
  return (<>
    <div className="lg:px-16 md:px-12 px-3 py-16">
      <div className="flex flex-col gap-3  items-center px-4 py-3 bg-[#207938] rounded-xl border-[5px] border-[#74E291] justify-center">
        <h1 className="text-white font-Slackey text-[45px]"> DISCLAIMER</h1>
        <h1 className="text-white font-custom w-[90%] text-[20px]">
          {" "}
          $Sponge V2 has no association with Nickelodeon or their creation
          SpongeBob SquarePants. This token is simply paying homage to a meme we
          all love and recognise. $SPONGEV2 is a meme coin with no intrinsic
          value or expectation of financial return. There is no formal team. The
          Sponge ecosystem may offer P2E aspects, however the coin is intended
          for entertainment purposes only.
        </h1>
      </div>
    </div>

    <footer>
      <div className="py-12 font-custom bg-footer bg-auto bg-no-repeat md:py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">

          {/* Top area: Blocks */}
          <div className="grid md:grid-cols-12 gap-8 lg:gap-20 mb-8 md:mb-12">

            {/* 1st block */}
            <div className="md:col-span-4 lg:col-span-5">
              <div className="mb-2">
                {/* Logo */}
                <Link href="/" className="inline-block" aria-label="Cruip">
                <h1 className='text-[20px] font-Slackey text-[#74e291]'>Rick-Morty</h1>
                </Link>
              </div>
              <div className="text-white">We are a consortium of adept developers, skilled technical professionals, and visionary strategists devoted to delivering flawless products.</div>
            </div>

            {/* 2nd, 3rd and 4th blocks */}
            <div className="md:col-span-8 md:grid-cols-3 lg:col-span-7 grid sm:grid-cols-1 gap-8">

              {/* 2nd block */}
              <div className="text-sm">
                <h6 className="text-[#74e291] font-semibold mb-1">Services</h6>
                <ul>
                  <li className="mb-1">
                    <Link href="/" className="text-white hover:text-[#207938] transition duration-150 ease-in-out">Web Developlent</Link>
                  </li>
                  <li className="mb-1">
                    <Link href="/" className="text-white hover:text-[#207938] transition duration-150 ease-in-out">Mobile App Development</Link>
                  </li>
                  <li className="mb-1">
                    <Link href="/" className="text-white hover:text-[#207938] transition duration-150 ease-in-out">Blockchain Development</Link>
                  </li>
                  <li className="mb-1">
                    <Link href="/" className="text-white hover:text-[#207938] transition duration-150 ease-in-out">Software Development</Link>
                  </li>
                  <li className="mb-1">
                    <Link href="/" className="text-white hover:text-[#207938] transition duration-150 ease-in-out">Metaverse/Crypto</Link>
                  </li>
                  {/* <li className="mb-1">
                    <Link href="/" className="text-white hover:text-[#207938] transition duration-150 ease-in-out">Web3 Development</Link>
                  </li> */}
                </ul>
              </div>

              {/* 3rd block */}
              <div className="text-sm">
                <h6 className="text-[#74e291] font-semibold mb-1">Important links</h6>
                <ul>
                  <li className="mb-1">
                    <Link href="/" className="text-white hover:text-[#207938] transition duration-150 ease-in-out">About us</Link>
                  </li>
                  <li className="mb-1">
                    <Link href="/" className="text-white hover:text-[#207938] transition duration-150 ease-in-out">Hire</Link>
                  </li>
                  <li className="mb-1">
                    <Link href="/" className="text-white hover:text-[#207938] transition duration-150 ease-in-out">Services</Link>
                  </li>
                  <li className="mb-1">
                    <Link href="/" className="text-white hover:text-[#207938] transition duration-150 ease-in-out">How it Works</Link>
                  </li>
                  {/* <li className="mb-1">
                    <Link href="/" className="text-white hover:text-[#207938] transition duration-150 ease-in-out">Nostrud exercitation</Link>
                  </li> */}
                </ul>
              </div>

              {/* 4th block */}
              

            </div>

          </div>

          {/* Bottom area */}
          <div className="md:flex md:items-center md:justify-between">

           

            {/* Copyrights note */}
            <div className="text-white font-semibold text-sm mr-4"> Copyrights &copy;2024 Reserved.</div>

          </div>

        </div>
      </div>
    </footer>
    </>
  );
};

export default Footer;
