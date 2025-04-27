import React from "react";
import { motion } from "framer-motion";

const SelectCompany = () => {
    return (
        <section className="relative bg-black min-h-screen flex items-center justify-center px-6 lg:px-24">
            {/* Twinkling Stars Background */}
            <div className="absolute inset-0 overflow-hidden">
                {Array.from({ length: 100 }).map((_, i) => (
                    <div
                        key={i}
                        className="absolute bg-white rounded-full"
                        style={{
                            width: `${Math.random() * 3 + 1}px`,
                            height: `${Math.random() * 3 + 1}px`,
                            top: `${Math.random() * 100}%`,
                            left: `${Math.random() * 100}%`,
                            animation: `twinkle ${Math.random() * 3 + 2}s infinite alternate`,
                        }}
                    ></div>
                ))}
            </div>

            {/* Main Content Container */}
            <div className="relative p-8 w-full max-w-6xl bg-opacity-90 z-10">
                {/* Grid Layout */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                    {/* Left Side - Image Gallery (4 Columns) */}
                    <motion.div
                        className="relative bg-[#181828] p-4 rounded-xl shadow-lg"
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8 }}
                    >
                        <div className="grid grid-cols-4 gap-6 gap-y-6">
                            {/* Column 1 - 3 Images */}
                            <div className="flex flex-col space-y-6 mt-14">
                                <img src="https://yt3.googleusercontent.com/FJI5Lzbf2dMd32xOqhoKpJArJooZhoX6v2qOcFO-wjSZUvs3H9xqq2gK4DQ47X0KnYgf7X2rpdU=s900-c-k-c0x00ffffff-no-rj" alt="2" className="w-full h-24 object-cover rounded-lg" />
                                <img src="https://store-images.s-microsoft.com/image/apps.37935.9007199266245907.b029bd80-381a-4869-854f-bac6f359c5c9.91f8693c-c75b-4050-a796-63e1314d18c9" alt="3" className="w-full h-24 object-cover rounded-lg" />
                                <img src="https://st3.depositphotos.com/1001860/16375/i/450/depositphotos_163757632-stock-photo-amazon-logo-on-a-white.jpg" alt="14" className="w-full h-24 object-cover rounded-lg" />
                            </div>

                            {/* Column 2 - 4 Images */}
                            <div className="flex flex-col space-y-6">
                                <img src="https://m.media-amazon.com/images/I/51LGj5--KsL._h1_.png" alt="4" className="w-full h-24 object-cover rounded-lg" />
                                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQnOVjTWaheo4E99cgYZ6y14tpsgHlm0VN8Hw&s" alt="6" className="w-full h-24 object-cover rounded-lg" />
                                <img src="https://interbrand.com/wp-content/uploads/2020/10/ibm-square.png" alt="7" className="w-full h-24 object-cover rounded-lg" />
                                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRUq9X1odx0_OhvLdNCrNH8Y2O77kfF-ydQ7jlbjVK9pk4i1wCcjZ3l7QmVoGrQ0U6xYpA&usqp=CAU" alt="14" className="w-full h-24 object-cover rounded-lg" />
                            </div>

                            {/* Column 3 - 4 Images */}
                            <div className="flex flex-col space-y-6">
                                <img src="https://smest.in/_next/image?url=https%3A%2F%2Fissuer-master-article-logos.s3.ap-south-1.amazonaws.com%2FL%26TFincorp.png&w=256&q=75" alt="9" className="w-full h-24 object-cover rounded-lg" />
                                <img src="https://prospectrockpartners.com/wp-content/uploads/2024/10/JP-Morgan-Chase-Logo.png" alt="10" className="w-full h-24 object-cover rounded-lg" />
                                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRTzgOJLu3b_zOutTBI80qR4ormwSTj1ZeZTFcSr95sWHTz9rCK6UMUc3AA9wF3n9EcLh4&usqp=CAU" alt="11" className="w-full h-24 object-cover rounded-lg" />
                                <img src="https://yt3.googleusercontent.com/KrK4MbJMvA1gk-BrmDtRTiNLKxtAB38gnhLT_6FfjJh7pHJCgUBYY6zJBLclQvywQ1DNDHfC1w=s900-c-k-c0x00ffffff-no-rj" alt="14" className="w-full h-24 object-cover rounded-lg" />
                            </div>

                            {/* Column 4 - 3 Images */}
                            <div className="flex flex-col space-y-6 mt-14">
                                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRfy5YLkipz9rmt9F2vUv09_Izb-lU01ea3Bg&s" alt="13" className="w-full h-24 object-cover rounded-lg" />
                                <img src="https://logowik.com/content/uploads/images/mufg8087.logowik.com.webp" alt="14" className="w-full h-24 object-cover rounded-lg" />
                                <img src="https://assets.channelinsider.com/uploads/2022/03/CI.Profile.Deloitte.jpg" alt="14" className="w-full h-24 object-cover rounded-lg" />
                            </div>
                        </div>
                    </motion.div>

                    {/* Right Side - Text Content */}
                    <motion.div
                        className="text-white"
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8 }}
                    >
                        <h4 className="text-orange-500 font-semibold text-sm">Interview Test Preparation</h4>
                        <h1 className="text-4xl lg:text-5xl font-bold mt-2 leading-tight">
                            Practice Company-Oriented Interviews <br />
                            <span className="text-[#7E57C2]">With Our Interview Test</span> 🎯
                        </h1>
                        <p className="text-gray-400 text-lg mt-4">
                            <span className="text-blue-400">Interview Test Section</span> helps you prepare for company-specific interviews by providing tailored questions and scenarios. Ace your next interview with confidence.
                        </p>

                        {/* Features List */}
                        <div className="grid grid-cols-2 gap-3 text-gray-300 text-lg mt-6">
                            <p>✔ Company-specific questions</p>
                            <p>✔ Real-world scenarios</p>
                            <p>✔ Mock interviews</p>
                            <p>✔ Feedback and tips</p>
                            <p>✔ Industry-specific tests</p>
                            <p>✔ Behavioral questions</p>
                            <p>✔ + And Much More</p>
                        </div>

                        {/* CTA Button */}
                        <div className="mt-6">
                            <a href="https://interviewbot.intraintech.com/ai-interview-test" className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-purple-600 to-indigo-500 text-white font-medium text-lg rounded-lg shadow-lg hover:scale-105 transition duration-300">
                                + Start Your Interview Test
                            </a>
                        </div>
                    </motion.div>
                </div>
            </div>

            {/* Twinkle Animation */}
            <style>
                {`
                    @keyframes twinkle {
                        0% { opacity: 0.3; transform: scale(1); }
                        100% { opacity: 1; transform: scale(1.2); }
                    }
                `}
            </style>
        </section>
    );
};

export default SelectCompany;
