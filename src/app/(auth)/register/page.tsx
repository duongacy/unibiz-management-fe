'use client'

import { Button } from '@/dp__atoms/button/button'
import { Input } from '@/dp__atoms/Input'
import { NextLink } from '@/dp__atoms/link/link'
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
      <h2 className="mt-20 text-lg font-semibold text-neutral-900">
        Get started for free
      </h2>
      <p className="mt-2 text-sm text-neutral-700">
        Already registered?{' '}
        <NextLink href="/sign-in" size="small">
          Sign in
        </NextLink>{' '}
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
        <div className="col-span-full">
          <Button
            type="submit"
            intent="primary"
            rounded="full"
            className="w-full"
          >
            <span>
              Sign up <span aria-hidden="true">&rarr;</span>
            </span>
          </Button>
        </div>
      </form>
    </SlimTemplate>
  )
}
