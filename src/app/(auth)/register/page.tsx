'use client'

import Link from 'next/link'
import { SolidButton } from '@/dp__atoms/Button'
import { Input } from '@/dp__atoms/Input'
import { Logo } from '@/dp__atoms/Logo'
import { Select } from '@/dp__atoms/Select'
import { InputField } from '@/dp__molecules/InputField'
import { SlimTemplate } from '@/dp__templates/SlimTemplate'
import React, { useEffect } from 'react'

export default function Register() {
  const inputRef = React.useRef<HTMLInputElement>(null)
  useEffect(() => {
    inputRef.current?.focus()
  }, [])

  return (
    <SlimTemplate>
      <div className="flex">
        <Link href="/" aria-label="Home">
          <Logo className="h-10 w-auto" />
        </Link>
      </div>
      <h2 className="mt-20 text-lg font-semibold text-gray-900">
        Get started for free
      </h2>
      <p className="mt-2 text-sm text-gray-700">
        Already registered?{' '}
        <Link
          href="/login"
          className="font-medium text-blue-600 hover:underline"
        >
          Sign in
        </Link>{' '}
        to your account.
      </p>
      <form
        action="#"
        className="mt-10 grid grid-cols-1 gap-x-6 gap-y-4 sm:grid-cols-2"
      >
        <InputField
          label="First name"
          input={<Input placeholder="Enter first name" />}
        />
        <InputField
          label="Last name"
          input={<Input placeholder="Enter last name" />}
        />
        <InputField
          label="Email address"
          className="col-span-full"
          input={<Input placeholder="Enter email address" />}
        />
        <InputField
          label="Password"
          className="col-span-full"
          input={
            <Input
              placeholder="Enter password"
              type="password"
              ref={inputRef}
            />
          }
        />
        <InputField
          className="col-span-full"
          label="How did you hear about us?"
          input={<Select options={[{ label: 'Active', value: 'active' }]} />}
        />

        <SolidButton type="button" color="blue" className="col-span-full">
          <span>
            Sign up <span aria-hidden="true">&rarr;</span>
          </span>
        </SolidButton>
      </form>
    </SlimTemplate>
  )
}
