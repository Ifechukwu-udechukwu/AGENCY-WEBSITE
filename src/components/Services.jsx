import ServiceCard from "./ServiceCard";
import Title from "./Title";
import { motion } from "motion/react";


const Services = () => {

    const servicesData = [
        {
            title: "Advertising",
            description: "We turn bold ideas into powerful digital solutions that connect, engage...",
            icon: "/m.png"

        },
         {
            title: "Content marketing",
            description: "We help you execute your plan and deliver results.",
            icon: "/c.png"

        },
        {
            title: "Content writing",
            description: "We help you create a marketing strategy that drives results.",
            icon: "/cw.png"

        },
        {
            title: "Social media",
            description: "We help you build a strong social media presence and engage with your audience",
            icon: "/media.png"

        },
    ]

    return (
        <motion.div 
        initial="hidden"
        whileInView="visible"
        viewport={{once: true}}
        transition={{staggerChildren: 0.2}}
         id="services" className="relative flex flex-col items-center gap-6 sm:gap-7 px-4 sm:px-8 md:px-12 lg:px-24 xl:px-40 pt-20 sm:pt-24 md:pt-30 text-gray-700 dark:text-white">
            <img src="/" alt="image" className="absolute -top-110 -left-70 -z-1 dark:hidden hidden sm:block"/>

            <Title title="How can we help?" desc="From strategy to execution, we craft digital solutions that move your business forward."/>

            <div className="flex flex-col md:grid grid-cols-2 gap-4 sm:gap-6 w-full max-w-6xl">
                {servicesData.map((service, index)=>(
                    <ServiceCard key={index} service={service} index={index}/>
                ))}
            </div>


        </motion.div>
    )
}

export default Services