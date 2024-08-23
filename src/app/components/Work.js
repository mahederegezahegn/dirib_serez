import Image from 'next/image';

export default function Work() {
  const projects = [
    {
      title: 'Title of the project',
      description: 'Lorem ipsum dolor sit amet consectetur. Nibh consequat vel amet accumsan ut risus consectetur morbi tellus. Ante in cras semper hendrerit dui proin arcu. Tristique fringilla sapien risus enim ac. Id et accumsan amet felis dui egestas est id.',
      image: '/Rectangle.png',
      tags: 'BRANDING WEBSITE DESIGN PACKAGING DESIGN PRINT COLLATERAL',
    },
    {
      title: 'Another Project Title',
      description: 'Lorem ipsum dolor sit amet consectetur. Nibh consequat vel amet accumsan ut risus consectetur morbi tellus. Ante in cras semper hendrerit dui proin arcu. Tristique fringilla sapien risus enim ac. Id et accumsan amet felis dui egestas est id.',
      image: '/Rectangle.png',
      tags: 'UX DESIGN UI DESIGN MOBILE APP DEVELOPMENT',
    },
    {
      title: 'Third Project Example',
      description: 'Lorem ipsum dolor sit amet consectetur. Nibh consequat vel amet accumsan ut risus consectetur morbi tellus. Ante in cras semper hendrerit dui proin arcu. Tristique fringilla sapien risus enim ac. Id et accumsan amet felis dui egestas est id.',
      image: '/Rectangle.png',
      tags: 'E-COMMERCE SOCIAL MEDIA MARKETING SEO',
    },
  ];

  return (
    <section className="flex flex-col justify-center items-center px-4 md:px-20  bg-white py-12">
      {projects.map((project, index) => (
        <div key={index} className={`flex flex-col lg:flex-row justify-between gap-10 items-top mb-20 ${index % 2 !== 0 ? 'lg:flex-row-reverse' : ''}`}>
          <div
            className="relative w-full lg:w-[430px] h-[400px] lg:h-[545px] bg-cover bg-center"
            style={{ backgroundImage: `url(${project.image})` }}
          >
            {/* Content inside the div */}
          </div>

          <div className="flex flex-col justify-between items-start gap-6 p-10 w-full lg:w-1/2">
            <div className="flex flex-col justify-start items-start p-10 w-full gap-4">
              <h1 className="text-3xl md:text-5xl text-[#000] font-bold">
                {project.title}
              </h1>
              <p className="text-base md:text-lg text-black">
                {project.description}
              </p>
            </div>

            <div className="flex flex-col md:flex-row md:justify-between items-center gap-4 md:gap-0">
              <h1 className="text-sm md:text-base w-full md:w-1/4 text-[#EE680F] text-center md:text-left">
                {project.tags}
              </h1>
              <a
                href="/Detail"
                className="text-white text-lg md:text-2xl font-bold flex items-center mt-4 md:mt-0"
              >
                View Services<span className="ml-2 text-[#EE680F] text-4xl">→</span>
              </a>
            </div>
          </div>
        </div>
      ))}
      
      <button className="border-2 w-full bg-[#EE680F] md:w-[171px] mt-10 p-2 text-[20px] text-white font-[400]">
See More      </button>
    </section>
  );
}