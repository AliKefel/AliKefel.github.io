import React, { useEffect } from 'react';
import './Cursor.css'

function Cursor() {
  useEffect(() => {
    const circles = document.querySelectorAll('.circle');
    const coords = {
      x: 0,
      y: 0,
    };

    circles.forEach(function (circle) {
      circle.x = 0;
      circle.y = 0;
    });

    const bg = document.createElement('div');
    bg.classList.add('bg');
    document.body.appendChild(bg); 

    const animatedCircles = () => {
      let x = coords.x;
      let y = coords.y;

      circles.forEach(function (circle, index) {
        circle.style.left = circle.x - 12 + "px";
        circle.style.top = circle.y - 12 + "px";

        circle.style.transform = `scale(${(circles.length - index) / circles.length})`;

        circle.x = x;
        circle.y = y;

        const nextCircle = circles[index + 1] || circles[0];
        x += (nextCircle.x - x) *0.5;
        y += (nextCircle.y - y) *0.5;
      });

    
    }

    window.addEventListener('mousemove', (e) => {
      coords.x = e.clientX;
      coords.y = e.clientY;
      animatedCircles();
    });
  }, [])

  return (
    <div>
      
    </div>
  );
}

export default Cursor;