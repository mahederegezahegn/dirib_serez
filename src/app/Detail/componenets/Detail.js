import Image from 'next/image';

export default function ProjectCard() {
  return (
    <div className="mx-auto p-4 sm:p-6 bg-gradient-to-br from-blue-50 to-white shadow-xl rounded-lg overflow-hidden">
      <div className="flex flex-col lg:flex-row justify-between gap-8">
        <div className="lg:w-1/3">
          <h2 className="text-3xl sm:text-4xl font-bold text-blue-800 mb-2">Project Title</h2>
          <p className="text-lg sm:text-xl text-blue-600 mb-4">Company Name</p>
          <div className="hidden lg:block mt-8">
            <h3 className="text-xl font-semibold text-gray-700 mb-3">Services Provided</h3>
            <div className="flex flex-wrap gap-2 text-sm">
              <span className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full">BRANDING</span>
              <span className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full">WEBSITE DESIGN</span>
              <span className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full">PACKAGING DESIGN</span>
              <span className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full">PRINT COLLATERAL</span>
            </div>
          </div>
        </div>
        <div className="lg:w-2/3">
          <p className="text-gray-700 mb-4 text-lg leading-relaxed">
            Lorem ipsum dolor sit amet consectetur. Egestas eu tellus eget risus et amet nullam turpis. Faucibus nisi viverra
            pellentesque aliquam id pulvinar arcu. Vivamus auctor fringilla euismod. Nunc vel augue vel tellus fringilla dictum.
          </p>
          <p className="text-gray-700 mb-6 text-lg leading-relaxed">
            Pellentesque aliquam idem viverra volutpat porttitor amet. Pharebus blandit consectetur
            eleifend. Id nam in consequat et arcu. Sed vitae nulla ac urna fringilla luctus. Praesent eu nunc vitae ligula 
            bibendum aliquam.
          </p>
          <div className="mb-8">
            <h3 className="text-xl font-semibold text-gray-700 mb-3">Project Goals</h3>
            <ul className="list-disc list-inside text-gray-600 space-y-2">
              <li>Increase brand awareness by 50%</li>
              <li>Redesign website for better user experience</li>
              <li>Create cohesive packaging design across product line</li>
              <li>Develop print materials for marketing campaign</li>
            </ul>
          </div>
        </div>
      </div>
      <div className="relative h-[400px] sm:h-[500px] lg:h-[706px] w-full mt-8 rounded-lg overflow-hidden">
        <Image
          src="/image_8.png"
          alt="Project showcase image"
          layout="fill"
          objectFit="cover"
          className="transition-transform duration-300 hover:scale-105"
        />
      </div>
      <div className="mt-8 lg:hidden">
        <h3 className="text-xl font-semibold text-gray-700 mb-3">Services Provided</h3>
        <div className="flex flex-wrap gap-2 text-sm">
          <span className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full">BRANDING</span>
          <span className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full">WEBSITE DESIGN</span>
          <span className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full">PACKAGING DESIGN</span>
          <span className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full">PRINT COLLATERAL</span>
        </div>
      </div>
    </div>
  );
}