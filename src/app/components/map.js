export default function LocationSection() {
    return (
        <section className="py-16 bg-[#ffffff]">
            <div className="container mx-auto px-4">
                <div className="flex flex-col-reverse md:flex-row items-center justify-between">
                    {/* Google Map Section */}
                    <div className="md:w-1/2 w-full h-80 md:h-[400px] mb-8 md:mb-0">
                        <iframe
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3916.1234567890123!2d38.736123456789!3d9.032123456789!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1234567890abcdef%3A0x1234567890abcdef!2sDirib%20Serez%20Creatives!5e0!3m2!1sen!2set!4v1611234567890!5m2!1sen!2set"
                            width="100%"
                            height="100%"
                            className="rounded-lg shadow-lg"
                            allowFullScreen=""
                            loading="lazy"
                            referrerPolicy="no-referrer-when-downgrade"
                            title="Dirib Serez Creatives Location"
                        ></iframe>
                    </div>
                    
                    {/* Location Details Section */}
                    <div className="md:w-1/3 w-full  text-white">
                        <h3 className="text-[24px] text-black font-[700] mb-4">Our Location</h3>
                        <p className="text-lg mb-2 font-[600] text-black">Headquarter</p>
                        <p className="text-[15px] text-[700] text-orange-400 mb-4">Dirib Serez Creatives</p>
                        <p className="text-base text-gray-400 leading-relaxed">
                            Bole Sub City, Wereda 03<br />
                            Bole, Addis Ababa<br />
                            Ethiopia
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
}
