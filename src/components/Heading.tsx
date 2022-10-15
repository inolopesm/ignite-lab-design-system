import { Slot } from '@radix-ui/react-slot'
import { clsx } from 'clsx'

export interface HeadingProps {
  size: 'sm' | 'md' | 'lg'
  children: React.ReactNode
  asChild?: boolean
  className?: string
}

const sizeMapping = { sm: 'text-lg', md: 'text-xl', lg: 'text-2xl' }

export function Heading({ size = 'md', children, asChild, className }: HeadingProps) {
  const Component = asChild ? Slot : 'p'

  return (
    <Component className={clsx(`text=gray-100 font-bold font-sans ${sizeMapping[size]}`, className)}>
      {children}
    </Component>
  )
}
