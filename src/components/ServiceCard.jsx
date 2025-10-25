import { useRef, useState } from "react";
import { motion } from "motion/react";


const ServiceCard = ({service, index}) => {

    const [position, setPosition] = useState({x: 0, y: 0});

    const [visible, setVisible] = useState(false);

    const divRef = useRef(null);

    const handleMouseMove = (e)=>{
        const bounds = divRef.current.getBoundingClientRect();
        setPosition({x: e.clientX - bounds.left, y: e.clientY - bounds.top});
    }

  return (
    <motion.div
    initial={{opacity: 0, y: 30}}
    whileInView={{opacity: 1, y: 0}}
    transition={{duration: 0.5, delay: index * 0.2}}
    viewport={{once: true}}
     className="relative overflow-hidden w-full max-w-lg mx-auto sm:mx-2 md:mx-4 rounded-xl border border-gray-200 dark:border-gray-700 shadow-2xl shadow-gray-100 dark:shadow-white/10" onMouseEnter={()=>setVisible(true)} onMouseLeave={()=>setVisible(false)} ref={divRef} onMouseMove={handleMouseMove}>
        <div className={`pointer-events-none blur-2xl rounded-full bg-gradient-to-r from-blue-500 via-indigo-500 to-purple-500 w-[200px] h-[200px] sm:w-[300px] sm:h-[300px] absolute z-0 transition-opacity duration-500 mix-blend-lighten ${visible ? "opacity-70" : "opacity-0"}`} style={{top: position.y - 100, left: position.x - 100}} />
            <div className="flex items-center gap-6 sm:gap-8 md:gap-10 p-6 sm:p-8 hover:p-5.5 sm:hover:p-7.5 hover:m-0.5 transition-all rounded-[10px] bg-white dark:bg-gray-900 z-10 relative">
                
                <div className="bg-gray-100 dark:bg-gray-700 rounded-full flex-shrink-0">
                    <img src={service.icon} alt="icon" className="w-16 sm:w-20 md:max-w-24 bg-white dark:bg-gray-900 rounded-full m-2" />
                </div>

                <div className="flex-1 min-w-0">
                    <h3 className="font-bold text-sm sm:text-base">{service.title}</h3>
                    <p className="text-xs sm:text-sm mt-2 leading-relaxed">{service.description}</p>
                </div>
            </div>
        
    </motion.div>
  )
}

export default ServiceCard