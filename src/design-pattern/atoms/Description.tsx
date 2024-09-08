/* eslint-disable react/display-name */
import { cn } from '@/utils/cn'
import {
  Description as HeadlessDescription,
  DescriptionProps as HeadlessDescriptionProps,
} from '@headlessui/react'

export interface DescriptionProps extends HeadlessDescriptionProps {
  required?: boolean
  children: React.ReactNode
}
export const Description = ({ required, className, children, ...props }) => {
  return (
    <HeadlessDescription
      className={cn('text-[14px] font-[400]', className)}
      {...props}
    >
      {children}
    </HeadlessDescription>
  )
}
