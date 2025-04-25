import React from "react";

const Footer = () => {
return (
    <footer className="w-full bg-black text-white shadow-md mt-auto">
        <div className="container mx-auto py-6 md:py-9 px-4 md:px-8 lg:px-16">
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mb-6">
                {/* Contact info */}
                <div className="text-center sm:text-left mb-6 sm:mb-0">
                    <p className="font-medium">01726-805954</p>
                    <p className="mb-4">info@khanas.net</p>
                    <div className="flex justify-center sm:justify-start space-x-3 mb-4">
                        <a href="https://facebook.com/khanas" className="hover:text-green-300">facebook</a>
                        <a href="https://instagram.com/khanas" className="hover:text-green-300">instagram</a>
                        <a href="https://tiktok.com/@khanas" className="hover:text-green-300">tiktok</a>
                    </div>
                </div>
                
                {/* Navigation links */}
                <div className="text-center sm:text-left mb-6 sm:mb-0">
                    <a href="/about" className="block mb-2 hover:text-green-300">About Khana's</a>
                    <a href="/menu" className="block mb-2 hover:text-green-300">Menu</a>
                    <a href="/offers" className="block mb-2 hover:text-green-300">Offers</a>
                    <a href="/gallery" className="block mb-2 hover:text-green-300">Gallery</a>
                    <a href="/locations" className="block mb-2 hover:text-green-300">Locations</a>
                </div>
                
                {/* Secondary links */}
                <div className="text-center sm:text-left mb-6 sm:mb-0">
                    <a href="/careers" className="block mb-2 hover:text-green-300">Careers</a>
                    <a href="/contact" className="block mb-2 hover:text-green-300">Contact Us</a>
                    <a href="/privacy-policy" className="block mb-2 hover:text-green-300">Privacy Policy</a>
                </div>
                
                {/* Opening hours */}
                <div className="text-center sm:text-left mb-6 sm:mb-0">
                    <p className="font-medium mb-2">Opening Hours</p>
                    <div>
                        <p className="font-medium">For Dhaka & Cumilla</p>
                        <p>Sat – Thu: 11 AM – 10:30 PM</p>
                        <p>Fri: 3 PM – 10:30 PM</p>
                        
                        <p className="font-medium mt-2">For Chattogram</p>
                        <p>Sat – Thu: 12 PM – 11:30 PM</p>
                        <p>Fri: 3 PM – 11:30 PM</p>
                    </div>
                </div>
            </div>
            
            {/* Copyright */}
            <div className="pt-4 border-t border-gray-800 text-center text-sm">
                <p>Copyright © 2012-2024 Khana's. All Rights Reserved.</p>
                <p className="mt-1">Developed by <a href="https://presync.tech" className="hover:text-green-300">Prersync.tech</a></p>
            </div>
        </div>
    </footer>
);
};

export default Footer;
