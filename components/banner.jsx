"use client"
import { Splide, SplideSlide } from "@splidejs/react-splide";
import '@splidejs/react-splide/css';

export default function Banner() {
  return (
    <Splide aria-label="My Favorite Images" options={{
        type: 'loop',
        autoplay: true,
    }}> 
      <SplideSlide>
        <img className="w-full" src="https://images.tokopedia.net/img/cache/1208/NsjrJu/2023/10/27/cd122cd7-eaf1-44a0-a90b-75fd68368c23.jpg.webp?ect=4g" alt="Image 1" />
      </SplideSlide>
      <SplideSlide>
        <img className="w-full" src="https://images.tokopedia.net/img/cache/1208/NsjrJu/2023/10/26/62b206fc-9e33-4754-94ec-f5473e836b1f.jpg.webp?ect=4g" alt="Image 2" />
      </SplideSlide><SplideSlide>
        <img className="w-full" src="https://images.tokopedia.net/img/cache/1208/NsjrJu/2023/10/27/4bd85a60-2922-4cc2-a2cc-1cc2c33baa15.jpg.webp?ect=4g" alt="Image 2" />
      </SplideSlide><SplideSlide>
        <img className="w-full" src="https://images.tokopedia.net/img/cache/1208/NsjrJu/2023/10/27/8bf81d86-774e-45ea-aeba-33accd0a3e97.jpg.webp?ect=4g" alt="Image 2" />
      </SplideSlide><SplideSlide>
        <img className="w-full" src="https://images.tokopedia.net/img/cache/1208/NsjrJu/2023/10/25/0b684c38-1dd0-44c5-a239-be91fede5127.jpg.webp?ect=4g" alt="Image 2" />
      </SplideSlide>
    </Splide>
  );
}
