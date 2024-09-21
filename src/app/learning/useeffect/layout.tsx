import { NavLink } from '@/dp__atoms/NavLink'

export default function UseEffectLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div className="flex flex-col gap-4 p-2">
      <div className="flex gap-1">
        <NavLink href="/learning/useeffect/lifecycle">Lifecycle</NavLink>
        <NavLink href="/learning/useeffect/setting-up-subscriptions">
          Setting up subscriptions
        </NavLink>
        <NavLink href="/learning/useeffect/cleaning-up">Cleaning up</NavLink>
      </div>
      <div className="p-2">{children}</div>
    </div>
  )
}
