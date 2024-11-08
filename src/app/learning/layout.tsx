import { NavLink } from '@/dp__atoms/NavLink'
import Link from 'next/link'

export default function LeaningLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div className="flex min-h-screen flex-col">
      <div className="p-2">
        <Link href="/learning" className="text-3xl font-bold">
          Learning
        </Link>
      </div>
      <div className="flex gap-1 p-2">
        <NavLink href="/learning/useeffect">useEffect</NavLink>
        <NavLink href="/learning/usecontext">useContext</NavLink>
        <NavLink href="/learning/usereducer">useReducer</NavLink>
        <NavLink href="/learning/key">Key</NavLink>
        <NavLink href="/learning/form-handling">Form handling</NavLink>
        <NavLink href="/learning/english">English</NavLink>
      </div>
      <div className="flex flex-grow flex-col p-2">
        <div className="flex-grow border">{children}</div>
      </div>
    </div>
  )
}
