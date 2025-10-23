"use client";
import { useState } from "react";
import { X } from "lucide-react";

const GallerySection = () => {
    const images = [
        "/images/RohingyaHero.png",
        "/images/bloodDonation.jpg",
        "/images/CryVolunteers.jpg",
        "/images/GroupGentle.png",
        "/images/educationTeaching.jpg",
    ];

    const [selectedImage, setSelectedImage] = useState(null);

    return (
        <section id="gallery" className="py-20 bg-gray-900 text-white">
            <div className="max-w-6xl mx-auto px-4">
                {/* Section Title */}
                <div className="text-center mb-12">
                    <h2 className="text-3xl md:text-4xl font-bold">
                        Our <span className="text-[#058610]">Gallery</span>
                    </h2>
                    <p className="text-gray-300 mt-3 max-w-2xl mx-auto">
                        A glimpse into the community efforts, volunteer work, and ongoing missions of Comrades of Rohingya Youth.
                    </p>
                </div>

                {/* Image Grid */}
                <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
                    {images.map((src, index) => (
                        <div
                            key={index}
                            className="relative group overflow-hidden rounded-lg shadow-md cursor-pointer"
                            onClick={() => setSelectedImage(src)}
                        >
                            <img
                                src={src}
                                alt={`Gallery Image ${index + 1}`}
                                className="object-cover w-full h-48 sm:h-56 md:h-64 transform group-hover:scale-110 transition-transform duration-500"
                            />
                            <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 flex items-center justify-center transition-opacity duration-300">
                                <p className="text-sm font-medium text-gray-200">Click to view</p>
                            </div>
                        </div>
                    ))}
                </div>

                {/* View More Button */}
                <div className="text-center mt-10">
                    <a href="/gallery" className="bg-[#058610] px-6 py-3 rounded-md hover:bg-[#046a0d] transition">
                        View Full Gallery
                    </a>
                </div>
            </div>

            {/* Full Image Modal */}
            {selectedImage && (
                <div
                    className="fixed inset-0 bg-black/90 flex items-center justify-center z-50 p-4"
                    onClick={() => setSelectedImage(null)}
                >
                    <div className="relative max-w-5xl w-full flex justify-center">
                        <img
                            src={selectedImage}
                            alt="Full View"
                            className="max-h-[90vh] object-contain rounded-lg"
                        />
                        <button
                            className="absolute top-4 right-4 text-white bg-black/50 p-2 rounded-full hover:bg-black/70 transition"
                            onClick={() => setSelectedImage(null)}
                        >
                            <X size={28} />
                        </button>
                    </div>
                </div>
            )}
        </section>
    );
};

export default GallerySection;
