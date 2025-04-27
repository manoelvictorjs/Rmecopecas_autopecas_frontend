"use client";
import { useEffect, useState } from 'react';
import {
  Carousel,
  CarouselApi,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Image from 'next/image';
import banner1 from '@/../../public/imagens/banner1.jpg';
import banner2 from '@/../../public/imagens/banner2.jpg';
import banner3 from '@/../../public/imagens/banner3.jpg';


//imagens devem ser Desktop: 1920px-2560px de largura Exemplo 1920×600px (para 16:5) Mobile: 800px-1200px de largura Exemplo: 800×250px (mantendo a proporção)
const carouselImages = [
  banner1,
  banner2,
  banner3,
];

export default function Carousell() {
  const [api, setApi] = useState<CarouselApi>();
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    if (!api) return;

    // Função handler com tipo explícito
    const selectHandler = () => {
      setCurrent(api.selectedScrollSnap());
    };

    // Adiciona listener
    api.on('select', selectHandler);

    // Configura autoplay
    const autoplay = setInterval(() => {
      api.scrollNext();
    }, 10000);

    // Cleanup
    return () => {
      clearInterval(autoplay);
      // Remove listener com a mesma referência
      api.off('select', selectHandler);
    };
  }, [api]);

  return (
    <>
      <div className="w-full bg-gray-100 shadow-s">
        <Carousel 
          setApi={setApi}
          opts={{
            align: "start",
            loop: true,
          }}
          className="w-full"
        >
          <CarouselContent className='bg-green-100'>
            {carouselImages.map((image, index) => (
              <CarouselItem key={index}>
                <div className="relative aspect-[16/5] w-full">
                  <Image
                    src={image}
                    alt={`Banner ${index + 1}`}
                    fill
                    className="object-cover w-full"
                    priority={index === 0}
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 80vw, 1400px"
                    quality={85}
                  />
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className="left-4 hidden sm:inline-flex " />
          <CarouselNext className="right-4 hidden sm:inline-flex" />
        </Carousel>

        <div className="flex justify-center gap-2 pb-4 bg-green-100">
          {carouselImages.map((_, index) => (
            <button
              key={index}
              onClick={() => api?.scrollTo(index)}
              className={`w-3 h-3 rounded-full transition-all ${
                current === index ? 'bg-green-700' : 'bg-gray-300'
              }`}
              aria-label={`Slide ${index + 1}`}
            />
          ))}
        </div>
      </div>

    </>
  );
}