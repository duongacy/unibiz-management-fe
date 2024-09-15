'use client'

import { solidButtonClassName } from '@/dp__atoms/Button'
import { Logo } from '@/dp__atoms/Logo'
import { MobileNavLink } from '@/dp__atoms/MobileNavLink'
import { NavLink, navLinkClassName } from '@/dp__atoms/NavLink'
import { cn } from '@/utils/cn'
import {
  Popover,
  PopoverBackdrop,
  PopoverButton,
  PopoverPanel,
} from '@headlessui/react'
import Link from 'next/link'
import { Container } from './Container'
import { useContext, useEffect, useState } from 'react'
import { AuthContext } from '@/providers/AuthenProvider'

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

  return (
    <header className="py-10">
      <Container>
        <nav className="relative z-50 flex justify-between">
          <div className="flex items-center md:gap-x-12">
            <Link href="#" aria-label="Home">
              <Logo />
            </Link>
            <div className="hidden md:flex md:gap-x-6">
              <NavLink href="/">Home</NavLink>
              <NavLink href="/posts">Posts</NavLink>
              <button className={navLinkClassName()}>Pricing</button>
            </div>
          </div>
          <div className="flex items-center gap-x-5 md:gap-x-8">
            <div className="hidden md:block">
              {isLoggedIn ? (
                <button className={navLinkClassName()} onClick={handleLogout}>
                  Logout
                </button>
              ) : (
                <NavLink href="/sign-in">Sign in</NavLink>
              )}
            </div>
            <Link href="/register" className={solidButtonClassName()}>
              <span>
                Get started <span className="hidden lg:inline">today</span>
              </span>
            </Link>
            <div className="-mr-1 md:hidden">
              <MobileNavigation />
            </div>
          </div>
        </nav>
      </Container>
    </header>
  )
}
