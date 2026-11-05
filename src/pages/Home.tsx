import BlogPosts from './Blog';
import Hero from './Hero';
import HomeDecor from './HomeDecor';
import PromoBanners from './PromoBanners';
import ScaleBanner from './ScaleBanner';
import ShopByCategory from './ShopByCategory';
import TopCategories from './TopCategories';
import TrendingProducts from './TrendingProducts';

function Home() {
  return (
    <>
      <Hero />
      <TopCategories />
      <TrendingProducts />
      <ShopByCategory/>
      <PromoBanners />
      <ScaleBanner />
      <HomeDecor />
      <BlogPosts />
    </>
  );
}

export default Home;