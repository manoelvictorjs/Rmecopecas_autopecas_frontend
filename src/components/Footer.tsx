"use client";
import MaxWidthWrapper from '@/components/MaxWidthWrapper';
import { Mail, Phone, Settings, Info, Clock } from 'lucide-react';

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
      'Fale Conosco'
    ]
  },
  {
    name: 'Atendimento',
    Icon: Phone,
    email: "Email:",
    emailInf: 'rmecopecas@outlook.com',
    clock: 'Horário:',
    clockIf: '08:00 - 17:00'
  },
  {
    name: 'RmEcopeças',
    Icon: Settings,
    description: "CNPJ AQUI",
    localizacao: 'Rua Vereador Zezéu Ribeiro, 55, LJ 3, Boca da Mata'
  },
];

export default function Footer() {
  return (
    <footer className="border-t border-green-50 bg-green-100 w-full">
      <MaxWidthWrapper className="py-10 px-4 sm:px-6 ml-[2%] sm:ml-[5%]">
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-3">
          {perks.map((perk) => (
            <div key={perk.name} className="min-w-0"> {/* Adicionado min-w-0 para evitar overflow */}
              <div className="flex items-center mb-4">
                <perk.Icon className="h-8 w-8 text-green-800 mr-3 flex-shrink-1" />
                <h3 className="text-lg font-semibold text-gray-900 truncate">{perk.name}</h3>
              </div>

              <div className="space-y-2 text-sm text-gray-700">
                {perk.descriptions ? (
                  perk.descriptions.map((desc, index) => (
                    <p key={index} className="truncate hover:text-green-600 transition-colors">
                      {desc}
                    </p>
                  ))
                ) : (
                  <>
                    {perk.description && <p className="break-words">{perk.description}</p>}
                    {perk.email && (
                      <div className="flex items-center gap-2">
                        <Mail className="h-4 w-4 text-green-800 flex-shrink-1" />
                        <span className="break-words">
                          {perk.email} <span className="text-green-600">{perk.emailInf}</span>
                        </span>
                      </div>
                    )}
                    {perk.clock && (
                      <div className="flex items-center gap-2">
                        <Clock className="h-4 w-4 text-green-800 flex-shrink-1" />
                        <span className="break-words">
                          {perk.clock} <span className="text-green-600">{perk.clockIf}</span>
                        </span>
                      </div>
                    )}
                    {perk.localizacao && <p className="break-words mt-2">{perk.localizacao}</p>}
                  </>
                )}
              </div>
            </div>
          ))}
        </div>
      </MaxWidthWrapper>
    </footer>
  );
}