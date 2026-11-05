const products = [
  {
    name: 'GoodLuck Wall Mount Shelves',
    image: 'https://ezyshopnow.com/images/cate1.jpg',
    
  },
  {
    name: 'RadhaKrishna Wall Painting',
    image: 'https://ezyshopnow.com/images/cate2.jpg',
    
  },
  {
    name: 'Brass Silver Plated Decorative',
    image: 'https://ezyshopnow.com/images/cate3.jpg',
   
  },
  {
    name: 'Modern Classy Lucky Owl Resin',
    image: 'https://ezyshopnow.com/images/cate5.jpg',
    
  },
  {
    name: 'NEELAYA Brown Owl Showpiece',
    image: 'https://ezyshopnow.com/images/cate6.jpg',
   
  },
  {
    name: 'NEELAYA Stock Market Bull',
    image: 'https://ezyshopnow.com/images/cate7.jpg',
    
  },
];

function HomeDecor() {
  return (
    <section className="home-decor">
      <h2>Home Decor</h2>

      <div className="home-decor-grid">
        {products.map((product) => (
          <div className="home-decor-card" key={product.name}>
           
            <img src={product.image} alt={product.name} />

            <h3>{product.name}</h3>
          </div>
        ))}
      </div>
    </section>
  );
}

export default HomeDecor;