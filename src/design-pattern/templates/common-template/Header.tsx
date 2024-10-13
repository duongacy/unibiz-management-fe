'use client'

import { Logo } from '@/dp__atoms/Logo'
import { MobileNavLink } from '@/dp__atoms/MobileNavLink'
import { NavLink, navLinkClassName } from '@/dp__atoms/NavLink'
import { AuthContext } from '@/providers/AuthenProvider'
import { cn } from '@/utils/cn'
import {
  Menu,
  MenuButton,
  MenuItem,
  MenuItems,
  Popover,
  PopoverBackdrop,
  PopoverButton,
  PopoverPanel,
} from '@headlessui/react'
import { ChevronDownIcon } from '@heroicons/react/16/solid'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { Fragment, memo, useContext } from 'react'
import { Container } from '../Container'
import { Button, button } from '@/dp__atoms/button/button'
import { NextLink } from '@/dp__atoms/link/link'

function MobileNavIcon({ open }: { open: boolean }) {
  return (
    <svg
      aria-hidden="true"
      className="h-3.5 w-3.5 overflow-visible stroke-slate-700"
      fill="none"
      strokeWidth={2}
      strokeLinecap="round"
    >
      <path
        d="M0 1H14M0 7H14M0 13H14"
        className={cn('origin-center transition', {
          'scale-90 opacity-0': open,
        })}
      />
      <path
        d="M2 2L12 12M12 2L2 12"
        className={cn('origin-center transition', {
          'scale-90 opacity-0': !open,
        })}
      />
    </svg>
  )
}

function MobileNavigation() {
  return (
    <Popover>
      <PopoverButton
        className="relative z-10 flex h-8 w-8 items-center justify-center ui-not-focus-visible:outline-none"
        aria-label="Toggle Navigation"
      >
        {({ open }) => <MobileNavIcon open={open} />}
      </PopoverButton>
      <PopoverBackdrop
        transition
        className="fixed inset-0 bg-slate-300/50 duration-150 data-[closed]:opacity-0 data-[enter]:ease-out data-[leave]:ease-in"
      />
      <PopoverPanel
        transition
        className="absolute inset-x-0 top-full mt-4 flex origin-top flex-col rounded-2xl bg-white p-4 text-lg tracking-tight text-slate-900 shadow-xl ring-1 ring-slate-900/5 data-[closed]:scale-95 data-[closed]:opacity-0 data-[enter]:duration-150 data-[leave]:duration-100 data-[enter]:ease-out data-[leave]:ease-in"
      >
        <MobileNavLink href="#features">Features</MobileNavLink>
        <MobileNavLink href="#testimonials">Testimonials</MobileNavLink>
        <MobileNavLink href="#pricing">Pricing</MobileNavLink>
        <hr className="m-2 border-slate-300/40" />
        <MobileNavLink href="/sign-in">Sign in</MobileNavLink>
      </PopoverPanel>
    </Popover>
  )
}

export function Header() {
  const { isLoggedIn, handleLogout } = useContext(AuthContext)!
  const pathname = usePathname()

  return (
    <header className="py-10 shadow-lg">
      <Container>
        <nav className="relative z-50 flex justify-between">
          <div className="flex items-center xl:gap-x-12">
            <Link href="#" aria-label="Home">
              <Logo />
            </Link>
            <div className="hidden gap-x-2 xl:flex">
              <MenuWithOptions
                label="Xúc tiến thương mại"
                options={tradeLinks}
              />
              <MenuWithOptions
                label="Xúc tiến đầu tư"
                options={investmentLinks}
              />
              <MenuWithOptions
                label="Quản trị doanh nghiệp"
                options={businessManagementLinks}
              />
              <MenuWithOptions label="Tin tức" options={newsLinks} />
              <NavLink href="/contact" active={pathname === '/contact'}>
                Liên hệ
              </NavLink>
            </div>
          </div>
          <div className="flex items-center gap-x-5 md:gap-x-8">
            <div className="hidden xl:block">
              <Button
                intent={'link'}
                className={cn({ hidden: !isLoggedIn })}
                onClick={handleLogout}
              >
                Logout
              </Button>
              <NextLink href="/sign-in" className={cn({ hidden: isLoggedIn })}>
                Sign in
              </NextLink>
            </div>
            <NextLink href="/register" intent={'primary'} rounded={'full'}>
              <span>
                Get started <span className="hidden lg:inline">today</span>
              </span>
            </NextLink>
            <div className="-mr-1 xl:hidden">
              <MobileNavigation />
            </div>
          </div>
        </nav>
      </Container>
    </header>
  )
}

const tradeLinks = [
  { href: '/trade/buy', label: 'Cần mua' },
  { href: '/trade/sell', label: 'Cần bán' },
]
const investmentLinks = [
  { href: '/investment/call', label: 'Gọi đầu tư' },
  { href: '/investment/recieve', label: 'Nhận đầu tư' },
]
const businessManagementLinks = [
  { href: '/business-management/finance', label: 'Tài chính' },
  { href: '/business-management/legal', label: 'Pháp lý' },
  { href: '/business-management/martech', label: 'Martech ' },
]
const newsLinks = [
  { href: '/news/events', label: 'Sự kiện' },
  { href: '/news/cafe-f', label: 'CafeF' },
]

interface MenuWithOptionsProps {
  options: { href: string; label: string }[]
  label: string
}
// eslint-disable-next-line react/display-name
const MenuWithOptions = memo((props: MenuWithOptionsProps) => {
  const pathname = usePathname()
  return (
    <Menu as={'div'}>
      <MenuButton as={'button'}>
        {({ active }) => (
          <span
            className={cn(
              navLinkClassName({
                active: props.options.some((link) => pathname === link.href),
              }),
              'flex items-center gap-2',
            )}
          >
            {props.label}
            <ChevronDownIcon
              className={cn('ml-1 h-4 w-4 transition-transform', {
                'rotate-180 transform': active,
              })}
            />
          </span>
        )}
      </MenuButton>
      <MenuItems
        anchor="bottom"
        className="mt-4 flex min-w-40 flex-col gap-1 rounded-md bg-white p-2 shadow-md"
      >
        {props.options.map((link) => (
          <MenuItem key={link.href} as={Fragment}>
            {({ focus: _ }) => (
              <NavLink href={link.href} active={pathname === link.href}>
                {link.label}
              </NavLink>
            )}
          </MenuItem>
        ))}
      </MenuItems>
    </Menu>
  )
})
