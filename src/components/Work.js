import Image from 'next/image';

export default function Work() {
  return (
    <section className="border-b-2 border-gray-200 text-white flex flex-col md:flex-row items-center justify-center py-10 md:py-20">
      <div className="flex flex-col md:flex-row gap-8 md:gap-10 justify-between text-center px-4 md:px-0">
        <div>
          <h2 className="text-2xl md:text-3xl mb-4 md:mb-6 text-[#EE680F] font-bold">
            What we do?
          </h2>
        </div>
        <div className="md:w-1/2 text-start">
          <h1 className="text-xl md:text-2xl font-extrabold leading-tight">
            We are a digital marketing agency with expertise, and we're on a mission
            to help you take the next step in your business.
          </h1>
        </div>
      </div>
    </section>
  );
}