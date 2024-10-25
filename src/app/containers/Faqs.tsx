import { Container } from '@/dp__templates/Container'
import backgroundImage from '@/images/background-faqs.jpg'
import { useHomeFAQ } from '@/services/home-faq/queries'
import { splitToNArrays } from '@/utils/array'
import { cn } from '@/utils/cn' // Assuming you have a cn utility function
import Image from 'next/image'

export function Faqs() {
  const homeFAQ = useHomeFAQ()
  if (homeFAQ.isLoading) {
    return <p>Loading...</p>
  }
  const homeFAQData = homeFAQ.data!
  const faqs = splitToNArrays(homeFAQData.faqs, 3)

  return (
    <section
      id="faq"
      aria-labelledby="faq-title"
      className={cn('relative overflow-hidden bg-slate-50 py-20', 'sm:py-32')}
    >
      <Image
        className={cn(
          'absolute left-1/2 top-0 max-w-none -translate-y-1/4 translate-x-[-30%]',
        )}
        src={backgroundImage}
        alt=""
        width={1558}
        height={946}
        unoptimized
      />
      <Container className="relative">
        <div className={cn('mx-auto max-w-2xl', 'lg:mx-0')}>
          <h2
            id="faq-title"
            className={cn(
              'font-display text-3xl tracking-tight text-slate-900',
              'sm:text-4xl',
            )}
          >
            {homeFAQData.title}
          </h2>
          <p className={cn('mt-4 text-lg tracking-tight text-slate-700')}>
            {homeFAQData.description}
          </p>
        </div>
        <ul
          role="list"
          className={cn(
            'mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-8',
            'lg:max-w-none lg:grid-cols-3',
          )}
        >
          {faqs.map((column, columnIndex) => (
            <li key={columnIndex}>
              <ul role="list" className="flex flex-col gap-y-8">
                {column.map((faq, faqIndex) => (
                  <li key={faqIndex}>
                    <h3
                      className={cn(
                        'font-display text-lg leading-7 text-slate-900',
                      )}
                    >
                      {faq.question}
                    </h3>
                    <p className={cn('mt-4 text-sm text-slate-700')}>
                      {faq.answer}
                    </p>
                  </li>
                ))}
              </ul>
            </li>
          ))}
        </ul>
      </Container>
    </section>
  )
}
