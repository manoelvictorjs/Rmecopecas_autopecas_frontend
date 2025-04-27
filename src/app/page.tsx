"use client";
import Carousell from '@/components/Carousel';
import Categories from '@/components/Categories';
import MaxWidthWrapper from '@/components/MaxWidthWrapper';
import { Button, buttonVariants } from '@/components/ui/button';
import Link from 'next/link';

import { FaInstagram } from "react-icons/fa";

export default function Home() {
  return (
    <>
      <Carousell/>
      <MaxWidthWrapper>
        <Categories/>
       
      
        <div className="py-20 mx-auto text-center flex flex-col items-center max-w-3xl">
          <h1 className='text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl'>
            RM{' '}
            <span className='text-green-700'>Ecopeças</span>
          </h1>
          <div className='flex flex-col sm:flex-row gap-4 mt-6'>
            <Link href='/products' className={buttonVariants()}>
              Rastrear pedido
            </Link>
            <Button variant="ghost" className='bg-green-700 hover:bg-green-600 text-white'>
              Nossos contatos &rarr;
            </Button>
          </div>
        </div>

        <div className="flex justify-center mb-8">
          <Link 
            href="https://www.instagram.com/rmecopecas/" 
            className="flex items-center gap-2 hover:text-green-600 transition-colors"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaInstagram className="w-5 h-5" />
            <span className="text-lg font-bold text-gray-700 hover:text-green-600 transition-colors">@RMECOPEÇAS</span>
          </Link>
        </div>
      </MaxWidthWrapper>
    </>
  );
}