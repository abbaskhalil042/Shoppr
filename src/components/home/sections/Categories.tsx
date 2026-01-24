import Image from "next/image";
// import { playfair } from "@/app/layout";

const categories = [
  {
    name: "Special",
    image: "/assets/categories/special.png",
    bg: "from-pink-100 to-pink-200",
  },
  {
    name: "Cakes",
    image: "/assets/categories/cakes.png",
    bg: "from-yellow-100 to-yellow-200",
  },
  {
    name: "Cupcakes",
    image: "/assets/categories/cupcakes.png",
    bg: "from-purple-100 to-purple-200",
  },
  {
    name: "Doughnuts",
    image: "/assets/categories/doughnuts.png",
    bg: "from-orange-100 to-orange-200",
  },
  {
    name: "Pastries",
    image: "/assets/categories/pasteries.png",
    bg: "from-rose-100 to-rose-200",
  },
  {
    name: "Cookies",
    image: "/assets/categories/cookies.png",
    bg: "from-amber-100 to-amber-200",
  },
  //   {
  //     name: "Macarons",
  //     image: "/assets/categories/macarons.png",
  //     bg: "from-sky-100 to-sky-200",
  //   },
];

const Categories = () => {
  return (
    <section className="px-6 py-20">
      {/* Heading */}
      <h2
        className={`font-playfair mb-14 text-center text-4xl font-semibold text-[#4a2c2a]`}
      >
        Our Categories
      </h2>

      {/* Grid */}
      <div className="mx-auto grid max-w-7xl grid-cols-2 gap-24 sm:grid-cols-3 md:grid-cols-6">
        {categories.map((category, index) => (
          <div key={index} className="flex flex-col items-center">
            {/* PERFECT CIRCLE */}
            <div
              className={`group flex h-52 w-52 items-center justify-center cursor-pointer rounded-full bg-gradient-to-br ${category.bg} shadow-md transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl`}
            >
              {/* Image */}
              <Image
                src={category.image}
                alt={category.name}
                width={200}
                height={200}
                priority
                className="object-contain transition-transform duration-300 group-hover:scale-110"
              />
            </div>

            {/* Text below */}
            <p className="mt-4 text-center text-xl font-medium tracking-wide text-[#4a2c2a]">
              {category.name}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Categories;
