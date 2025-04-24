import React from "react";

const About = () => {
return (
    <div className="w-full flex flex-col items-center justify-center">
        <div className="relative flex justify-center flex-direction- items-center w-full  bg-opacity-50">
            <section className="w-full h-[60vh] flex brightness-50">
                <img
                    src="/src/assets/premium_photo-1670984935550-5ce2e220977a.jpeg"
                    alt="Restaurant"
                    className="w-full h-full object-cover"
                />
            </section>
            <p className="absolute flex justify-center  text-center font-mono text-4xl text-yellow-500 px-8 py-2">
                About Us
            </p>
            <p className="absolute flex justify-center  text-center text-white font-mono  px-8 py-5 mt-20">
                Khana's, a dream that came out of a street food cart concept "Ande
                Khana" to a popular fast-food chain.
            </p>
        </div>
        
        <div className="container mx-auto py-16 px-4">
            <h1 className="text-3xl font-bold mb-8 text-center">About Khana's</h1>
            
            {/* Card layout with text on left and image on right */}
            <div className="flex flex-col md:flex-row shadow-lg rounded-lg overflow-hidden">
                {/* Left side - text and buttons */}
                <div className="md:w-1/2 p-8 flex flex-col justify-center">
                    <div className="space-y-4">
                        <p className="text-lg">
                            Khana's, a dream that came out of a street food cart concept "Ande
                            Khana" to a popular fast-food chain. Inspired from the business model
                            of a street side egg seller, Ande Khana was brought into existence in
                            2012.
                        </p>
                        <p className="text-lg">
                            Soon "Ande Khana" the street food cart was transformed into a QSR.
                            Thus, a new brand was born, "Khana's". The love and passion of
                            delivering affordable quality food to the foodaholics is the prime
                            driver of Khana's adoration and evolution.
                        </p>
                        
                        <button className="bg-yellow-500 hover:bg-yellow-600 text-white py-2 px-6 rounded-full mt-4">
                            Contact Us
                        </button>
                        
                        <div className="flex space-x-4 mt-6">
                            <button className="bg-blue-600 hover:bg-blue-700 text-white p-2 rounded-full">
                                <span className="px-2">Facebook</span>
                            </button>
                            <button className="bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white p-2 rounded-full">
                                <span className="px-2">Instagram</span>
                            </button>
                            <button className="bg-black hover:bg-gray-800 text-white p-2 rounded-full">
                                <span className="px-2">TikTok</span>
                            </button>
                        </div>
                    </div>
                </div>
                
                {/* Right side - images */}
                <div className="md:w-1/2">
                    <div className="grid grid-cols-1 md:grid-cols-2 h-full">
                        <img
                            src="/src/assets/front-view-smiley-woman-pointing-herself.jpg"
                            alt="Team member"
                            className="w-full h-full object-cover"
                        />
                        <img 
                            src="/src/assets/gg.jpg" 
                            alt="Restaurant interior" 
                            className="w-full h-full object-cover"
                        />
                    </div>
                </div>
            </div>
        </div>
    </div>
);
};

export default About;
