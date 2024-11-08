'use client'
import { cn } from '@/utils/cn'
import { memo, useCallback, useState } from 'react'
import { data } from './data'

type TSentence = {
  vi: string
  en: string
}
type TUnit = {
  name: string
  sentences: TSentence[]
}

export default function Page() {
  return (
    <>
      {data.map((item) => (
        <Unit unit={item} key={item.name} />
      ))}
    </>
  )
}

const Unit = ({ unit }: { unit: TUnit }) => {
  const [show, setShow] = useState(false)
  const toggleShow = useCallback(() => {
    setShow((prev) => !prev)
  }, [])
  return (
    <div>
      <div className="mb-3 flex items-center gap-2">
        <h1 className="text-2xl font-bold">{unit.name}.</h1>{' '}
        <button
          onClick={toggleShow}
          className={cn('bg-slate-500 px-4 py-2 text-[20px] text-white', {
            'bg-red-500': show,
          })}
        >
          {show ? 'Hide' : 'Show'}
        </button>
      </div>
      {show && (
        <div className="space-y-2">
          {unit.sentences.map((sentence, index) => (
            <Sentence
              index={index}
              sentence={sentence}
              key={sentence.en.replaceAll(' ', '')}
            />
          ))}
        </div>
      )}
    </div>
  )
}

// eslint-disable-next-line react/display-name
const Sentence = memo(
  ({ sentence, index }: { sentence: TSentence; index: number }) => {
    const [show, setShow] = useState(false)
    const toggleShow = useCallback(() => {
      setShow((prev) => !prev)
    }, [])
    return (
      <div className="flex items-baseline gap-1">
        <div>{index + 1}.</div>
        <div>{sentence.vi}</div>
        <button
          onClick={toggleShow}
          className={cn('bg-slate-500 px-2 py-1 text-white', {
            'bg-red-500': show,
          })}
        >
          {show ? 'Hidden' : 'Show'}
        </button>
        {show && <div>{sentence.en}</div>}
      </div>
    )
  },
)
