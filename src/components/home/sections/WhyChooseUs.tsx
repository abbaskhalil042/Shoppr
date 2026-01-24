"use client";
import {
  Award,
  Clock,
  Shield,
  Heart,
  Truck,
  Users,
  Sparkles,
  ChefHat,
} from "lucide-react";

const WhyChooseUs = () => {
  return (
    <section className="relative py-24 overflow-hidden">
      <div className="text-center mb-14">
        <h2 className="font-playfair text-center text-4xl font-semibold text-[#4a2c2a]">
          Why Choose Us
        </h2>
      </div>
      {/* Animated background shapes */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-20 left-10 w-64 h-64 bg-pink-200 rounded-full mix-blend-multiply filter blur-xl animate-blob"></div>
        <div className="absolute top-40 right-10 w-64 h-64 bg-yellow-200 rounded-full mix-blend-multiply filter blur-xl animate-blob animation-delay-2000"></div>
        <div className="absolute -bottom-8 left-20 w-64 h-64 bg-purple-200 rounded-full mix-blend-multiply filter blur-xl animate-blob animation-delay-4000"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-6">
        {/* Hero Section with Image */}
        <div className="grid lg:grid-cols-2 gap-12 items-center mb-20">
          {/* Left - Content */}
          <div>
            <div className="inline-flex items-center gap-2 bg-white/80 backdrop-blur-sm px-4 py-2 rounded-full shadow-sm mb-6">
              <Sparkles className="w-4 h-4 text-amber-500" />
              <span className="text-sm font-semibold text-gray-700">
                Trusted Since 2020
              </span>
            </div>

            <h2 className="font-playfair text-5xl md:text-6xl font-bold text-[#4a2c2a] mb-6 leading-tight">
              Baking Dreams Into Reality
            </h2>

            <p className="text-lg text-gray-600 mb-8 leading-relaxed">
              We're not just bakers we're memory makers. Every cake tells a
              story, every bite brings joy, and every celebration becomes
              unforgettable with us.
            </p>

            <div className="flex items-center gap-6 mb-8">
              <div className="text-center">
                <div className="text-4xl font-bold text-[#4a2c2a]">50K+</div>
                <div className="text-sm text-gray-600">Smiles Created</div>
              </div>
              <div className="w-px h-12 bg-gray-300"></div>
              <div className="text-center">
                <div className="text-4xl font-bold text-[#4a2c2a]">4.9★</div>
                <div className="text-sm text-gray-600">Customer Love</div>
              </div>
              <div className="w-px h-12 bg-gray-300"></div>
              <div className="text-center">
                <div className="text-4xl font-bold text-[#4a2c2a]">15+</div>
                <div className="text-sm text-gray-600">Years Baking</div>
              </div>
            </div>

            <button className="group bg-gradient-to-r from-[#4a2c2a] to-[#6b4543] text-white px-8 py-4 rounded-full font-semibold text-lg shadow-xl hover:shadow-2xl transform hover:scale-105 transition-all duration-300">
              Order Your Celebration
              <span className="inline-block ml-2 group-hover:translate-x-1 transition-transform">
                →
              </span>
            </button>
          </div>

          {/* Right - Image Collage */}
          <div className="relative h-[500px] hidden lg:block">
            <div className="absolute top-0 left-0 w-64 h-64 rounded-3xl overflow-hidden shadow-2xl transform rotate-6 hover:rotate-0 transition-transform duration-500">
              <img
                src="https://images.unsplash.com/photo-1578985545062-69928b1d9587?w=800&h=600&fit=crop"
                alt="Chocolate cake"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="absolute bottom-0 right-0 w-64 h-64 rounded-3xl overflow-hidden shadow-2xl transform -rotate-6 hover:rotate-0 transition-transform duration-500">
              <img
                src="https://images.unsplash.com/photo-1586985289688-ca3cf47d3e6e?w=800&h=600&fit=crop"
                alt="Red velvet cake"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-48 h-48 rounded-full overflow-hidden shadow-2xl border-8 border-white z-10 hover:scale-110 transition-transform duration-500">
              <img
                src="https://images.unsplash.com/photo-1606890737304-57a1ca8a5b62?w=800&h=600&fit=crop"
                alt="Black forest cake"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes blob {
          0%,
          100% {
            transform: translate(0, 0) scale(1);
          }
          33% {
            transform: translate(30px, -50px) scale(1.1);
          }
          66% {
            transform: translate(-20px, 20px) scale(0.9);
          }
        }
        .animate-blob {
          animation: blob 7s infinite;
        }
        .animation-delay-2000 {
          animation-delay: 2s;
        }
        .animation-delay-4000 {
          animation-delay: 4s;
        }
      `}</style>
    </section>
  );
};

export default WhyChooseUs;
