export default function Top() {
    return (
        <section className="py-16">
            <div className="container mx-auto px-4">
                <div className="flex flex-col md:flex-row items-center justify-between">
                    {/* Left Side */}
                    <div className="flex flex-col justify-between items-center gap-10 md:text-left mb-8 md:mb-0 md:w-1/2">
                        <h4 className="text-white text-lg">Get In Touch</h4>
                        <h1 className="text-orange-400 text-4xl font-bold">Hey there!</h1>
                        <h1 className="text-white text-4xl font-bold">
                            Let's <span className="text-orange-400">chat</span>
                        </h1>
                        <p className="text-white mt-4">
                            Interested in working with us? Feel free to send us a message. We will be in touch shortly.
                        </p>
                    </div>
                    {/* Right Side */}
                    <div className="md:w-1/2">
                        <div className="bg-white text-black p-8 rounded-lg shadow-lg">
                            <h4 className="text-xl  font-bold mb-4">Get In Touch</h4>
                            <form>
                                <div className="mb-4">
                                    <input
                                        type="text"
                                        placeholder="Name"
                                        className="w-full p-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-orange-400"
                                        required
                                    />
                                </div>
                                <div className="mb-4">
                                    <input
                                        type="email"
                                        placeholder="Email"
                                        className="w-full p-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-orange-400"
                                        required
                                    />
                                </div>
                                <div className="mb-4">
                                    <textarea
                                        placeholder="Message"
                                        className="w-full p-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-orange-400"
                                        rows="4"
                                        required
                                    ></textarea>
                                </div>
                                <button
                                    type="submit"
                                    className="w-full bg-orange-400 text-white py-3 rounded-lg font-bold hover:bg-orange-500 transition duration-300"
                                >
                                    Submit
                                </button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
