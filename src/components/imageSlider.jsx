import React, { useState } from "react";

const ImageSlider = ({ images }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);

  const openModal = (index) => {
    setCurrentIndex(index);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const goToPrev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  const goToNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
  };

  return (
    <div>
      {/* Button to open the modal */}
      <div className="flex justify-end">
        <button
          onClick={() => openModal(0)}
          className="p-1 text-xs md:p-1 md:text-sm lg:p-2 lg:text-md bg-white text-gray-600 font-semibold m-4 rounded"
        >
          View
        </button>
      </div>

      {/* Modal */}
      {isModalOpen && (
        <div
        className="absolute left-0 top-0 w-screen h-screen bg-black bg-opacity-70 flex justify-center items-center p-4 z-50"
        onClick={closeModal}
      >
          <div
            className="bg-black rounded-lg shadow-lg p-2 max-w-7xl w-full"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Image */}
            <img
              src={images[currentIndex]}
              alt={`Slide ${currentIndex}`}
              className="w-full h-auto max-h-[70vh] object-contain rounded-lg"
            />

            {/* Controls */}
            <div className="flex justify-center mt-4 space-x-4">
              <button
                onClick={goToPrev}
                className="bg-gray-700 text-white px-4 py-2 rounded-lg hover:bg-gray-800 transition-colors"
              >
                Previous
              </button>
              <button
                onClick={goToNext}
                className="bg-gray-700 text-white px-4 py-2 rounded-lg hover:bg-gray-800 transition-colors"
              >
                Next
              </button>
              <button
                onClick={closeModal}
                className="bg-gray-700 text-white px-4 py-2 rounded-lg hover:bg-gray-800 transition-colors"
              >
                x
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ImageSlider;
