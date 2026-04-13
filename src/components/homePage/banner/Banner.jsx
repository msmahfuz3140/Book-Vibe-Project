import React from "react";
import bannerImg from "../../../assets/hero_img.jpg";

const Banner = () => {
  return (
    <section className="w-[95%] lg:w-[90%] mx-auto my-14">

      <div className="bg-gray-100 rounded-3xl">

        <div className="flex flex-col-reverse lg:flex-row
        items-center justify-between
        px-6 md:px-12 lg:px-16 py-12 lg:py-20 gap-10">

          {/* TEXT */}
          <div className="space-y-6 text-center lg:text-left max-w-xl">

            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 leading-tight">
              Books to Freshen Up <br />
              Your Bookshelf
            </h1>

            <p className="text-gray-600">
              Discover hand-picked books that inspire learning,
              creativity, and personal growth. Build your perfect
              reading collection today.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">

              <button className="px-7 py-3 rounded-xl
              bg-green-500 text-white font-semibold
              hover:bg-green-600 shadow-md
              transition duration-300">
                View The List
              </button>

              <button className="px-7 py-3 rounded-xl
              border border-gray-300 text-gray-700
              hover:bg-gray-200 transition duration-300">
                Learn More
              </button>

            </div>

          </div>

          {/* IMAGE */}
          <div className="flex justify-center">

            <img
              src={bannerImg}
              alt="Books"
              className="w-72 sm:w-80 md:w-96 lg:w-[420px]
              rounded-2xl shadow-lg object-cover"
            />

          </div>

        </div>
      </div>

    </section>
  );
};

export default Banner;