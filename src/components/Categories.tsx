import Image from "next/image";
import Link from "next/link";
import React, { useState, useEffect } from "react";
import acessoriosexternos from '@/../../public/imagens/acessoriosexternos.jpg';
import acessoriosinternos from '@/../../public/imagens/acessoriosinternos.jpg';
import injecao from '@/../../public/imagens/injecao.jpg';
import mecanica from '@/../../public/imagens/mecanica.jpg';
import suspensao from '@/../../public/imagens/suspensao.jpg';
import MaxWidthWrapper from "./MaxWidthWrapper";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";

const imageCategories = [
  { 
    src: acessoriosexternos, 
    alt: "Acessórios Externos",
    href: "/categorias/acessorios-externos" 
  },
  { 
    src: acessoriosinternos, 
    alt: "Acessórios Internos",
    href: "/categorias/acessorios-internos" 
  },
  { 
    src: injecao, 
    alt: "Injeção",
    href: "/categorias/injecao-eletronica" 
  },
  { 
    src: mecanica, 
    alt: "Mecânica",
    href: "/categorias/mecanica" 
  },
  { 
    src: suspensao, 
    alt: "Suspensão",
    href: "/categorias/suspensao" 
  },
];

const Categories = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };
    
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === imageCategories.length - 1 ? 0 : prevIndex + 1
    );
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === 0 ? imageCategories.length - 1 : prevIndex - 1
    );
  };

  return (
    <MaxWidthWrapper>
      <div className="w-full py-6 lg:py-8">
        <h1 className="text-2xl lg:text-3xl font-bold text-center text-gray-700 mb-6 lg:mb-8">
          Nossas Categorias
        </h1>
        
        {/* Versão Desktop */}
        <div className="hidden md:block w-full">
          <div className="w-full flex flex-col items-center">
            <div className="w-full px-4 lg:px-0">
              <div className="flex overflow-x-auto gap-8 pb-6 hide-scrollbar justify-center">
                {imageCategories.map((image, index) => (
                  <Link 
                    href={image.href} 
                    key={index}
                    className="flex-shrink-0 flex flex-col items-center group "
                    passHref
                  >
                    <div className="relative w-40 h-40 lg:w-48 lg:h-48 rounded-full overflow-hidden border-4 border-gray-100 shadow-xl transition-all duration-300 group-hover:border-green-400 group-hover:shadow-1x2">
                      <Image
                        src={image.src}
                        alt={image.alt}
                        fill
                        className="object-cover group-hover:scale-105 transition-transform duration-300 "
                        sizes="(max-width: 1024px) 25vw, 20vw"
                        priority={index < 3}
                      />
                      <div className="absolute inset-0 rounded-full pointer-events-none"></div>
                    </div>
                    <p className="text-center mt-4 text-base lg:text-lg font-medium text-gray-700 px-3 py-1 rounded-full transition-colors duration-300 group-hover:text-green-600">
                      {image.alt}
                    </p>
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Versão Mobile (carrossel) */}
        <div className="md:hidden relative w-full">
          <div className="relative h-80 overflow-hidden">
            {imageCategories.map((image, index) => (
              <div
                key={index}
                className={`absolute inset-0 transition-opacity duration-300 flex flex-col items-center justify-center ${
                  index === currentIndex ? 'opacity-100' : 'opacity-0 pointer-events-none'
                }`}
              >
                <Link href={image.href} passHref>
                  <div className="relative w-48 h-48 rounded-full overflow-hidden border-4 border-white  mx-auto">
                    <Image
                      src={image.src}
                      alt={image.alt}
                      fill
                      className="object-cover"
                      sizes="100vw"
                      priority={index < 2}
                    />
                  </div>
                  <p className="text-center mt-4 text-lg font-medium text-gray-700 px-4 py-2 rounded-full shadow-sm">
                    {image.alt}
                  </p>
                </Link>
              </div>
            ))}
          </div>
          
          {/* Navegação do carrossel */}
          <button
            onClick={prevSlide}
            className="absolute left-2 top-1/2 -translate-y-1/2 p-2 rounded-full z-10 hover:shadow-xl transition-shadow"
            aria-label="Slide anterior"
          >
            <FiChevronLeft className="w-6 h-6 text-gray-700" />
          </button>
          <button
            onClick={nextSlide}
            className="absolute right-2 top-1/2 -translate-y-1/2 p-2 rounded-full  z-10 hover:shadow-xl transition-shadow"
            aria-label="Próximo slide"
          >
            <FiChevronRight className="w-6 h-6 text-gray-700" />
          </button>
          
          {/* Indicadores de slide */}
          <div className="flex justify-center mt-4 space-x-2">
            {imageCategories.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-3 h-3 rounded-full transition-all ${
                  index === currentIndex ? 'bg-green-500 shadow-md' : 'bg-gray-300 shadow-sm'
                }`}
                aria-label={`Ir para slide ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>


    </MaxWidthWrapper>
  );
};

export default Categories;