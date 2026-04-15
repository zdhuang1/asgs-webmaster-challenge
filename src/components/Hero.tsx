import { useState, useEffect, useCallback } from 'react';
import styles from './Hero.module.scss';
import PreviousIcon from '../SVGS/PreviousIcon';
import NextIcon from '../SVGS/NextIcon';
import HeroScoobyDoo from '../assets/Hero_ScoobyDoo.svg';
import HeroMinions from '../assets/Hero_Minions.svg';
import HeroMLP from '../assets/Hero_MyLittlePony.svg';

// Define our images in an array so we can cleanly map over them for the images and the dots
const carouselData = [
  { src: HeroScoobyDoo, alt: "Scooby Doo promotional banner" },
  { src: HeroMinions, alt: "Minions promotional banner" },
  { src: HeroMLP, alt: "My Little Pony promotional banner" }
];

export default function Hero() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  // Helper functions to navigate
  const goToNext = useCallback(() => {
    setCurrentIndex((prevIndex) => (prevIndex === carouselData.length - 1 ? 0 : prevIndex + 1));
  }, []);

  const goToPrevious = () => {
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? carouselData.length - 1 : prevIndex - 1));
  };

  const goToSlide = (index: number) => {
    setCurrentIndex(index);
  };

  // Autoplay logic
  useEffect(() => {
    if (isPaused) return; // Accessibility: Pause timer if user is interacting with the carousel

    const timer = setInterval(() => {
      goToNext();
    }, 5000); // Autoplay every 5 seconds

    // Cleanup interval on unmount or when dependencies change to prevent memory leaks/erratic behavior
    return () => clearInterval(timer);
  }, [goToNext, isPaused]);

  return (
    // section tag is good, let's add an aria-roledescription and label so screen readers know what this is
    <section 
      className={styles.hero} 
      aria-roledescription="carousel" 
      aria-label="Highlighted content"
      onMouseEnter={() => setIsPaused(true)} // Accessibility: Pause on hover so users have time to read/view
      onMouseLeave={() => setIsPaused(false)}
      onFocus={() => setIsPaused(true)}      // Accessibility: Pause on keyboard focus
      onBlur={() => setIsPaused(false)}
    >
      
      {/* Previous Button */}
      <button 
        className={`${styles.navButton} ${styles.prevButton}`} 
        onClick={goToPrevious}
        aria-label="Previous slide" // Accessibility: Buttons must have text or aria-labels
      >
        <PreviousIcon />
      </button>

      {/* Images container */}
      {/* aria-live="polite" tells screen readers to announce changes, but wait until the user is idle */}
      <div className={styles.imageContainer} aria-live="polite">
        {carouselData.map((item, index) => (
          <img 
            key={item.src}
            src={item.src} 
            alt={item.alt} // Accessibility: Descriptive alt text is crucial for images
            className={`${styles.image} ${index === currentIndex ? styles.active : ''}`}
            // Accessibility: Hide non-active images from screen readers to prevent confusion
            aria-hidden={index !== currentIndex} 
          />
        ))}
      </div>

      {/* Next Button */}
      <button 
        className={`${styles.navButton} ${styles.nextButton}`} 
        onClick={goToNext}
        aria-label="Next slide"
      >
        <NextIcon />
      </button>

      {/* Indicators (Dots) */}
      <div className={styles.indicators} role="tablist">
        {carouselData.map((_, index) => (
          <button
            key={index}
            className={`${styles.dot} ${index === currentIndex ? styles.activeDot : ''}`}
            onClick={() => goToSlide(index)}
            role="tab"
            aria-label={`Go to slide ${index + 1}`}
            aria-selected={index === currentIndex} // Accessibility: Indicate which dot is active
          />
        ))}
      </div>
    </section>
  );
}