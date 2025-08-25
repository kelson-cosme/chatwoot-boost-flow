import React, { useEffect, useRef } from 'react';
import '../particles.css'; // Importe o CSS que acabamos de criar

const ParticlesBackground: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const particleCount = 50; // Ajuste para mais ou menos partículas

    for (let i = 0; i < particleCount; i++) {
      const particle = document.createElement('div');
      particle.classList.add('particle');
      
      const size = Math.random() * 3 + 1;
      particle.style.width = `${size}px`;
      particle.style.height = `${size}px`;
      
      particle.style.left = `${Math.random() * 100}%`;
      particle.style.top = `${Math.random() * 100}%`;
      
      const duration = Math.random() * 10 + 15;
      particle.style.animationDuration = `${duration}s`;
      particle.style.animationDelay = `-${Math.random() * duration}s`;

      container.appendChild(particle);
    }

    // Cleanup
    return () => {
      if (container) {
        container.innerHTML = '';
      }
    };
  }, []);

  return <div id="particle-container" ref={containerRef} />;
};

export default ParticlesBackground;