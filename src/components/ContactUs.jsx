import toast from "react-hot-toast";
import Title from "./Title";
import { motion } from "motion/react";


const ContactUs = () => {

    const onSubmit = async (e) => {
        e.preventDefault();
        const formData = new FormData(e.target);

        formData.append("access_key", "eb4afefb-1c0c-4256-ae8c-91b723cabd2d");

        try {
            const response = await fetch("https://api.web3forms.com/submit", {
                method: "POST",
                body: formData
            });

            const data = await response.json();

            if (data.success) {
                toast.success("Thank you for your submission");
                e.target.reset();
            } else {
                toast.error(data.message)
            }
        } catch (error) {
            toast.error(error.message)
        }



    }

    return (
        <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            transition={{ staggerChildren: 0.2 }}
            id="contact-us" className="flex flex-col items-center gap-6 sm:gap-7 px-4 sm:px-8 md:px-12 lg:px-24 xl:px-40 pt-20 sm:pt-24 md:pt-30 text-gray-700 dark:text-white">
            <Title title="Reach out to us" desc="From strategy to execution, we craft digital solutions that move your business forward." />

            <motion.form
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.4 }}
                viewport={{ once: true }}
                onSubmit={onSubmit} className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-5 max-w-2xl w-full">
                <div>
                    <p className="mb-2 text-sm font-medium">Your name</p>
                    <div className="flex pl-3 rounded-lg border border-gray-300 dark:border-gray-600">
                        <img src="/person_icon.svg" alt="icon" className="w-4 h-4 my-auto" />
                        <input name="name" type="text" placeholder="Enter your name" className="w-full p-3 text-sm outline-none bg-transparent" required />
                    </div>
                </div>

                <div>
                    <p className="mb-2 text-sm font-medium">Email id</p>
                    <div className="flex pl-3 rounded-lg border border-gray-300 dark:border-gray-600">
                        <img src="/email_icon.svg" alt="icon" className="w-4 h-4 my-auto" />
                        <input name="email" type="email" placeholder="Enter your email" className="w-full p-3 text-sm outline-none bg-transparent" required />
                    </div>
                </div>

                <div className="sm:col-span-2">
                    <p className="mb-2 text-sm font-medium">Message</p>
                    <textarea name="message" rows={6} placeholder="Enter your message" className="w-full p-3 text-sm outline-none rounded-lg border border-gray-300 dark:border-gray-600 bg-transparent resize-none" required />

                </div>

                <button type="submit" className="w-full sm:w-max flex gap-2 bg-primary text-white text-sm px-6 sm:px-10 py-3 rounded-full cursor-pointer hover:scale-103 transition-all justify-center sm:justify-start">
                    Submit <img src="/arrow_icon.svg" alt="icon" className="w-4" />
                </button>
            </motion.form>
        </motion.div>
    )
}

export default ContactUs