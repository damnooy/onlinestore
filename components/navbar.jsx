import { Bell, Search, ShoppingCart } from "lucide-react";
import Logo from "./logo";

export default function Navbar() {
  return (
    <nav className="bg-white w-full h-16 border-b flex items-center">
      <div className="w-full max-w-6xl mx-auto px-4 flex gap-6 items-center">
        <div className="shrink-0">
          <Logo />
        </div>
        <div className="flex-1 relative">
        <Search className="absolute left-1.5 w-5 h-5 top-1.5 text-gray-400"/>
          <input type="text"placeholder="Search..." className="w-full border px-7 py-1 rounded"/>
        </div>
        <div className="shrink-0 flex gap-4">
          <ShoppingCart className="w-5 h-5" />
          <Bell className="w-5 h-5" />
        </div>
      </div>
    </nav>
  );
}
