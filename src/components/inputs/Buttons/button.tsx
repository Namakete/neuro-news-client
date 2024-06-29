'use client'

import { ComponentPropsWithoutRef } from 'react'
import { type ButtonVariants, buttonVariants } from './button-variants'

type ButtonProps = ComponentPropsWithoutRef<'button'> & ButtonVariants

export const Button = ({
  children,
  intent,
  size,
  className,
  ...props
}: ButtonProps) => {
  return (
    <button {...props} className={buttonVariants({ intent, size, className })}>
      {children}
    </button>
  )
}
