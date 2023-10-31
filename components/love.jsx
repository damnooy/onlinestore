import { Heart } from "lucide-react";
import { useState } from "react";
import { Icon } from "@iconify/react";

export default function Love() {
  const [loved, setLoved] = useState(false);
  const [isHovered, setIsHovered] = useState(false);

  return (
    <button
      className={`bg-gray-300 rounded-full p-1 absolute hover:scale-110 hover:text-red-500 right-0 active:scale-90 transition-all group`}
      onMouseOver={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onClick={(e) => {
        e.preventDefault();
        setLoved(!loved);
      }}
    >
      {loved ? (
        <Icon icon="mdi:heart" className="text-red-500 w-6 h-6" />
      ) : (
        <>
          {isHovered ? (
            <Icon icon="mdi:heart" className="text-red-500 w-6 h-6" />
          ) : (
            <Icon icon="mdi:heart-outline" className="text-black w-6 h-6" />
          )}
        </>
      )}
    </button>
  );
}
