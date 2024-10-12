import { Container } from '@/dp__templates/Container'

/*
  This example requires some changes to your config:
  
  ```
  // tailwind.config.js
  module.exports = {
    // ...
    plugins: [
      // ...
      require('@tailwindcss/aspect-ratio'),
    ],
  }
  ```
*/
const products = [
  {
    id: 1,
    name: 'Focus Paper Refill',
    href: '#',
    price: '$13',
    description: '3 sizes available',
    imageSrc:
      'https://tailwindui.com/img/ecommerce-images/category-page-01-image-card-01.jpg',
    imageAlt:
      'Person using a pen to cross a task off a productivity paper card.',
  },
  {
    id: 2,
    name: 'Focus Card Holder',
    href: '#',
    price: '$64',
    description: 'Walnut',
    imageSrc:
      'https://tailwindui.com/img/ecommerce-images/category-page-01-image-card-02.jpg',
    imageAlt: 'Paper card sitting upright in walnut card holder on desk.',
  },
  {
    id: 3,
    name: 'Focus Carry Case',
    href: '#',
    price: '$32',
    description: 'Heather Gray',
    imageSrc:
      'https://tailwindui.com/img/ecommerce-images/category-page-01-image-card-03.jpg',
    imageAlt:
      'Textured gray felt pouch for paper cards with snap button flap and elastic pen holder loop.',
  },
  // More products...
]

export default function Page() {
  return (
    <div className="mt-10 py-12 sm:py-16">
      <Container>
        <h2 className="text-center text-base/7 font-semibold text-indigo-600">
          Kêu gọi đầu tư
        </h2>
        <p className="mx-auto mt-2 max-w-lg text-pretty text-center text-4xl font-medium text-neutral-950 sm:text-5xl">
          Những sản phẩm chúng tôi cần đầu tư
        </p>

        <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-10 sm:mt-16 sm:grid-cols-2 lg:grid-cols-3 xl:gap-x-8">
          {products.map((product) => (
            <a key={product.id} href={product.href} className="group">
              <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-lg sm:aspect-h-3 sm:aspect-w-2">
                <img
                  alt={product.imageAlt}
                  src={product.imageSrc}
                  className="h-full w-full object-cover object-center group-hover:opacity-75"
                />
              </div>
              <div className="mt-4 flex items-center justify-between text-base font-medium text-neutral-900">
                <h3>{product.name}</h3>
                <p>{product.price}</p>
              </div>
              <p className="mt-1 text-sm italic text-neutral-500">
                {product.description}
              </p>
            </a>
          ))}
        </div>
      </Container>
    </div>
  )
}
