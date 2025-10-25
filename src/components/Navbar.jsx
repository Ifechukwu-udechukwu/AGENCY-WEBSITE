import { useState } from "react";
import ThemeToggleBtn from "./ThemeToggleBtn";
import { motion } from "motion/react";

const Navbar = ({theme, setTheme}) => {


    const [sidebarOpen, setSidebarOpen] = useState(false)

    return ( 
        <motion.div 
        initial={{opacity: 0, y: -50}}
        animate={{opacity: 1, y: 0}}
        transition={{duration: 0.6, ease: "easeOut"}}
         className="flex justify-between items-center px-4 sm:px-8 md:px-12 lg:px-24 xl:px-40 py-3 sm:py-4 sticky top-0 z-20 backdrop-blur-xl font-medium bg-white/50 dark:bg-gray-900/70">

            <img src={theme === "dark" ? "/company.png" : "enterprise.png"} alt="company logo" className="w-8 sm:w-10 md:w-12 lg:w-15" />

            <div className={`text-gray-700 dark:text-white text-sm sm:text-sm ${!sidebarOpen ? "max-sm:w-0 overflow-hidden" : "max-sm:w-60 max-sm:pl-8"} max-sm:fixed top-0 bottom-0 right-0 max-sm:min-h-screen max-sm:h-full max-sm:flex-col max-sm:bg-primary max-sm:text-white max-sm:pt-20 flex sm:items-center gap-4 sm:gap-5 transition-all`}>

                <img src="/close.png" alt="icon" className="w-5 absolute right-4 top-4 sm:hidden" onClick={()=>setSidebarOpen(false)}/>

                <a onClick={()=>setSidebarOpen(false)} href="#" className="sm:hover:border-b py-2 sm:py-0">Home</a>
                <a onClick={()=>setSidebarOpen(false)} href="#services" className="sm:hover:border-b py-2 sm:py-0">Services</a>
                <a onClick={()=>setSidebarOpen(false)} href="#our-work" className="sm:hover:border-b py-2 sm:py-0">Our Work</a>
                <a onClick={()=>setSidebarOpen(false)} href="#contact-us" className="sm:hover:border-b py-2 sm:py-0">Contact Us</a>
            </div>

            <div className="flex items-center gap-2 sm:gap-4">

                <ThemeToggleBtn theme={theme} setTheme={setTheme}/>

                <img src={theme === "dark" ? "/menu-light.png" : "/menu.png"} alt="" onClick={()=>setSidebarOpen(true)} className="w-6 sm:hidden cursor-pointer"/>

                <a href="#contact-us" className="text-xs sm:text-sm max-sm:hidden flex items-center gap-2 bg-primary text-white px-4 sm:px-6 py-2 rounded-full cursor-pointer hover:scale-103 transition-all">
                    Connect <img src="/arrow.png" alt="icon" width={12} className="sm:w-3.5"/>
                </a>
            </div>

        </motion.div>
     );
}
 
export default Navbar;