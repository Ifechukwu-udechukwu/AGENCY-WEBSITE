import { motion } from "motion/react";


const Footer = ({ theme }) => {
    return (
        <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="bg-slate-50 dark:bg-gray-900 pt-8 sm:pt-10 mt-16 sm:mt-20 md:mt-32 lg:mt-40 px-4 sm:px-8 md:px-10 lg:px-24 xl:px-40">
            {/* footer top */}
            <div className="flex justify-between lg:items-center max-lg:flex-col gap-8 sm:gap-10">
                <motion.div
                    initial={{ opacity: 0, x: -30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                    viewport={{ once: true }}
                    className="space-y-4 sm:space-y-5 text-sm text-gray-700 dark:text-gray-400">
                    <img src={theme === "dark" ? "/company.png" : "/enterprise.png"} alt="logo" className="w-12 sm:w-15" />
                    <p className="max-w-md text-xs sm:text-sm">From strategy to execution, we craft digital solutions that move your business forward</p>

                    <ul className="flex flex-wrap gap-4 sm:gap-6 md:gap-8">
                        <li><a className="text-primary hover:text-green-500 text-xs sm:text-sm" href="#hero">Home</a></li>
                        <li><a className="text-primary hover:text-green-500 text-xs sm:text-sm" href="#services">Services</a></li>
                        <li><a className="text-primary hover:text-green-500 text-xs sm:text-sm" href="#our-work">Our Work</a></li>
                        <li><a className="text-primary hover:text-green-500 text-xs sm:text-sm" href="#contact-us">Contact Us</a></li>

                    </ul>
                </motion.div>
                <motion.div
                    initial={{ opacity: 0, x: 30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6, delay: 0.3 }}
                    viewport={{ once: true }}
                    className="text-gray-600 dark:text-gray-400">
                    <h3 className="font-semibold text-sm sm:text-base">Subscribe to our newsletter</h3>
                    <p className="text-xs sm:text-sm mt-2 mb-4 sm:mb-6">The latest news, articles, and resources, sent to your inbox weekly.</p>
                    <div className="flex flex-col sm:flex-row gap-2 text-sm">
                        <input type="email" placeholder="Enter your email" className="w-full p-3 text-sm outline-none rounded dark:text-gray-200 bg-transparent border border-gray-300 dark:border-gray-500" />
                        <button className="bg-primary text-white rounded px-4 sm:px-6 py-3 whitespace-nowrap">Subscribe</button>
                    </div>
                </motion.div>

            </div>

            <hr className="border-gray-300 dark:border-gray-600 my-6" />

            {/* footer bottom */}
            <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.4 }}
                viewport={{ once: true }}
                className="pb-6 text-xs sm:text-sm text-gray-500 flex flex-col sm:flex-row justify-center sm:justify-between gap-4 items-center">
                <p className="text-center sm:text-left">Copyright 2025 © IfeChukwu - All Right Reserved</p>
                <div className="flex gap-3 sm:gap-4 items-center">
                    <img className="w-6 h-6 sm:w-8 sm:h-8" src="/whatsapp.png" alt="icon" />
                    <img className="w-6 h-6 sm:w-8 sm:h-8" src="/facebook.png" alt="icon" />
                    <img className="w-6 h-6 sm:w-8 sm:h-8" src="/instagram.png" alt="icon" />
                    <img className="w-6 h-6 sm:w-8 sm:h-8" src="/linkedin.png" alt="icon" />
                </div>
            </motion.div>
        </motion.div>
    )
}

export default Footer