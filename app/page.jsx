"use client";
import Banner from "@/components/banner";
import { Star } from "lucide-react";
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
        <h2 className="font-bold text-3xl mb-4">Todays For You</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
          {products.map((i) => (
            <Link href={`/product/${i.id}`} key={i.id} className="border rounded-lg p-4 hover:border-zinc-950 hover:shadow-2xl">
              <div className="w-full aspect-[3/2] bg-white mb-4">
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
