import { Slot } from '@radix-ui/react-slot'

export interface TextProps {
  size?: 'sm' | 'md' | 'lg'
  children: React.ReactNode
  asChild?: boolean
}

const sizeMapping = { sm: 'text-xs', md: 'text-sm', lg: 'text-md' }

export function Text({ size = 'md', children, asChild }: TextProps) {
  const Component = asChild ? Slot : 'span'

  return (
    <Component className={`text-gray-100 font-sans ${sizeMapping[size]}`}>
      {children}
    </Component>
  )
}
