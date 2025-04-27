"use client";
import Carousell from '@/components/Carousel';
import MaxWidthWrapper from '@/components/MaxWidthWrapper';
import { Button, buttonVariants } from '@/components/ui/button';
import Link from 'next/link';




export default function Home() {
  
  return (
    <>
      <Carousell/>

      <MaxWidthWrapper>
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
      </MaxWidthWrapper>
    </>
  );
}