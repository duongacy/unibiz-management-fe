/* eslint-disable react/display-name */
import { cn } from '@/utils/cn'
import {
  Select as HeadlessSelect,
  SelectProps as HeadlessSelectProps,
} from '@headlessui/react'
import { forwardRef } from 'react'

export interface SelectProps extends HeadlessSelectProps {
  required?: boolean
  options: { value: string; label: string }[]
}
export const Select = forwardRef<HTMLSelectElement, SelectProps>(
  ({ required, className, children, options, ...props }, ref) => {
    return (
      <HeadlessSelect
        ref={ref}
        className={cn(
          'block w-full appearance-none rounded-lg bg-white/5 px-3 py-1.5 text-sm/6',
          'focus:outline-none data-[focus]:outline-2 data-[focus]:-outline-offset-2 data-[focus]:outline-white/25',
          '*:text-black',
        )}
        {...props}
      >
        {options.map(({ value, label }) => (
          <option key={value} value={value}>
            {label}
          </option>
        ))}
      </HeadlessSelect>
    )
  },
)
