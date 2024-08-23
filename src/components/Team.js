import Image from 'next/image';

export default function Team() {
  return (
    <section className="bg-[#EE680F] py-12 px-4 md:px-20">
      <h2 className="text-center text-3xl md:text-4xl font-bold mb-8">
        Meet The Team
      </h2>

      <div className="flex flex-col md:flex-row gap-8 md:gap-12 items-center justify-center">
        <div className="hover:shadow-xl w-full md:w-1/3 rounded-lg shadow-lg overflow-hidden flex flex-col justify-center items-center">
          <img
            src="/Rectangle_4_(1).png"
            alt="Service 1"
            className="w-48 h-48 object-cover rounded-full"
          />
          <div className="p-6 text-center">
            <h3 className="text-xl font-semibold mb-2">Yeabsira</h3>
            <p className="text-gray-700">CEO</p>
          </div>
        </div>
        <div className="hover:shadow-xl w-full md:w-1/3 rounded-lg shadow-lg overflow-hidden flex flex-col justify-center items-center">
          <img
            src="/Rectangle_4_(1).png"
            alt="Service 1"
            className="w-48 h-48 object-cover rounded-full"
          />
          <div className="p-6 text-center">
            <h3 className="text-xl font-semibold mb-2">Yididya</h3>
            <p className="text-gray-700">Marketing Manager</p>
          </div>
        </div>
        <div className="hover:shadow-xl w-full md:w-1/3 rounded-lg shadow-lg overflow-hidden flex flex-col justify-center items-center">
          <img
            src="/Rectangle_4_(1).png"
            alt="Service 2"
            className="w-48 h-48 object-cover rounded-full"
          />
          <div className="p-6 text-center">
            <h3 className="text-xl font-semibold mb-2">Msganaw</h3>
            <p className="text-gray-700">Senior Graphic Designer</p>
          </div>
        </div>
        <div className="hover:shadow-xl w-full md:w-1/3 rounded-lg shadow-lg overflow-hidden flex flex-col justify-center items-center">
          <img
            src="/Rectangle_4_(1).png"
            alt="Service 3"
            className="w-48 h-48 object-cover rounded-full"
          />
          <div className="p-6 text-center">
            <h3 className="text-xl font-semibold mb-2">Abel</h3>
            <p className="text-gray-700">Senior Animator</p>
          </div>
        </div>
      </div>
      <div className="flex justify-center mt-10">
        <button className="border-2 w-full md:w-1/4 rounded-full border-white p-3 text-lg text-white font-[400]">
          View All Members
        </button>
      </div>
    </section>
  );
}