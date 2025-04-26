"use client";
import MaxWidthWrapper from '@/components/MaxWidthWrapper';
import { Mail, Phone, Settings, Info, Clock, MessageCircle } from 'lucide-react';
import logo from '@/../../public/imagens/RmEcopecasLogo.png'
import Image from 'next/image';
import { useInView } from 'react-intersection-observer';
import { motion } from 'framer-motion';
import Link from "next/link";
import { div, strong } from 'framer-motion/client';

const perks = [
  {
    name: 'Institucional',
    Icon: Info,
    descriptions: [
      'Sobre a RmEcopeças',
      'Como comprar',
      'Política de Entrega',
      'Pagamento',
      'Política de Trocas e Devoluções',
      'Depoimentos de Clientes',
      'Política de Privacidade',
      'Carros Batidos',
      'Troca / Devoluções',
      'Fale Conosco',
    ]
  },
  {
    name: 'Atendimento',
    Icon: Phone,
    telefoneIcon: MessageCircle ,
    telefone: "Whatsapp:",
    telefoneInf:'(71) 9114-1526 ' ,
    email: "E-mail:",
    emailInf: 'Rmecopecas@outlook.com',
    clock: 'Horário de Atendimento:',
    clockIf: '08h00 às 17h00',
  },
  {
    name: 'RmEcopeças',
    Icon: Settings,
    description: "RmEcopeças - 46.575.768/0001-94",
    endereco: "Endereço:",
    localizacao: 'Rua Vereador Zezéu Ribeiro, 55, LJ 3, Boca da Mata',
  },
];

export default function Footer() {
  const [ref, inView] = useInView({
    triggerOnce: false,
    threshold: 0.1,
  });

  return (
    <footer className="border-t border-gray-200 bg-green-100 w-full flex flex-col min-h-[400px]">
      <MaxWidthWrapper className="py-10 px-4 sm:px-6 ml-[2%] sm:sl-[5%] flex-grow" >
        <div className="grid grid-cols-1 gap-y-8 sm:grid-cols-3">
          {perks.map((perk, index) => (
            <div 
              key={perk.name}
              className={`
                min-w-0 pl-6 border-l border-gray-200 
                ${index < perks.length - 1 ? 'pb-8 sm:pb-0 border-b sm:border-b-0 sm:border-l border-gray-200' : ''}
                ${index !== 0 ? 'sm:pl-6' : ''}
                ${index !== perks.length - 1 ? 'sm:pr-6' : ''}
              `}
            >
              {/* Cabeçalho da categoria */}
              <div className="flex items-center mb-4">
                <perk.Icon className="h-8 w-8 text-green-800 mr-3 flex-shrink-0" />
                <h3 className="text-lg font-semibold text-gray-900">{perk.name}</h3>
              </div>

              {/* Conteúdo da categoria */}
              <div className="space-y-2 text-sm text-gray-700">
                {perk.descriptions ? (
                  <ul className="space-y-2">
                    {perk.descriptions.map((desc, idx) => (
                      <li 
                        key={idx} 
                        className="hover:text-green-600 transition-colors cursor-pointer"
                      >
                        {desc}
                      </li>
                    ))}
                  </ul>
                ) : (
                  <div className="space-y-3">
                    {perk.description && (
                      <p className="text-gray-700">{perk.description}</p>
                    )}
                    {perk.telefone && (
                      <div className='flex items-start gap-2'>
                        <MessageCircle className='h-4 w-4 text-gray-700 mt-0.5 flex-shrink-0' />
                        <span>
                          <strong>{perk.telefone}</strong>  <span className='text-gray-700'> {perk.telefoneInf}</span>
                          </span>
                          </div>
                    )}
                    {perk.email && (
                      <div className="flex items-start gap-2">
                       <Mail className="h-4 w-4 text-gray-700 mt-0.5 flex-shrink-0" /> 
                        <span>
                          <strong>{perk.email}</strong> <span className="text-gray-700">{perk.emailInf}</span>
                        </span>
                      </div>
                    )}
                    {perk.clock && (
                      <div className="flex items-start gap-2">
                        <Clock className="h-4 w-4 text-gray-700 mt-0.5 flex-shrink-0" />
                        <span>
                        <strong> {perk.clock} </strong> <span className="text-gray-700">{perk.clockIf}</span>
                        </span>
                      </div>
                    )}
                    {perk.endereco && (
                      <div >
                     {perk.endereco} <span className="mt-3 text-gray-700"> {perk.localizacao}</span>
                      </div>              )}
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>

        {/* Rodapé adicional com imagem animada */}
        <div className="mt-12 pt-6 border-t border-gray-200 text-center text-sm text-gray-500">
          <div ref={ref} className="flex justify-center">
            <motion.div
              initial={{ scale: 0.8 }}
              animate={{ scale: inView ? 1.1 : 0.8 }}
              transition={{ duration: 0.5 }}
            >
              <Image 
                src={logo}
                width={200}
                height={70}
                alt="Logo"
                className="mx-auto"
              />
              
            </motion.div>
          </div >
        
        </div>
      </MaxWidthWrapper>
      
    </footer>
  );
}