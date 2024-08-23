import Image from 'next/image';

export default function Project() {
  return (
    <section className="px-4 md:px-20 text-white py-12">
      <div className="text-start mb-8">
        <h2 className="text-2xl md:text-3xl mb-4 text-[#EE680F] font-bold">
          What we do?
        </h2>
        <h1 className="text-3xl md:text-5xl ml-10 font-extrabold mb-10">
          We Get Things Done!
        </h1>
      </div>

      <div className="flex flex-col lg:flex-row gap-10 items-top">
        <div
          className="relative w-full lg:w-[613px] h-[400px] lg:h-[710px] bg-cover bg-center"
          style={{ backgroundImage: 'url(/Rectangle.png)' }}
        >
          {/* Content inside the div */}
        </div>

        <div className="flex flex-col justify-between gap-6 p-10 w-full lg:w-1/2">
          <div className="flex flex-col justify-between p-10 w-full gap-4">
            <h1 className="text-3xl md:text-5xl text-[#EE680F] font-bold">
              Title of the project
            </h1>
            <p className="text-base md:text-lg text-gray-300 md:w-1/2">
              Lorem ipsum dolor sit amet consectetur. Nibh consequat vel amet
              accumsan ut risus consectetur morbi tellus. Ante in cras semper
              hendrerit dui proin arcu. Tristique fringilla sapien risus enim
              ac. Id et accumsan amet felis dui egestas est id.
            </p>
          </div>

          <div className="flex flex-col md:flex-row md:justify-between items-center gap-4 md:gap-0">
            <h1 className="text-sm md:text-base w-full md:w-1/4 text-blue-700 text-center md:text-left">
              BRANDING WEBSITE DESIGN PACKAGING DESIGN PRINT COLLATERAL
            </h1>
            <a
              href="#"
              className="text-white text-lg md:text-2xl font-bold flex items-center mt-4 md:mt-0"
            >
              View Services<span className="ml-2">→</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}