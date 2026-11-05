
import { useEffect, useState } from 'react';

const slides = [
  {
    image:
      'https://images.unsplash.com/photo-1578749556568-bc2c40e68b61?auto=format&fit=crop&w=2000&q=90',
    alt: 'Handmade ceramic pottery',
  },
  {
    image:
      'https://images.unsplash.com/photo-1493106641515-6b5631de4bb9?auto=format&fit=crop&w=2000&q=90',
    alt: 'Artisan pottery and ceramics',
  },
  {
    image:
      'https://images.unsplash.com/photo-1610701596007-11502861dcfa?auto=format&fit=crop&w=2000&q=90',
    alt: 'Handcrafted ceramic collection',
  },
];

function Hero() {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((index) => (index + 1) % slides.length);
    }, 5000);

    return () => clearInterval(timer);
  }, []);

  const handleShopClick = (
    event: React.MouseEvent<HTMLButtonElement>
  ) => {
    event.preventDefault();
    event.stopPropagation();
    // Intentionally stay on the current page.
  };

  return (
    <section className="pottery-hero">
      {slides.map((slide, index) => (
        <img
          key={slide.image}
          src={slide.image}
          alt={slide.alt}
          className={`pottery-hero-image ${
            currentIndex === index ? 'visible' : ''
          }`}
        />
      ))}

      <div className="pottery-hero-shade" />

      <div className="pottery-hero-content">
        <h1>Handmade Pottery as Festive Gifts</h1>

        <p>
          10 Stunning Festive Pottery Items That Make
          <br className="desktop-break" />
          Perfect Gifts
        </p>

        <button
          type="button"
          className="pottery-hero-button"
          onClick={handleShopClick}
        >
          SHOP COLLECTION
        </button>
      </div>

      <div className="pottery-hero-indicators">
        {slides.map((slide, index) => (
          <button
            key={slide.image}
            type="button"
            aria-label={`Show slide ${index + 1}`}
            aria-pressed={currentIndex === index}
            className={currentIndex === index ? 'active' : ''}
            onClick={() => setCurrentIndex(index)}
          />
        ))}
      </div>
    </section>
  );
}

export default Hero;
