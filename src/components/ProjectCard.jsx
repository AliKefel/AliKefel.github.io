import React, { useRef, useEffect, useState } from 'react';
import ImageModal from './ImageModal'; // Import the modal component

const ProjectCard = ({ message, heading, li1, li2, li3, urls, githubLink }) => {
  const cardRef = useRef(null);
  const [showModal, setShowModal] = useState(false);
  const [initialIndex, setInitialIndex] = useState(0);

  useEffect(() => {
    const card = cardRef.current;

    const handleMouseMove = (e) => {
      const rect = card.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;

      card.style.setProperty('--x', x + 'px');
      card.style.setProperty('--y', y + 'px');
    };
    card.addEventListener('mousemove', handleMouseMove);
    return () => {
      card.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  const handleImageClick = () => {
    setInitialIndex(0); // Always start with the first image
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
  };

  return (
    <div className="w-full">
      <div
        ref={cardRef}
        className="border rounded-md flex flex-row h-fit m-5 p-3 mouse-cursor-gradient-tracking hover:scale-105 transition-transform duration-500 ease-in-out"
      >
        <div className="flex flex-col w-full">
          <div>
            <a href={githubLink} target="_blank" rel="noopener noreferrer" className="courier-prime-regular font-bold w-8/12 tracking-tight text-blue-600 hover:underline hover:text-orange-500">
              {heading}
            </a>
          </div>

          <div className='flex flex-row w-full'>
            <ul className='w-8/12'>
              <li className='text-sm'> ~ {li1} </li>
              <li className='text-sm'> ~ {li2} </li>
              {li3 && <li className='text-sm'> ~ {li3} </li>}
            </ul>

            {/* Display only the first image */}
            <div className='w-4/12'>
              {urls.length > 0 && (
                <img
                  src={urls[0]}
                  className='w-60 h-36 cursor-pointer hover:border-4'
                  onClick={handleImageClick}
                  alt='Project thumbnail'
                />
              )}
            </div>
          </div>
        </div>
      </div>

      {/* Modal to show all images */}
      {showModal && <ImageModal images={urls} initialIndex={initialIndex} onClose={closeModal} />}
    </div>
  );
};

export default ProjectCard;
