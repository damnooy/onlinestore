"use client";
import { Bell, Search, ShoppingCart } from "lucide-react";
import Logo from "./logo";
import Link from "next/link";
import { useCart } from "react-use-cart";
import { Popover } from "@headlessui/react";
import { useEffect, useState } from "react";

export default function Navbar() {
  const { totalItems, items } = useCart();
  const [isRender, setIsRender] = useState(false);

  useEffect(() => {
    setIsRender(true);
  }, []);

  if (!isRender) {
    return null;
  }
  return (
    <nav className="bg-white w-full h-16 border-b flex items-center">
      <div className="w-full max-w-5xl mx-auto px-4 flex gap-6 items-center">
        <div className="shrink-0">
          <Link href="/">
            <Logo />
          </Link>
        </div>
        <div className="flex-1 relative">
          <Search className="absolute left-1.5 w-5 h-5 top-1.5 text-gray-400" />
          <input
            type="text"
            placeholder="Search..."
            className="w-full border px-7 py-1 rounded"
          />
        </div>
        <div className="shrink-0 flex gap-4">
          <Popover className="relative">
            <Popover.Button className="relative p-1.5">
              <ShoppingCart className="w-5 h-5" />
              <div className="absolute top-0 right-0 bg-red-500 text-[9px] w-4 h-4 rounded-full font-bold text-white flex items-center justify-center">
                {totalItems > 99 ? "99+" : totalItems}
              </div>
            </Popover.Button>
            <Popover.Panel className="absolute z-10 right-0 w-80 bg-white shadow-xl p-3 rounded-md">
              <h4 className="font-bold text-sm mb-2 ">
                Keranjang Kuning ({totalItems})
              </h4>
              <div className="space-y-2">
                {items.map((i) => (
                  <div key={i.id} className="flex gap-2">
                    <img
                      src={i.image}
                      alt=""
                      className="shrink-0 w-8 h-8 object-cover rounded"
                    />
                    <div className="flex-1">
                      <p className="text-sm line-clamp-1 font-bold">
                        {i.title}
                      </p>
                      <div className="flex">
                        <p className="text-sm text-gray-400">
                          <button className="h-5 w-5 active:scale-95 bg-red-500 border items-start my-1 rounded-md font-bold text-white">
                            <p> - </p>
                          </button>
                          {i.quantity} barang{" "}
                          <button className="h-5 w-5 active:scale-95 bg-green-500 border items-end my-1 rounded-md font-bold text-white">
                            <p> + </p>
                          </button>
                        </p>
                      </div>
                    </div>
                    <h6 className="shrink-0 font-bold text-amber-500">
                      ${i.price}
                    </h6>
                  </div>
                ))}
              </div>
              <button className="w-full bg-amber-500 text-white p-1.5 text-sm mt-2 rounded active:bg-amber-300 hover:bg-amber-400">
                Checkout Sekarang
              </button>
            </Popover.Panel>
          </Popover>
          <button className="relative p-1.5">
            <Bell className="w-5 h-5" />
          </button>
        </div>
      </div>
    </nav>
  );
}
