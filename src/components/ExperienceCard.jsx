import React, { useRef, useEffect } from 'react';

const ExperienceCard = ({ heading, company, duration, location, li1, li2, li3 }) => {
  console.log('Duration:', duration); // Debugging line
  console.log('Location:', location); // Debugging line

  const cardRef = useRef(null);

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

  return (
    <div className="w-full">
      <div
        ref={cardRef}
        className="border rounded-md flex flex-col h-fit m-5 p-3 mouse-cursor-gradient-tracking hover:scale-105 transition-transform duration-500 ease-in-out"
      >
        {(duration || location) && (
          <div className="text-gray-400 text-xs mb-1">
            {duration && <span>{duration}</span>} {location && <span>· {location}</span>}
          </div>
        )}
        <div>
          <h3 className="courier-prime-regular font-bold tracking-tight text-blue-600">
            {heading}
          </h3>
          <p className="text-gray-500 text-sm font-semibold">{company}</p>
        </div>

        <div className='mt-2'>
          <ul>
            <li className='text-sm'> ~ {li1} </li>
            <li className='text-sm'> ~ {li2} </li>
            {li3 && <li className='text-sm'> ~ {li3} </li>}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default ExperienceCard;
