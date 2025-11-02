
"use client"

import { useEffect, useState } from 'react';

const BackToTop = () => {
  const [isVisible, setIsVisible] = useState(false);

  const toggleVisibility = () => {
    if (window.pageYOffset > 300) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  useEffect(() => {
    window.addEventListener('scroll', toggleVisibility);

    return () => {
      window.removeEventListener('scroll', toggleVisibility);
    };
  }, []);

  return (
    <button
      className={`fixed bottom-4 right-4 bg-green-600 hover:bg-green-500 text-black font-mono font-bold px-4 py-2 border-2 border-green-400 transition-all duration-200 hover:shadow-lg hover:shadow-green-400/50 hover:scale-105 pixel-shift-hover ${isVisible ? 'opacity-100' : 'opacity-0'}`}
      onClick={scrollToTop}
    >
      &gt; cd /home
    </button>
  );
};

export default BackToTop;
