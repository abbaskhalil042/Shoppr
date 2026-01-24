import React from "react";
import { Star, Truck, Heart, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const cakes = [
  {
    id: 1,
    name: "Chocolate Truffle Cake",
    price: "₹899",
    rating: 4.8,
    reviews: 245,
    weight: "1 kg",
    type: "Eggless",
    delivery: "Same Day Delivery",
    image:
      "https://images.unsplash.com/photo-1578985545062-69928b1d9587?w=800&h=600&fit=crop",
    tag: "Best Seller",
  },
  {
    id: 2,
    name: "Red Velvet Cake",
    price: "₹999",
    rating: 4.7,
    reviews: 189,
    weight: "1 kg",
    type: "Contains Egg",
    delivery: "Same Day Delivery",
    image:
      "https://images.unsplash.com/photo-1586985289688-ca3cf47d3e6e?w=800&h=600&fit=crop",
    tag: "Trending",
  },
  {
    id: 3,
    name: "Butterscotch Cake",
    price: "₹799",
    rating: 4.6,
    reviews: 156,
    weight: "½ kg",
    type: "Eggless",
    delivery: "Tomorrow Delivery",
    image:
      "https://images.unsplash.com/photo-1621303837174-89787a7d4729?w=800&h=600&fit=crop",
  },
  {
    id: 4,
    name: "Black Forest Cake",
    price: "₹849",
    rating: 4.7,
    reviews: 203,
    weight: "1 kg",
    type: "Contains Egg",
    delivery: "Same Day Delivery",
    image:
      "https://images.unsplash.com/photo-1606890737304-57a1ca8a5b62?w=800&h=600&fit=crop",
  },
  {
    id: 5,
    name: "Vanilla Fresh Cream Cake",
    price: "₹749",
    rating: 4.5,
    reviews: 134,
    weight: "½ kg",
    type: "Eggless",
    delivery: "Tomorrow Delivery",
    image:
      "https://images.unsplash.com/photo-1586985289688-ca3cf47d3e6e?w=800&h=600&fit=crop",
    tag: "New",
  },
];

const tagStyles: Record<string, { bg: string; text: string }> = {
  "Best Seller": {
    bg: "bg-green-600",
    text: "text-white",
  },
  Trending: {
    bg: "bg-orange-500",
    text: "text-white",
  },
  New: {
    bg: "bg-blue-600",
    text: "text-white",
  },
};

// Why Choose Us
// Occasions
// Testimonials
// CTA
// Footer
const FeaturedCakes = () => {
  return (
    <section className="py-10 ">
      <div className="mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-14">
          <h2 className="font-playfair text-center text-4xl font-semibold text-[#4a2c2a]">
            Featured Cakes
          </h2>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6">
          {cakes.map((cake) => (
            <div
              key={cake.id}
              className="group bg-white border border-gray-200 rounded-2xl overflow-hidden transition-all duration-300 hover:shadow-xl hover:-translate-y-1"
            >
              {/* Image */}
              <div className="relative">
                {/* Tag */}
                {cake.tag && (
                  <div
                    className={`absolute top-3 left-3 z-10 text-xs font-semibold px-3 py-1.5 rounded-full shadow-lg
      ${tagStyles[cake.tag]?.bg ?? "bg-gray-800"}
      ${tagStyles[cake.tag]?.text ?? "text-white"}
    `}
                  >
                    {cake.tag}
                  </div>
                )}

                {/* Wishlist Button */}
                <button className="absolute top-3 right-3 z-10 bg-white/90 backdrop-blur-sm p-2 rounded-full shadow-md hover:bg-white hover:scale-110 transition-all duration-200 cursor-pointer">
                  <Heart className="h-4 w-4 text-gray-600 hover:text-red-500 transition-colors" />
                </button>

                <div className="aspect-[4/3] bg-neutral-100 overflow-hidden">
                  <img
                    src={cake.image}
                    alt={cake.name}
                    className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                </div>
              </div>

              {/* Content */}
              <div className="p-3 space-y-3 ">
                <div className="flex items-center justify-between">
                  <div>
                    <h3 className="font-semibold text-sm  leading-tight line-clamp-1">
                      {cake.name}
                    </h3>
                  </div>
                  {/* Rating */}
                  <div className="flex items-center gap-1.5 text-sm">
                    <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                    <span className="font-semibold">{cake.rating}</span>
                    <span className="text-muted-foreground">
                      ({cake.reviews})
                    </span>
                  </div>
                </div>

                {/* Meta Tags */}
                <div className="flex flex-wrap items-center gap-2 text-xs">
                  <span className="border border-gray-300 px-2.5 py-1 rounded-full font-medium">
                    {cake.weight}
                  </span>
                  <span
                    className={`px-2.5 py-1 rounded-full font-medium flex items-center gap-1 ${
                      cake.type === "Eggless"
                        ? "bg-green-50 text-green-700 border border-green-200"
                        : "bg-red-50 text-red-700 border border-red-200"
                    }`}
                  >
                    <span
                      className={`inline-block w-3 h-3 rounded-sm border-2 ${
                        cake.type === "Eggless"
                          ? "border-green-700"
                          : "border-red-700"
                      }`}
                    >
                      {cake.type === "Eggless" ? (
                        <span className="block w-full h-full bg-green-700 rounded-sm"></span>
                      ) : (
                        <span className="block w-1.5 h-1.5 bg-red-700 rounded-full m-auto mt-0.5"></span>
                      )}
                    </span>
                    {cake.type}
                  </span>
                </div>

                {/* Delivery Info */}
                <div className="flex items-center gap-1.5 text-xs text-gray-600">
                  <Truck className="h-3.5 w-3.5" />
                  <span>{cake.delivery}</span>
                </div>

                {/* Price */}
                <div className="">
                  <p className="font-bold text-xl text-gray-900">
                    {cake.price}
                  </p>
                </div>
              </div>

              {/* CTA */}
              <div className="px-5 pb-4">
                <button className="w-full bg-black text-white font-semibold py-2.5 rounded-xl hover:bg-gray-800 active:scale-95 transition-all duration-200 cursor-pointer">
                  Add to Cart
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* View All */}
        <div className="text-center mt-8">
          <button
            className="group inline-flex items-center bg-linear-to-r from-[#4a2c2a] text-white to-[#6b4543] gap-2 rounded-full border-gray-300 px-8 py-4  text-sm font-semibold
               hover:bg-gray-50  hover:border-black transition-all duration-300 cursor-pointer"
          >
            View All Cakes
            <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default FeaturedCakes;
