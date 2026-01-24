import Categories from "./sections/Categories";
import FeaturedCakes from "./sections/FeaturedCakes";
import Hero from "./sections/Hero";
import WhyChooseUs from "./sections/WhyChooseUs";

const Home = () => {
  return (
    <>
      <Hero />
      <Categories />
      <FeaturedCakes />
      <WhyChooseUs />
    </>
  );
};

export default Home;
