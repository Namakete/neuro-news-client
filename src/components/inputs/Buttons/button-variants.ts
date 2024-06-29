import { cva, type VariantProps } from 'class-variance-authority'

export type ButtonVariants = VariantProps<typeof buttonVariants>

export const buttonVariants = cva(['font-semibold', 'border', 'rounded'], {
  variants: {
    intent: {
      primary: [
        'bg-white',
        'text-gray-800',
        'border-gray-400',
        'hover:bg-gray-100',
        'dark:bg-gray-700',
        'dark:text-gray-200',
        'dark:border-gray-600',
        'dark:hover:bg-gray-600',
      ],
      secondary: [
        'bg-white',
        'text-gray-800',
        'border-gray-400',
        'hover:bg-gray-100',
        'dark:bg-gray-700',
        'dark:text-gray-200',
        'dark:border-gray-600',
        'dark:hover:bg-gray-600',
      ],
    },
    size: {
      small: ['text-sm', 'py-1', 'px-2'],
      medium: ['text-base', 'py-2', 'px-4'],
    },
  },
  compoundVariants: [
    {
      intent: 'primary',
      size: 'medium',
      class: 'uppercase',
    },
  ],
  defaultVariants: {
    intent: 'primary',
    size: 'medium',
  },
})
