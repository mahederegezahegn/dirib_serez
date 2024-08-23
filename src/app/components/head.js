import Image from 'next/image';

export default function Work() {
  return (
    <section className="border-b-2 border-gray-200 bg-gradient-to-r from-blue-800 to-blue-600 text-white flex flex-col items-center justify-center py-10 md:py-20">
      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 md:px-8 lg:px-16">
        <div className="text-start mb-6 md:mb-8">
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-[#EE680F] font-bold">
            Our Works
          </h2>
        </div>
        <div className="flex flex-col sm:flex-row items-start sm:items-center bg-blue-900 text-white rounded-lg shadow-lg overflow-hidden">
          <div className="bg-orange-600 py-2 px-4 sm:px-6 md:py-3 md:px-8 w-full sm:w-auto">
            <span className="font-bold text-lg md:text-xl">Category</span>
          </div>
          <div className="flex flex-wrap items-center justify-start sm:justify-center ml-0 sm:ml-4 md:ml-6 space-x-2 sm:space-x-4 md:space-x-6 p-2 sm:p-3">
            <a href="#" className="text-orange-400 font-bold text-sm md:text-base hover:text-orange-300 transition-colors duration-300 my-1">SHOW ALL</a>
            <a href="#" className="text-white text-sm md:text-base hover:text-gray-300 transition-colors duration-300 my-1">UI/UX DESIGN</a>
            <a href="#" className="text-white text-sm md:text-base hover:text-gray-300 transition-colors duration-300 my-1">MOBILE APPS</a>
            <a href="#" className="text-white text-sm md:text-base hover:text-gray-300 transition-colors duration-300 my-1">WEB DESIGN</a>
            <a href="#" className="text-white text-sm md:text-base hover:text-gray-300 transition-colors duration-300 my-1">MARKETING</a>
          </div>
        </div>  
      </div>
    </section>
  );
}