import { Slot } from '@radix-ui/react-slot'
import { clsx } from 'clsx'

export interface TextProps {
  size?: 'sm' | 'md' | 'lg'
  children: React.ReactNode
  asChild?: boolean
  className?: string
}

const sizeMapping = { sm: 'text-xs', md: 'text-sm', lg: 'text-md' }

export function Text({ size = 'md', children, asChild, className }: TextProps) {
  const Component = asChild ? Slot : 'span'

  return (
    <Component className={clsx(`text-gray-100 font-sans ${sizeMapping[size]}`, className)}>
      {children}
    </Component>
  )
}
