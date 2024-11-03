import React, { useRef, useEffect } from 'react';

const Card = ({ message, heading, border, year, }) => {
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

    // Cleanup on unmount
    return () => {
      card.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return (
    <div className="w-full">
      <div ref={cardRef} className={`border-${border >= 0 ? border : 2} rounded-md shadow-md   border-gray-400 flex flex-row h-fit m-5 p-3 mouse-cursor-gradient-tracking`} >

        <div className="flex flex-col w-full">
          <div>
            <span className="courier-prime-regular font-bold tracking-tight">{heading}</span>
          </div>

          <div>{message}</div>

         
        </div>

        <div className="w-fit text-nowrap text-sm font-bold">
          <span>{year}</span>
        </div>

      </div>
    </div>
  );
};

export default Card;
