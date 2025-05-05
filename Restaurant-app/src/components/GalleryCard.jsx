import React from 'react';



const GalleryCard = () => {
    return (
        <div className="container mx-auto px-4 py-8">
            <div className="flex flex-col md:flex-row justify-center items-center gap-6">
                <div className="w-full md:w-1/2 max-w-[400px] h-[400px] md:h-[500px] lg:h-[700px]  items-center relative">
                    <iframe 
                        className="w-full h-full object-cover"
                        src="https://www.youtube.com/embed/6K5FJPJGsoU"
                        title="ASUS Zenbook A14 UX3407RA"
                        frameBorder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                        referrerPolicy="strict-origin-when-cross-origin"
                        allowFullScreen>
                    </iframe>
                </div>
                <div className="w-full md:w-1/2 max-w-[400px] h-[400px] md:h-[500px] lg:h-[700px] items-center relative">
                    <iframe 
                        className="w-full h-full object-cover"
                        src="https://www.youtube.com/embed/6K5FJPJGsoU"
                        title="ASUS Zenbook A14 UX3407RA"
                        frameBorder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                        referrerPolicy="strict-origin-when-cross-origin"
                        allowFullScreen>
                    </iframe>
                </div>
            </div>
        </div>
    );
};

export default GalleryCard;