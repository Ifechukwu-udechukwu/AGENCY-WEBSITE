import Title from "./Title";
import { motion } from "motion/react";


const OurWork = () => {

    const workData = [
        {
            title: "Mobile app marketing",
            description: "We turn bold ideas into powerful digital solutions that connect, engage....",
            image: "/app.png"
        },
        {
            title: "Dashboard management",
            description: "We help you execute your place and deliver results.",
            image: "/dashboard.png"
        },
        {
            title: "Fitness app promotion",
            description: "We help you create a marketing strategy that drives results.",
            image: "/fitness.png"
        }
    ]

    return (
        <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            transition={{ staggerChildren: 0.2 }}
            id="our-work" className="flex flex-col items-center gap-6 sm:gap-7 px-4 sm:px-8 md:px-12 lg:px-24 xl:px-40 pt-20 sm:pt-24 md:pt-30 text-gray-700 dark:text-white">
            <Title title="Our latest work" desc="From strategy to execution, we craft digital solutions that move your business forward." />

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 w-full max-w-5xl">
                {
                    workData.map((work, index) => (
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: index * 0.2 }}
                            viewport={{ once: true }}
                            key={index} className="hover:scale-102 duration-500 transition-all cursor-pointer">
                            <img src={work.image} alt="image" className="w-full h-48 sm:h-56 md:h-60 rounded-xl object-cover max-w-full" />
                            <h3 className="mt-3 mb-2 text-base sm:text-lg font-semibold">{work.title}</h3>
                            <p className="text-xs sm:text-sm opacity-60 w-full sm:w-5/6">{work.description}</p>
                        </motion.div>
                    ))
                }
            </div>

        </motion.div>
    )
}

export default OurWork