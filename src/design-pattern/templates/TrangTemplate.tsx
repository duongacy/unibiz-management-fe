import { cn } from '@/utils/cn'
import { useEffect, useRef, useState } from 'react'

export const TrangTemplate = () => {
  const [collapse, setCollapse] = useState(false)
  const [show, setShow] = useState(true)
  const showPrevRef = useRef<boolean | null>()
  useEffect(() => {
    window.addEventListener('resize', () => {
      if (window.innerWidth >= 768) {
        // nêú trước đó false cũng set true
        setShow(true)
      } else {
        // trả về giá trị ban đầu
        setShow(showPrevRef.current)
      }
    })
  }, [])
  return (
    <div className="flex min-h-screen bg-red-400">
      <div
        className={cn(
          'relative hidden h-full w-14 shrink-0 overflow-hidden bg-gray-800 px-1 py-10 text-white transition-all duration-1000 ease-in-out',
          {
            'w-64': collapse,
            block: show,
          },
        )}
      >
        <button
          onClick={() => setCollapse((s) => !s)}
          className="absolute right-1 top-1 h-8 w-8"
        >
          {collapse ? '<' : '>'}
        </button>
        <div className="flex shrink-0 gap-2">
          <div className="h-8 w-8 shrink-0 bg-white"></div>
          <div
            className={cn(
              'grow whitespace-nowrap break-keep opacity-0 transition-all duration-1000',
              { 'opacity-100': collapse },
            )}
          >
            Lorem, ipsum dolor
          </div>
        </div>
      </div>

      <div className="grow bg-blue-400 px-8 py-1">
        <button
          onClick={() => {
            // luu lai gia tri
            setShow((s) => {
              const newValue = !s
              showPrevRef.current = newValue
              return newValue
            })
          }}
          className="bg-red-600 lg:hidden"
        >
          Toggle
        </button>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis
        mollitia incidunt quo consequatur quasi sit eaque sunt tempora facere
        quos.
      </div>
    </div>
  )
}
