import React from "react";
import { Link } from "react-router-dom";


const EleHover = () => {

    return (
                <div className="pt-96">
            <section className="bg-center bg-no-repeat bg-[url('https://www.apple.com/v/iphone-16-pro/a/images/overview/product-stories/design/ANIM/design_hero_endframe__f4saxkdyib2a_large_2x.jpg')] bg-cover bg-gray-700 bg-blend-multiply">
                <div className="px-4 mx-auto max-w-screen-xl text-center py-24 lg:py-56">
                    <h1 className="mb-4 text-4xl font-extrabold tracking-tight leading-none text-white md:text-5xl lg:text-6xl">Discover the new Potential</h1>
                    <p className="mb-8 text-lg font-normal text-gray-300 lg:text-xl sm:px-16 lg:px-48">With a new innovative technology, more functions, more quality, better design.</p>
                    <div className="flex flex-col space-y-4 sm:flex-row sm:justify-center sm:space-y-0">
                        <Link to="/Service" className="inline-flex justify-center items-center py-3 px-5 text-base font-medium text-center text-white rounded-lg bg-none hover:bg-[#ffff] hover:text-black focus:ring-4 focus:ring-blue-300 dark:focus:ring-blue-900">
                            Buy
                            <svg className="w-3.5 h-3.5 ms-2 rtl:rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
                            </svg>
                        </Link>
                        <a href="#" className="inline-flex justify-center hover:text-gray-900 items-center py-3 px-5 sm:ms-4 text-base font-medium text-center text-white rounded-lg border border-white hover:bg-gray-100 focus:ring-4 focus:ring-gray-400">
                            See More
                        </a>  
                    </div>
                </div>
            </section>
            </div>

                            
    );
};

export default EleHover