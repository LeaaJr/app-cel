import React from "react";
import img from "../Img/Img";

const SectionGalery = () => {

    return (
        <section className="w-full mx-auto py-64 bg-white dark:bg-white-900 dark:text-white">

        
        <div className="w-full h-full flex flex-col items-center md:py-4 py-10">

          <div
            className="xl:w-[80%] sm:w-[85%] w-[90%] mx-auto flex md:flex-row flex-col lg:gap-4 gap-2 justify-center lg:items-stretch md:items-center mt-4">

            <img className="md:w-[50%] w-full md:rounded-t-lg rounded-sm" src={img.cam16pro} alt="billboard image" />

            <div className="md:w-[50%] w-full bg-gray-100 md:p-4 p-0 rounded-md">
                    <h2 className="text-3xl font-semibold dark:text-black">The highest video quality</h2>
                    <p className="text-md mt-4 text-black">iPhone 16 Pro takes video to a new dimension with Dolby Vision 4K at 120 fps – our best combination of resolution and frame rate.
                    Thanks to the new 48MP Fusion camera with second-generation quad-pixel sensor and our powerful A18 Pro chip,
                    You can record in Dolby Vision 4K at 120 fps in both video and slow motion modes.</p>
                    </div>

          </div>
          <div
            className="xl:w-[80%] sm:w-[85%] w-[90%] mx-auto flex md:flex-row flex-col flex-col-reverse lg:gap-4 gap-2 justify-center lg:items-stretch md:items-center mt-6">

                    <div className="md:w-[50%] w-full bg-gray-100 md:p-4 p-0 rounded-md">
                    <h2 className="text-3xl font-semibold dark:text-black">New Design</h2>
                    <p className="text-md mt-4 text-black">The iPhone 16 Pro features a Grade 5 titanium design with a sleek new micro-blast finish.
                     Titanium is one of the metals with the best weight/strength ratio, which is why these Pro models are incredibly light and at the same time robust.
                    The iPhone 16 Pro is available in four beautiful colors, including the new Sand Titanium.</p>
                    </div>
            <img className="md:w-[50%] w-full md:rounded-t-lg rounded-sm" src={img.iPhone16proartitaneo} alt="billboard image" />

          </div>
        </div>
      </section>
    );
};

export default SectionGalery