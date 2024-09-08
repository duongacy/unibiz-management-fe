'use client'
import { api } from '@/services/axios'
import { SolidButton } from '@/dp__atoms/Button'
import { Input } from '@/dp__atoms/Input'
import { Logo } from '@/dp__atoms/Logo'
import { InputField } from '@/dp__molecules/InputField'
import { SlimTemplate } from '@/dp__templates/SlimTemplate'
import { zodResolver } from '@hookform/resolvers/zod'
import Link from 'next/link'
import { SubmitErrorHandler, SubmitHandler, useForm } from 'react-hook-form'
import * as zod from 'zod'

const loginFormSchema = zod.object({
  email: zod.string().email({ message: 'Invalid email address' }),
  password: zod
    .string()
    .min(8, { message: 'Password must be at least 8 characters' }),
})

export type LoginFormData = zod.infer<typeof loginFormSchema>
const loginFormDataDefault: LoginFormData = { email: '', password: '' }

export default function Login() {
  const loginForm = useForm<LoginFormData>({
    values: loginFormDataDefault,
    resolver: zodResolver(loginFormSchema),
  })
  const handleSubmitError: SubmitErrorHandler<LoginFormData> = (data) => {
  }
  const handleSubmit: SubmitHandler<LoginFormData> = (data) => {
    api.post('/login', data)
  }
  return (
    <SlimTemplate>
      <div className="flex">
        <Link href="/" aria-label="Home">
          <Logo className="h-10 w-auto" />
        </Link>
      </div>
      <h2 className="mt-20 text-lg font-semibold text-gray-900">
        Sign in to your account
      </h2>
      <p className="mt-2 text-sm text-gray-700">
        Don’t have an account?{' '}
        <Link
          href="/register"
          className="font-medium text-blue-600 hover:underline"
        >
          Sign up
        </Link>{' '}
        for a free trial.
      </p>
      <form
        className="mt-10 grid grid-cols-1 gap-y-8"
        onSubmit={loginForm.handleSubmit(handleSubmit, handleSubmitError)}
      >
        <InputField
          label="Email address"
          input={
            <Input
              placeholder="Email address"
              {...loginForm.register('email')}
            />
          }
          error={loginForm.formState.errors?.email?.message}
        />
        <InputField
          label="Password"
          input={
            <Input
              placeholder="Password"
              type="password"
              {...loginForm.register('password')}
            />
          }
          error={loginForm.formState.errors?.password?.message}
        />
        <SolidButton type="submit" color="blue" className="w-full">
          <span>
            Sign in <span aria-hidden="true">&rarr;</span>
          </span>
        </SolidButton>
      </form>
    </SlimTemplate>
  )
}
