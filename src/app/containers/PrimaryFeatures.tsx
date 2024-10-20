'use client'

import { Container } from '@/dp__templates/Container'
import backgroundImage from '@/images/background-features.jpg'
import { useHomePrimaryFeatures } from '@/services/home-primary-feature/queries'
import { cn } from '@/utils/cn'
import { Tab, TabGroup, TabList, TabPanel, TabPanels } from '@headlessui/react'
import Image from 'next/image'
import { API_STRAPI_URL } from 'src/consts'
import { useMedia } from 'src/hooks/useMedia'

export function PrimaryFeatures() {
  const media = useMedia()

  const homePrimaryFeaturesQuery = useHomePrimaryFeatures()
  if (homePrimaryFeaturesQuery.isLoading) {
    return <p>Loading...</p>
  }

  if (homePrimaryFeaturesQuery.isError) {
    return null
  }

  const homePrimaryFeaturesData = homePrimaryFeaturesQuery.data!

  return (
    <section
      id="features"
      aria-label="Features for running your books"
      className={cn(
        'relative overflow-hidden bg-primary-600 pb-28 pt-20',
        'sm:py-32',
      )}
    >
      <Image
        className="absolute left-1/2 top-1/2 max-w-none translate-x-[-44%] translate-y-[-42%]"
        src={backgroundImage}
        alt=""
        width={2245}
        height={1636}
        unoptimized
      />
      <Container className="relative">
        <div
          className={cn(
            'max-w-2xl',
            'md:mx-auto md:text-center',
            'xl:max-w-none',
          )}
        >
          <h2
            className={cn(
              'font-display text-3xl tracking-tight text-white',
              'sm:text-4xl',
              'md:text-5xl',
            )}
          >
            {homePrimaryFeaturesData.title}
          </h2>
          <p className="mt-6 text-lg tracking-tight text-primary-100">
            {homePrimaryFeaturesData.description}
          </p>
        </div>
        <TabGroup
          className={cn(
            'mt-16 grid grid-cols-1 items-center gap-y-2 pt-10',
            'sm:gap-y-6',
            'md:mt-20',
            'lg:grid-cols-12 lg:pt-0',
          )}
          vertical={media === 'lg'}
        >
          {({ selectedIndex }) => (
            <>
              <div
                className={cn(
                  '-mx-4 flex overflow-x-auto pb-4',
                  'sm:mx-0 sm:overflow-visible sm:pb-0',
                  'lg:col-span-5',
                )}
              >
                <TabList
                  className={cn(
                    'relative z-10 flex gap-x-4 whitespace-nowrap px-4',
                    'sm:mx-auto sm:px-0',
                    'lg:mx-0 lg:block lg:gap-x-0 lg:space-y-1 lg:whitespace-normal',
                  )}
                >
                  {homePrimaryFeaturesData.features.map(
                    (feature, featureIndex) => (
                      <TabLink
                        title={feature.title}
                        active={featureIndex === selectedIndex}
                        description={feature.description}
                        key={feature.title}
                      />
                    ),
                  )}
                </TabList>
              </div>
              <TabPanels className="lg:col-span-7">
                {homePrimaryFeaturesData.features.map((feature) => (
                  <TabPanel key={feature.title} unmount={false}>
                    <div className={cn('relative', 'sm:px-6', 'lg:hidden')}>
                      <div
                        className={cn(
                          'absolute -inset-x-4 bottom-[-4.25rem] top-[-6.5rem] bg-white/10 ring-1 ring-inset ring-white/10',
                          'sm:inset-x-0 sm:rounded-t-xl',
                        )}
                      />
                      <p
                        className={cn(
                          'relative mx-auto max-w-2xl text-base text-white',
                          'sm:text-center',
                        )}
                      >
                        {feature.description}
                      </p>
                    </div>
                    <div
                      className={cn(
                        'mt-10 w-[45rem] overflow-hidden rounded-xl bg-slate-50 shadow-xl shadow-primary-900/20',
                        'sm:w-auto',
                        'lg:mt-0 lg:w-[67.8125rem]',
                      )}
                    >
                      <Image
                        width={feature.image.width}
                        height={feature.image.height}
                        className="w-full"
                        src={API_STRAPI_URL + feature.image?.url || ''}
                        alt=""
                        priority
                        sizes="(min-width: 1024px) 67.8125rem, (min-width: 640px) 100vw, 45rem"
                      />
                    </div>
                  </TabPanel>
                ))}
              </TabPanels>
            </>
          )}
        </TabGroup>
      </Container>
    </section>
  )
}

type TabLinkProps = {
  active: boolean
  title: string
  description: string
}
function TabLink({ active, title, description }: TabLinkProps) {
  return (
    <div
      className={cn(
        'group relative rounded-full px-4 py-1 hover:bg-white/10',
        'lg:rounded-l-xl lg:rounded-r-none lg:p-6 lg:hover:bg-white/5',
        {
          'bg-white lg:bg-white/10 lg:ring-1 lg:ring-inset lg:ring-white/10':
            active,
        },
      )}
    >
      <h3>
        <Tab
          className={cn(
            'font-display text-lg text-primary-100 hover:text-white ui-not-focus-visible:outline-none',
            'lg:text-white',
            {
              'text-primary-600 lg:text-white': active,
            },
          )}
        >
          <span
            className={cn(
              'absolute inset-0 rounded-full',
              'lg:rounded-l-xl lg:rounded-r-none',
            )}
          />
          {title}
        </Tab>
      </h3>
      <p
        className={cn(
          'mt-2 hidden text-sm text-primary-100 group-hover:text-white lg:block',
          {
            'text-white': active,
          },
        )}
      >
        {description}
      </p>
    </div>
  )
}
