import React from "react";

const About = () => {
return (
    <div className="w-full"> 
        <div className="relative flex justify-center items-center w-full bg-black bg-opacity-50">
            <section className="w-full h-[60vh] flex">
                <img
                    src="/src/assets/premium_photo-1670984935550-5ce2e220977a.jpeg"
                    alt="Restaurant"
                    className="w-full h-full object-cover"
                />
            </section>
            <p className="absolute flex justify-center text-center text-2xl bg-amber-100 px-8 py-2">About Us</p>
        </div>
    </div>
);
};

export default About;
