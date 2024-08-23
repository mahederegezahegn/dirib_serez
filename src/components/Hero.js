import Image from 'next/image';

export default function Hero() {
  return (
    <section className="bg-black border-b-2 border-gray-200 text-white">
      <div className="px-5 flex flex-col md:flex-row justify-center items-center py-10 md:py-20">
        {/* Left Section: Text */}
        <div className="md:w-1/2 p-8 md:p-20 text-center md:text-left">
          <h1 className="text-[120px] md:text-6xl font-bold mb-8" style={{ fontSize: '3rem', lineHeight: '1.2' }}>
            The Creative <br /> Production <br /> Agency
          </h1>
        </div>

        {/* Right Section: Image */}
        <div className="md:w-1/2 flex justify-center">
          <div className="relative bg-[#EE680F] rounded-full w-[300px] h-[300px] md:w-[450px] md:h-[450px]">
            <Image
              src="/image.png"
              alt="Creative Image"
              layout="fill"
              className="rounded-full"
            />
          </div>
        </div>
      </div>

      {/* Text and Buttons Section */}
      <div className="mt-8 md:ml-12 flex flex-col gap-10 px-8 md:px-20 py-10 md:py-16">
        <div>
          <p className="text-lg font-[400]">
            Why stop thinking out of the box, when you can
          </p>
          <h2 className="text-[24px] font-[800] text-teal-400">
            THINK OUT OF THE UNIVERSE
          </h2>
        </div>
        <div className="flex flex-col md:flex-row justify-center md:justify-end space-y-4 md:space-y-0 md:space-x-4 my-6 mx-12">
          <button className="border-white text-white border-2 font-semibold py-3 px-6 rounded-full hover:bg-blue-500 transition">
            Browse Our Services
          </button>
          <a href="#" className="text-teal-400 font-bold flex items-center">
            Meet the Team <span className="ml-2">→</span>
          </a>
        </div>
      </div>
    </section>
  );
}