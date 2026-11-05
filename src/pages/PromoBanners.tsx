const promotions = [
  {
    category: 'GAMING',
    title: 'Nintendo Switch 2',
    description: 'Pre-order games & accessories.',
    image: 'https://ezyshopnow.com/images/keyword.jpeg',
  },
  {
  category: 'TELEVISION',
  title: '$100 Bonus Reward',
  description: 'With $999 spent on select TVs.',
  image: 'https://images.unsplash.com/photo-1593359677879-a4bb92f829d1?auto=format&fit=crop&w=1200&q=85',
},
  {
    category: 'HOME APPLIANCES',
    title: 'Save up to 40%',
    description: 'On select major appliances.',
    image: 'https://ezyshopnow.com/images/appliance.jpg',
  },
];

function PromoBanners() {
  return (
    <section className="promo-section">
      <div className="promo-heading">
        
      </div>

      <div className="promo-grid">
        {promotions.map((promo) => (
          <article className="promo-card" key={promo.title}>
            <img src={promo.image} alt={promo.title} />

            <div className="promo-overlay">
              <p className="promo-category">{promo.category}</p>
              <h3>{promo.title}</h3>
              <p className="promo-description">{promo.description}</p>

              
            </div>
          </article>
          
        ))}
        
      </div>
    </section>
  );
}

export default PromoBanners;