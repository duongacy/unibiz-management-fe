'use client'
import { Label } from '@/dp__atoms/Label'
import { cn } from '@/utils/cn'
import { Field, FieldProps } from '@headlessui/react'

import React, { ReactNode, useCallback } from 'react'

export interface InputFieldProps extends FieldProps {
  label?: ReactNode
  error?: ReactNode
  replaceLabel?: boolean
  replaceError?: boolean
  input?: ReactNode
  className?: string
}
export const InputFieldWithoutMemo = ({
  className,
  label,
  error,
  replaceLabel,
  replaceError,
  input,
  ...props
}: InputFieldProps) => {
  const divRef = React.useRef<HTMLDivElement>(null)
  const handleClickLabel = useCallback(() => {
    divRef.current?.querySelector('input')?.focus()
  }, [])
  return (
    <Field className={cn('space-y-1', className)} {...props}>
      {label && !replaceLabel && (
        <Label onClick={handleClickLabel}>{label}</Label>
      )}
      {label && replaceLabel}
      <div ref={divRef}>{input}</div>
      {error && !replaceError && (
        <div className="text-[12px] text-red-600">{error}</div>
      )}
      {error && replaceError}
    </Field>
  )
}

export const InputField = React.memo(InputFieldWithoutMemo)
