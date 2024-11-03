import React, { useState } from 'react';
import './ImageModal.css'; // Create custom CSS for modal styling

const ImageModal = ({ images, initialIndex, onClose }) => {
  const [currentIndex, setCurrentIndex] = useState(initialIndex);

  const handlePrev = () => {
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? images.length - 1 : prevIndex - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex === images.length - 1 ? 0 : prevIndex + 1));
  };

  return (
    <div className="image-modal">
      <div className="overlay" onClick={onClose}></div>
      <div className="modal-content">
        <button className="prev-button" onClick={handlePrev}>‹</button>
        <img src={images[currentIndex]} alt="Project" className="modal-image" />
        <button className="next-button" onClick={handleNext}>›</button>
        <button className="close-button" onClick={onClose}>×</button>
      </div>
    </div>
  );
};

export default ImageModal;
