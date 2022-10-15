import { Slot } from '@radix-ui/react-slot'

export interface HeadingProps {
  size: 'sm' | 'md' | 'lg'
  children: React.ReactNode
  asChild: boolean
}

export function Heading({ children, asChild }: HeadingProps) {
  const Component = asChild ? Slot : 'p'

  return (
    <Component className="">{children}</Component>
  )
}
