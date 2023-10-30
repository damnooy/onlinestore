"use client";
import Banner from "@/components/banner";
import { Heart, Star } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

export default function Home() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((res) => res.json())
      .then((json) => setProducts(json));
  }, []);
  return (
    <>
      <Banner />
      <div className="max-w-6xl mt-12 mx-auto px-4">
        <div className="flex items-center mb-4 justify-between">
          <h2 className="font-bold text-3xl">Todays For You!</h2>

          <button className="border rounded py-1 px-3 hover:shadow-2xl hover:border-gray-600 hover:bg-gray-400">
            Fashion
          </button>
          <button className="border rounded py-1 px-3 hover:shadow-2xl hover:border-gray-600 hover:bg-gray-400">
            Parfume
          </button>
          <button className="border rounded py-1 px-3 hover:shadow-2xl hover:border-gray-600 hover:bg-gray-400">
            Electronic
          </button>
          <button className="border rounded py-1 px-3 hover:shadow-2xl hover:border-gray-600 hover:bg-gray-400">
            Digital
          </button>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
          {products.map((i) => (
            <Link
              href={`/product/${i.id}`}
              key={i.id}
              className="border rounded-lg p-4 hover:border-zinc-950 hover:shadow-2xl"
            >
              <div className="w-full aspect-[3/2] bg-white mb-4 relative">
                <div className="bg-gray-300 rounded-full p-4 absolute right-0"></div>
                <Heart className="absolute top-1 right-1" />
                <img
                  src={i.image}
                  alt={i.title}
                  className="w-full aspect-[3/2] object-contain"
                />
              </div>
              <h4 className="line-clamp-1">{i.title}</h4>
              <div className="flex items-center gap-2">
                <Star className="2-4 h-4 text-amber-500" />
                <p className="text-gray-500">{i.rating.rate}</p>
              </div>
              <h5 className="font-bold text-lg">${i.price}</h5>
            </Link>
          ))}
        </div>
      </div>
    </>
  );
}
