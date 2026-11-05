
const categories = [
  {
    category: 'WALL DECOR',
    title: 'Dreamscape & Tropics Framed Canvas Art',
    description:
      'Transport your space to a world of captivating contrasts with our handpainted Dreamscape & Tropics Framed Art set...',
    image:
      'https://images.unsplash.com/photo-1579783902614-a3fb3927b6a5?auto=format&fit=crop&w=1200&q=85',
    imageLeft: true,
  },
  {
    category: 'TABLETOP FOUNTAINS',
    title: 'The Artment Modern Art ZenLeaf',
    description:
      'The Artment Modern Art ZenLeaf Serenity Indoor Showpiece Decorative Water Fountain for Living Room, Table Top, Office, Home Decor || (Height - 20CM).',
    image:
      'https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=1200&q=85',
    imageLeft: false,
  },
  {
    category: 'CANDLES HOLDERS',
    title: 'The Best Eco-Friendly Candles',
    description:
      'Eco-friendly candles, crafted from materials like soy, beeswax, and coconut wax, have a much lower environmental impact.',
    image:
      'https://images.unsplash.com/photo-1603006905003-be475563bc59?auto=format&fit=crop&w=1200&q=85',
    imageLeft: true,
  },
  {
    category: 'HOME DECOR',
    title: 'Rovira Textured Vase (Single)',
    description:
      'Introducing the Rovira Vase, a striking piece that combines bold design with natural elegance. This vase features a unique texture, with black and brown rope accents creating a rich and dynamic contrast.',
    image:
      'https://images.unsplash.com/photo-1578500494198-246f612d3b3d?auto=format&fit=crop&w=1200&q=85',
    imageLeft: false,
  },
];

function ShopByCategory() {
  const handleShopClick = (
    event: React.MouseEvent<HTMLAnchorElement>
  ) => {
    event.preventDefault();
  };

  return (
    <section className="shop-by-category">
      <header className="shop-category-heading"></header>

      <div className="shop-category-list">
        {categories.map((item) => (
          <article
            className={`shop-category-row ${
              item.imageLeft ? 'image-left' : 'image-right'
            }`}
            key={item.category}
          >
            <div className="shop-category-photo">
              <img src={item.image} alt={item.title} />
            </div>

            <div className="shop-category-content">
              <p className="shop-category-label">{item.category}</p>

              <h3>{item.title}</h3>

              <p className="shop-category-description">
                {item.description}
              </p>

              <a
                href="/shop"
                className="shop-category-button"
                onClick={handleShopClick}
              >
                SHOP NOW
              </a>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

export default ShopByCategory;
