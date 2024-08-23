import React from 'react';

export default function ServicesSection() {
    return (
        <div>

        <div className="mx-auto flex flex-col md:flex-row items-center justify-between p-4  bg-gradient-to-b from-blue-600 to-blue-800 space-y-8 md:space-y-0 md:space-x-8">
         
         {/* Left Section */}
            <div className="w-full md:w-1/2 flex flex-col items-center md:items-start space-y-6">
            <h2 className=" text-3xl md:text-[48px] font-[700] text-[#EE680F]">Our Services</h2>

                <div className="w-[400px] flex items-end justify-end mt-auto relative">
                    <div className="relative flex items-center justify-center w-28 h-28 bg-blue-700 rounded-full shadow-lg">
                        <span className="text-3xl font-bold text-white z-10">25+</span>
                        <svg viewBox="0 0 100 100" className="absolute w-full h-full inset-0">
                            <circle cx="50" cy="50" r="45" fill="none" stroke="none" />
                            <text x="50" y="50" textAnchor="middle" fontSize="8" fill="white" fontFamily="Arial" letterSpacing="0.1em">
                                <textPath href="#textcircle">
                                    Our Company in solutions Years Experience
                                </textPath>
                            </text>
                            <defs>
                                <path id="textcircle" d="
                                    M 50,50
                                    m -45,0
                                    a 45,45 0 1,1 90,0
                                    a 45,45 0 1,1 -90,0
                                " />
                            </defs>
                        </svg>
                    </div>
                </div>

                <img src="/Rectangle_2.png" alt="Experience" className="rounded-lg shadow-lg mb-4 w-[374px] object-cover" />
            </div>

            {/* Right Section */}
            <div className="w-full md:w-1/2 px-10 space-y-4">
                {[
                    'Branding',
                    'Social Media Marketing',
                    'Search Engine Optimization',
                    'Website Development',
                    '3D Modelling',
                    'Graphic Design',
                    'Photography',
                    'Video Production',
                ].map((service, index) => (
                    <details key={index} className="border-b-2 border-blue-500 text-white transition-all duration-300 ease-in-out">
                        <summary className="px-6 py-4 text-xl md:text-[24px] font-[700] cursor-pointer flex justify-between items-center transition-all duration-300 hover:bg-blue-700 rounded-md">
                            {service}
                            <span className="text-2xl font-bold">+</span>
                        </summary>
                        <div className="px-6 py-4 bg-blue-700 rounded-b-md">
                            <p>Details about {service} services go here. Provide some brief information or a description.</p>
                        </div>
                    </details>
                ))}
            </div>
        </div>
        </div>

    );
}
