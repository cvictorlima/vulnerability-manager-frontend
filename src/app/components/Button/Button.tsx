import { ButtonHTMLAttributes, DetailedHTMLProps } from 'react'
import * as B from './Button.styles'

export interface ButtonProps extends DetailedHTMLProps<ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement> {
    variant: 'danger' | 'text' | 'primary'
    label: string | React.ReactNode
}

export default function Button ({variant, label, ref, ...props}:ButtonProps) {

    return <B.Wrapper 
    {...props}
    variant={variant}
    >
        {label}
    </B.Wrapper>
}



<button></button>