'use client'
import { Button } from '@/dp__atoms/button/button'
import { Input } from '@/dp__atoms/Input'
import { NextLink } from '@/dp__atoms/link/link'
import { InputField } from '@/dp__molecules/InputField'
import { SlimTemplate } from '@/dp__templates/SlimTemplate'
import { AuthContext } from '@/providers/AuthenProvider'
import { useLoginMutation } from '@/services/authen/mutations'
import { SignInPayload } from '@/services/authen/types'
import { zodResolver } from '@hookform/resolvers/zod'
import { useContext } from 'react'
import { SubmitErrorHandler, SubmitHandler, useForm } from 'react-hook-form'
import * as zod from 'zod'

const loginFormSchema = zod.object({
  username: zod
    .string()
    .min(3, { message: 'Username must be at least 3 characters' }),
  password: zod
    .string()
    .min(3, { message: 'Password must be at least 3 characters' }),
})

export type LoginFormData = zod.infer<typeof loginFormSchema>
const loginFormDataDefault: LoginFormData = {
  username: 'admin',
  password: 'admin',
}

export default function Login() {
  const { handleLoginSuccess } = useContext(AuthContext)!
  const loginForm = useForm<LoginFormData>({
    values: loginFormDataDefault,
    resolver: zodResolver(loginFormSchema),
  })

  const loginMutation = useLoginMutation()

  const handleSubmitError: SubmitErrorHandler<LoginFormData> = (error) => {
    console.log('Login error:', error)
  }
  const handleSubmit: SubmitHandler<LoginFormData> = async (data) => {
    const payload: SignInPayload = {
      username: data.username,
      password: data.password,
    }
    try {
      const result = await loginMutation.mutateAsync(payload)
      if (result.status === 200) {
        handleLoginSuccess(result.data.token)
      }
    } catch (error) {
      console.log('Login error:', error)
    }
  }
  return (
    <SlimTemplate>
      <h2 className="mt-20 text-lg font-semibold text-neutral-900">
        Sign in to your account
      </h2>
      <p className="mt-2 text-sm text-neutral-700">
        Don’t have an account?{' '}
        <NextLink href="/register" size="small">
          Sign up
        </NextLink>{' '}
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
              {...loginForm.register('username')}
            />
          }
          error={loginForm.formState.errors?.username?.message}
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
        <div className="col-span-full">
          <Button
            type="submit"
            intent="primary"
            rounded="full"
            className="w-full"
          >
            <span>
              Sign in <span aria-hidden="true">&rarr;</span>
            </span>
          </Button>
        </div>
      </form>
    </SlimTemplate>
  )
}
