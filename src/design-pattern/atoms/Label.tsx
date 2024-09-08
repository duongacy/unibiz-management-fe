/* eslint-disable react/display-name */
import { cn } from '@/utils/cn'
import {
  Label as HeadlessLabel,
  LabelProps as HeadlessLabelProps,
} from '@headlessui/react'

export interface LabelProps extends HeadlessLabelProps {
  required?: boolean
  children: React.ReactNode
}
export const Label = ({
  required,
  className,
  children,
  ...props
}: LabelProps) => {
  return (
    <HeadlessLabel
      className={cn('text-[14px] font-[500]', className)}
      {...props}
    >
      {children}
      {required && <span className="text-red-600">*</span>}
    </HeadlessLabel>
  )
}
