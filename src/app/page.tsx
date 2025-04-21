import MaxWidthWrapper from '@/components/MaxWidthWrapper'
import { Button, buttonVariants } from '@/components/ui/button'
import { CheckCircle, Clock, Mail, Phone, Settings, Info } from 'lucide-react'
import Link from 'next/link'

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
    email: 'rmecopecas@outlook.com',
    IconMail: Mail,
    clock: 'Horário de Atendimento',
    iconClock: Clock,
  },
  {
    name: 'RmEcopeças',
    Icon: Settings,
    description: "CNPJ AQUI",
  },
]

export default function Home() {
  return (
    <>
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

      <section className='border-t border-green-50 bg-green-100'>
        <MaxWidthWrapper className='py-20'>
          <div className='grid grid-cols-1 gap-y-12 sm:grid-cols-2 sm:gap-x-6 lg:grid-cols-3 lg:gap-x-8 lg:gap-y-0'>
            {perks.map((perk) => (
              <div
                key={perk.name}
                className='text-center md:flex md:items-start md:text-left lg:block lg:text-center'
              >
                <div className='flex items-center justify-center rounded-full '>
                  <perk.Icon className="w-10 h-10 text-green-800" />
                </div>

                <div className='mt-6 md:ml-4 md:mt-0 lg:ml-0 lg:mt-6'>
                  <h3 className='text-base font-medium text-gray-900'>
                    {perk.name}
                  </h3>
                  {perk.descriptions ? (
                    <ul className=' mt-3 text-sm text-muted-foreground space-y-2'>
                      {perk.descriptions.map((desc, index) => (
                        <li key={index}>{desc}</li>
                      ))}
                    </ul>
                  ) : (
                    <>
                      {perk.description && (
                        <p className='mt-3 text-sm text-muted-foreground'>
                          {perk.description}
                        </p>
                      )}
                      {perk.email && (
                        <div className='mt-3 flex items-center justify-center gap-2 text-sm text-muted-foreground'>
                          <Mail className='h-4 w-4' />
                          {perk.email}
                        </div>
                      )}
                      {perk.clock && (
                        <div className='mt-3 flex items-center justify-center gap-2 text-sm text-muted-foreground'>
                          <Clock className='h-4 w-4' />
                          {perk.clock}
                        </div>
                      )}
                    </>
                  )}
                </div>
              </div>
            ))}
          </div>
        </MaxWidthWrapper>
      </section>
    </>
  )
}