import { motion } from "motion/react";

const Hero = () => {
    return (
        <div id="hero" className="flex flex-col items-center gap-4 sm:gap-6 py-12 sm:py-16 md:py-20 px-4 sm:px-8 md:px-12 lg:px-24 xl:px-40 text-center w-full overflow-hidden text-gray-700 dark:text-white">

            <motion.div 
            initial={{opacity: 0, y: 20}}
            whileInView={{opacity:1, y: 0}}
            transition={{duration: 0.5, delay: 0.7}}
            viewport={{once: true}}
             className="inline-flex items-center gap-2 border border-gray-300 p-1.5 pr-3 sm:pr-4 rounded-full max-w-full">
                <img className="w-12 sm:w-16 md:w-20 flex-shrink-0" src="/group-profile.png" alt="icon" />
                <p className="text-xs font-medium whitespace-nowrap">Trusted by 100k+ people</p>
            </motion.div>

            <motion.h1 
            initial={{opacity: 0, y: 40}}
            whileInView={{opacity:1, y: 0}}
            transition={{duration: 0.6, delay: 0.8}}
            viewport={{once: true}}
             className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-[84px] font-medium xl:leading-[95px] max-w-5xl leading-tight sm:leading-tight md:leading-tight lg:leading-tight break-words">Turning imagination into <span className="bg-gradient-to-r from-[#5044E5] to-[#4d8cea] bg-clip-text text-transparent">digital</span> impact.</motion.h1>

            <motion.p 
            initial={{opacity: 0, y: 30}}
            whileInView={{opacity:1, y: 0}}
            transition={{duration: 0.5, delay: 1}}
            viewport={{once: true}}
             className="text-sm sm:text-base md:text-lg font-medium text-gray-500 dark:text-white/75 max-w-4/5 sm:max-w-lg pb-3 px-2 sm:px-0">Creating meaningful connections and turning big ideas into interactive digital experiences.</motion.p>

            <motion.div 
            initial={{opacity: 0, scale: 0.9}}
            whileInView={{opacity:1, scale: 1}}
            transition={{duration: 0.6, delay: 2}}
            viewport={{once: true}}
            className="relative">
                <img src="/office.jpg" alt="hero image" className="w-full sm:w-150 md:w-180 lg:w-250 xl:w-300 max-w-6xl rounded-lg sm:rounded-xl max-w-full" />
            </motion.div>

        </div>
    )
}

export default Hero