"use client";

import { useParams } from "next/navigation";
import { useEffect, useState } from "react";
import { Icon } from "@iconify/react";
import { useCart } from "react-use-cart";

export default function Page() {
  const params = useParams();
  const [product, setProduct] = useState();
  const { addItem } = useCart();

  useEffect(() => {
    fetch(`https://fakestoreapi.com/products/${params.id}`)
      .then((res) => res.json())
      .then((json) => setProduct(json));
  }, []);

  if (!product) {
    return null;
  }

  return (
    <div className="max-w-6xl mt-12 mx-auto px-4">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <div>
          <img src={product?.image} className="w-full mb-4" alt="" />
        </div>
        <div className="col-span-3">
          <h1 className="font-bold text-2xl mb-4">{product?.title}</h1>
          <p className="mb-4">{product?.description}</p>
          <div className="flex gap-2 text-amber-400">
            <Icon icon="ph:star" className="flex items-center w-6 h-6" />
            <p className="mb-4 text-lg">{product?.rating.rate}</p>
          </div>
          <h4 className="font-bold text-3xl text-amber-500">
            ${product?.price}
          </h4>
          <button
            onClick={() => addItem(product)}
            className="border bg-amber-500 hover:bg-amber-300 transition-all rounded px-4 py-1 mt-4 "
          >
            <p className="font-bold text-white">+ Keranjang</p>
          </button>
        </div>
      </div>
    </div>
  );
}
