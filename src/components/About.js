import Image from 'next/image';

export default function About() {
  return (
    <section className="border-b-2 p-8 md:p-20 border-gray-200 text-white">
      <div className="container mx-auto">
        <h2 className="text-2xl md:text-3xl mb-8 md:mb-10 text-[#EE680F] font-[700]">Who are we?</h2>
        <div className="flex flex-col md:flex-row justify-center items-center">
          {/* Image Section */}
          <div className="md:w-1/2 flex justify-center">
            <div className="relative top-0 left-0 z-10 bg-white h-[200px] md:h-[290px] w-[300px] md:w-[428px]"></div>
            <div className="relative top-20 md:top-36 -left-20 md:-left-60 z-20 bg-white h-[200px] md:h-[290px] w-[300px] md:w-[428px]"></div>
          </div>

          {/* Text Section */}
          <div className="md:w-1/2 flex justify-center items-center">
            <p className="mt-8 md:mt-10 text-lg md:text-3xl">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed pulvinar, enim a scelerisque sagittis,
              nunc velit consequat risus, vel interdum mauris metus id velit. Donec vel velit vel felis tincidunt
              pharetra.
            </p>
          </div>
        </div>
        <div className="container flex flex-col md:flex-row justify-start gap-4 md:gap-10 space-x-4 my-10 mt-16 md:mt-36">
          <button className="bg-blue-500 border-0 text-white font-semibold py-3 px-6 rounded-full hover:bg-blue-700 transition">
            Browse Our Services
          </button>
          <a href="#" className="text-teal-400 font-bold flex items-center">
            View Services <span className="ml-2">→</span>
          </a>
        </div>
      </div>
    </section>
  );
}