import { Bars3BottomRightIcon, XMarkIcon } from '@heroicons/react/24/solid'
import { useState } from 'react'
import logo from '../src/assets/Logo.png'
import { motion } from 'framer-motion';
import { textVariant } from './motions';

const MobNav = ({ setisOpen }) => {
 const address = "" ;
   
    const[wallet , setWallet] = useState("Connect Wallet");
    function extractFirstAndLastFive(address) {
        const firstFive = address.slice(0, 5);
        const lastFive = address.slice(-5);
        return firstFive + "..." + lastFive;
      }
    const links = [
        
        'Staking',
        'About',
        'RoadMap'
    ]

    let isConnect = false
    

    return (
        <div className='block md:hidden'>

            <div className='fixed inset-0 bg-black px-[20px] py-[20px]'>
                <div className='relative h-full'>
                    <div className='flex justify-between items-center'>
                    <h1 className= 'md:text-[20px] text-[28px] lg:text-[30px] font-Slackey text-[#00ff00]'>Rick-Morty</h1>

                        <XMarkIcon
                            onClick={() => setisOpen(false)} className='w-[35px] text-[#00ffff]'
                        />
                    </div>
                    <motion.div
                        initial="hidden"
                        whileInView="show"
                        viewport={{ once: true }}
                        className='lg:pt-[90px]'
                    >
                        <div className='mt-[89px] flex flex-col gap-[36px]'>
                            {links.map((item, i) => {


                                let x = item
                                if (x === 'Staking') {
                                    x = 'buy'
                                }
                                if (x === 'About') {
                                    x = 'about'
                                }
                                if (x === 'RoadMap') {
                                    x = 'road'
                                }
                                return <motion.a
                                    variants={textVariant(0.2 * (i + 1))}
                                    className={'text-[24px] font-Slackey font-bold capitalize text-center text-[#00ffff] list-none'}
                                    viewport={{ once: true }}
                                    href={`#${x}`}
                                    onClick={() => setisOpen(false)}
                                >
                                    {item}
                                </motion.a>
                            })}

                        </div>
                    </motion.div>


                    <div className='absolute bottom-[20px] left-0 right-0 '>
                        <motion.div
                            whileInView={{ scale: [0.7, 1], opacity: [0, 1] }}
                            transition={{ duration: 1.2, ease: 'easeInOut' }}
                            initial='hidden'
                            style={{ opacity: 0 }}
                            viewport={{ once: true }}
                        >

                            <div
                                className='flex flex-col gap-[20px]'
                            >
                                <button className='text-[#00ffff] font-Slackey text-[24px]   btn-bg h-[51px] w-full font-medium rounded-[10px]'

                                  

                                >
                                    {address ? extractFirstAndLastFive(address) : 'Buy Now'}
                                </button>

                            </div>

                        </motion.div>
                    </div>
                </div>
            </div>

        </div>

    )
}

export default MobNav