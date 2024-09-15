import { Footer } from './Footer'
import { Header } from './Header'

export function ManagementTemplate({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <div className="flex-grow">{children}</div>
      <Footer />
    </div>
  )
}
