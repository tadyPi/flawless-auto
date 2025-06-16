import React, { useState } from 'react';
import { X, ChevronLeft, ChevronRight } from 'lucide-react';

const Gallery = () => {
  const [selectedImage, setSelectedImage] = useState<number | null>(null);

  const galleryItems = [
    {
      before: 'https://images.pexels.com/photos/3729464/pexels-photo-3729464.jpeg',
      after: 'https://images.pexels.com/photos/3729464/pexels-photo-3729464.jpeg',
      title: 'Collision Damage Repair',
      description: 'Complete restoration of front-end collision damage with precision bodywork and paint matching.'
    },
    {
      before: 'https://images.pexels.com/photos/3729464/pexels-photo-3729464.jpeg',
      after: 'https://images.pexels.com/photos/3729464/pexels-photo-3729464.jpeg',
      title: 'Custom Paint Job',
      description: 'Full vehicle repaint with custom color and professional clear coat finish.'
    },
    {
      before: 'https://images.pexels.com/photos/3729464/pexels-photo-3729464.jpeg',
      after: 'https://images.pexels.com/photos/3729464/pexels-photo-3729464.jpeg',
      title: 'Dent Removal & Refinishing',
      description: 'Paintless dent removal and spot refinishing for seamless results.'
    },
    {
      before: 'https://images.pexels.com/photos/3729464/pexels-photo-3729464.jpeg',
      after: 'https://images.pexels.com/photos/3729464/pexels-photo-3729464.jpeg',
      title: 'Scratch Repair',
      description: 'Professional scratch removal and paint touch-up work.'
    },
    {
      before: 'https://images.pexels.com/photos/3729464/pexels-photo-3729464.jpeg',
      after: 'https://images.pexels.com/photos/3729464/pexels-photo-3729464.jpeg',
      title: 'Bumper Restoration',
      description: 'Complete bumper repair and refinishing to match original factory finish.'
    },
    {
      before: 'https://images.pexels.com/photos/3729464/pexels-photo-3729464.jpeg',
      after: 'https://images.pexels.com/photos/3729464/pexels-photo-3729464.jpeg',
      title: 'Panel Replacement',
      description: 'Expert panel replacement with seamless integration and color matching.'
    }
  ];

  const openLightbox = (index: number) => {
    setSelectedImage(index);
  };

  const closeLightbox = () => {
    setSelectedImage(null);
  };

  const nextImage = () => {
    if (selectedImage !== null) {
      setSelectedImage((selectedImage + 1) % galleryItems.length);
    }
  };

  const prevImage = () => {
    if (selectedImage !== null) {
      setSelectedImage(selectedImage === 0 ? galleryItems.length - 1 : selectedImage - 1);
    }
  };

  return (
    <>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-900 via-blue-800 to-blue-900 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Our Work Gallery
            </h1>
            <p className="text-xl text-blue-100 max-w-3xl mx-auto leading-relaxed">
              See the incredible transformations we've achieved for our clients. 
              From collision repairs to custom paint jobs, every project showcases our commitment to excellence.
            </p>
          </div>
        </div>
      </section>

      {/* Gallery Grid */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {galleryItems.map((item, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transform hover:-translate-y-2 transition-all duration-300 cursor-pointer"
                onClick={() => openLightbox(index)}
              >
                <div className="relative">
                  <div className="grid grid-cols-2">
                    <div className="relative">
                      <img
                        src={item.before}
                        alt={`${item.title} - Before`}
                        className="w-full h-48 object-cover"
                      />
                      <div className="absolute top-2 left-2 bg-red-500 text-white px-2 py-1 rounded text-sm font-medium">
                        Before
                      </div>
                    </div>
                    <div className="relative">
                      <img
                        src={item.after}
                        alt={`${item.title} - After`}
                        className="w-full h-48 object-cover"
                      />
                      <div className="absolute top-2 right-2 bg-green-500 text-white px-2 py-1 rounded text-sm font-medium">
                        After
                      </div>
                    </div>
                  </div>
                </div>
                
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{item.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Lightbox */}
      {selectedImage !== null && (
        <div className="fixed inset-0 bg-black bg-opacity-90 z-50 flex items-center justify-center p-4">
          <div className="relative max-w-6xl w-full">
            <div className="bg-white rounded-2xl overflow-hidden">
              <div className="relative">
                <div className="grid grid-cols-1 md:grid-cols-2">
                  <div className="relative">
                    <img
                      src={galleryItems[selectedImage].before}
                      alt={`${galleryItems[selectedImage].title} - Before`}
                      className="w-full h-64 md:h-96 object-cover"
                    />
                    <div className="absolute top-4 left-4 bg-red-500 text-white px-3 py-1 rounded font-medium">
                      Before
                    </div>
                  </div>
                  <div className="relative">
                    <img
                      src={galleryItems[selectedImage].after}
                      alt={`${galleryItems[selectedImage].title} - After`}
                      className="w-full h-64 md:h-96 object-cover"
                    />
                    <div className="absolute top-4 right-4 bg-green-500 text-white px-3 py-1 rounded font-medium">
                      After
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="p-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-3">
                  {galleryItems[selectedImage].title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {galleryItems[selectedImage].description}
                </p>
              </div>
            </div>

            {/* Navigation buttons */}
            <button
              onClick={prevImage}
              className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white bg-opacity-80 hover:bg-opacity-100 rounded-full p-3 transition-all duration-300"
            >
              <ChevronLeft className="h-6 w-6 text-gray-800" />
            </button>
            <button
              onClick={nextImage}
              className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white bg-opacity-80 hover:bg-opacity-100 rounded-full p-3 transition-all duration-300"
            >
              <ChevronRight className="h-6 w-6 text-gray-800" />
            </button>

            {/* Close button */}
            <button
              onClick={closeLightbox}
              className="absolute top-4 right-4 bg-white bg-opacity-80 hover:bg-opacity-100 rounded-full p-2 transition-all duration-300"
            >
              <X className="h-6 w-6 text-gray-800" />
            </button>
          </div>
        </div>
      )}

      {/* CTA Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
            Your Vehicle Could Be Next
          </h2>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            Ready to see your vehicle transformed? Contact us today to discuss your auto body repair and refinishing needs.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/contact"
              className="inline-flex items-center px-8 py-4 bg-blue-900 text-white font-semibold rounded-lg hover:bg-blue-800 transform hover:scale-105 transition-all duration-300 shadow-lg"
            >
              Get Your Quote
            </a>
            <a
              href="tel:(555)123-4567"
              className="inline-flex items-center px-8 py-4 border-2 border-blue-900 text-blue-900 font-semibold rounded-lg hover:bg-blue-900 hover:text-white transition-all duration-300"
            >
              Call Us Now
            </a>
          </div>
        </div>
      </section>
    </>
  );
};

export default Gallery;