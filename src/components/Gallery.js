import Image from 'next/image'; // Assuming you're using Next.js

export default function Gallery() {
  return (
    <section className="py-12 px-4 md:px-20">
    <h2 className="text-center text-3xl md:text-4xl font-bold mb-8">
      Our Services
    </h2>
    <div className="flex flex-col md:flex-row gap-8 md:gap-12 justify-start">
      <div className="w-full md:w-1/3  shadow-lg overflow-hidden">
        <img src="/Rectangle_4_(1).png" alt="Service 1" className="w-full h-[700px] object-cover" />
        <div className=" text-start">
          <h3 className=" my-10 text-xl font-semibold mb-2 text-[#EE680F]">Service Title 1</h3>
          <p className="text-gray-700 w-1/2">
            Description for service 1 goes here. It provides a brief overview of what this service offers.
          </p>
        </div>
      </div>
      
      <div className="w-full md:w-1/3  shadow-lg overflow-hidden">
        <img src="/Rectangle_7.png" alt="Service 2" className="w-full h-[700px] object-cover" />
        <div className=" text-start">
          <h3 className=" my-10 text-xl font-semibold mb-2 text-[#EE680F]">Service Title 2</h3>
          <p className="text-gray-700 w-1/2">
            Description for service 2 goes here. It provides a brief overview of what this service offers.
          </p>
        </div>
      </div>
      
      <div className="w-full md:w-1/3  shadow-lg overflow-hidden">
        <img src="/Rectangle_5.png" alt="Service 3" className="w-full h-[700px] object-cover" />
        <div className=" text-start">
          <h3 className=" my-10 text-xl font-semibold mb-2 text-[#EE680F]">Service Title 3</h3>
          <p className="text-gray-700 w-1/2">
            Description for service 3 goes here. It provides a brief overview of what this service offers.
          </p>
        </div>
      </div>
    </div>
  </section>
  
    
  );
}
