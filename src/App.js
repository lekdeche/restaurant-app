import { useState } from "react";
import CategoryCard from "./components/CategoryCard/CategoryCard";
import Navbar from "./components/Navbar/Navbar";
import ProductCard from "./components/ProductCard/ProductCard";
import { db } from "./data/db";
import { Swiper, SwiperSlide } from "swiper/react";

const App = () => {
  // let isOpen = false ouverture fermeture du menu

  const [isOpen, setIsOpen] = useState(false);

  const openMenu = () => {
    // je cherche à ouvrie le menu / à le rendre visible
    setIsOpen(true);
  };

  return (
    <div className="app">
      {/*isOpen && <Navbar />*/}
      <Navbar isOpen={isOpen} setIsOpen={setIsOpen} />
      <main>
        <section className="flex">
          <button onClick={openMenu} className="ml-auto lg:hidden">
            <img src="img/icons/menu.png" alt="Menu" className="h-10" />
          </button>
        </section>
        <section>
          <Swiper
            spaceBetween={50}
            slidesOffsetBefore={50}
            slidesOffsetAfter={50}
            slidesPerView={"auto"}
          >
            {db.courses.map((course) => (
              <SwiperSlide>
                <ProductCard
                  key={course.id}
                  name={course.name}
                  image={course.image}
                  description={course.description}
                  price={course.price}
                />
              </SwiperSlide>
            ))}
          </Swiper>
        </section>

        <section>
          <ul className="flex flex-wrap justify-around">
            {db.categories.map((category) => (
              <CategoryCard
                key={category.id}
                category={category.name}
                image={category.image}
                color={category.color}
              />
            ))}
          </ul>
        </section>
      </main>
    </div>
  );
};

export default App;
