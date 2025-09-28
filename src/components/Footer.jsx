
const Footer = ({theme}) => {
    return (
        <div className="bg-slate-50 dark:bg-gray-900 pt-10 sm:pt-10 mt-20 sm:mt-40 px-4 sm:px-10 lg:px-24 xl:px-40">
            {/* footer top */}
            <div className="flex justify-between lg:items-center max-lg:flex-col gap-10">
                <div className="space-y-5 text-sm text-gray-700 dark:text-gray-400">
                    <img src={theme === "dark" ? "/company.png" : "/enterprise.png"} alt="logo" className="w-15 sm:w-15" />
                    <p className="max-w-md">From strategy to execution, we craft digital solutions that move your business forward</p>

                    <ul className="flex gap-8">
                        <li><a className=" text-primary hover:text-green-500" href="#hero">Home</a></li>
                        <li><a className="text-primary hover:text-green-500" href="#services">Services</a></li>
                        <li><a className="text-primary hover:text-green-500" href="#our-work">Our Work</a></li>
                        <li><a className="text-primary hover:text-green-500" href="#contact-us">Contact Us</a></li>

                    </ul>
                </div>
                <div className="text-gray-600 dark:text-gray-400">
                    <h3 className="font-semibold">Subscribe to our newsletter</h3>
                    <p className="text-sm mt-2 mb-6">The latest news, articles, and resources, sent to your inbox weekly.</p>
                    <div className="flex gap-2 text-sm">
                        <input type="email" placeholder="Enter your email" className="w-full p-3 text-sm outline-none rounded dark:text-gray-200 bg-transparent border border-gray-300 dark:border-gray-500" />
                        <button className="bg-primary text-white rounded px-6">Subscribe</button>
                    </div>
                </div>

            </div>

            <hr className="border-gray-300 dark:border-gray-600 my-6"/>

            {/* footer bottom */}
            <div className="pb-6 text-sm text-gray-500 flex justify-center sm:justify-between gap-4 flex-wrap">
                <p>Copyright 2025 © IfeChukwu - All Right Reserved</p>
                <div className="flex gap-4 mt-3 mb-1 items-center justify-between">
                    <img className="w-8 h-8" src="/whatsapp.png" alt="icon" />
                    <img className="w-8 h-8" src="/facebook.png" alt="icon" />
                    <img className="w-8 h-8" src="/instagram.png" alt="icon" />
                    <img className="w-8 h-8" src="/linkedin.png" alt="icon" />
                </div>
            </div>
        </div>
    )
}

export default Footer