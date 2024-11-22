import React from 'react'
import Loader from '../loader/Loader'

interface SimpleButtonProps extends React.DetailedHTMLProps<React.ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement>  {
    loading?: boolean
    text?: string
    className?: string
}
// Este componente se encarga de renderizar un botón simple con un loader integrado
export default function SimpleButton(props: SimpleButtonProps) {
  return (
    <button {...props}>
        {props.loading ? <Loader/>  : props.text ?? 'Button'}
    </button>
  )
}
