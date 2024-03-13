import React from 'react'
import { motion } from "framer-motion";
import Card7 from './Card7';
import road1 from '../src/assets/roadmap-bg1.png'
import road2 from '../src/assets/roadmap-bg2.png'
import road3 from '../src/assets/roadmap-bg3.png'

const RoadMap= () => {
  return (
    <div className='flex font-Slackey md:px-12 px-3 py-16 gap-8 flex-col justify-center items-center'>
        <h1 className="text-[#74E291] font-Bold text-[45px] ">RoadMap V2</h1>
        <p className='text-[#74e291] text-[36px] text-center font-medium font-custom'>The ultimate goal of $SPONGE is to soak up liquidity from the competition!  We’re absorbing all the damp.</p>
        <div className="  flex flex-wrap justify-center items-center gap-5">
          

         
          <motion.div
            initial={{ x: "-100%", opacity: 0 }}
            // viewport={{ once :true,}}
            transition={{ duration: 1.5, ease: "easeInOut" }}
            whileInView={{ x: 0, opacity: 1 }}
            className=""
          >
            <Card7 shade= {road1}
             head1="Sponge V2 Announcement" 
            head2="Staking for  Launched" 
            head3="Buy to Stake For  Bonus" 
            head4="Sponge Game " 
            head5="Absorb the damp"
                 
                  
            />
          </motion.div>

          <motion.div
            whileInView={{ scale: [0.7, 1], opacity: [0, 1] }}
            transition={{ duration: 1.5, ease: "easeInOut" }}
            initial="hidden"
            style={{ opacity: 0 }}
            // viewport={{ once: true }}
            className=""
          >
            {" "}
            <Card7 shade={road2}
              head1="$SPONGEV2 Claim" 
            head2="$SPONGEV2 Listing" 
            head3="Bigger and Better Exchanges" 
            head4="Sponge Game Development" 
            head5="10,000 Holders"
                  />
          </motion.div>

          <motion.div
            initial={{ x: "100%", opacity: 0 }}
            // viewport={{ once :true,}}
            transition={{ duration: 1.5, ease: "easeInOut" }}
            whileInView={{ x: 0, opacity: 1 }}
            className=""
          >
            <Card7  shade={road3}
            head1="Tier 1 CEX Listings" 
            head2="Sponge Game App Launch" 
            head3="$100M Market Cap" 
            head4="More Social Domination" 
            head5="All Damp Absorbed" 
                   />
          </motion.div>
        </div>
    </div>
  )
}

export default RoadMap
