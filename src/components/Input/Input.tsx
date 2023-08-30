import { InputHTMLAttributes } from 'react'
import type { UseFormRegister, RegisterOptions } from 'react-hook-form'
interface Props extends InputHTMLAttributes<HTMLInputElement> {
  errorMessage?: string
  classNameInput?: string
  classNameError?: string
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  register?: UseFormRegister<any>
  rules?: RegisterOptions
}

export default function Input({
  name,
  register,
  className,
  errorMessage,
  rules,
  classNameInput = 'p-3 w-full outline-none border border-gray-300 focus:border-gray-500 rounded-sm shadow-sm',
  classNameError = 'nt-1 text-red-600 min-h-[1.25rem] text-sm',
  ...rest
}: Props) {
  const registerResult = register && name ? register(name, rules) : null
  return (
    <div className={className}>
      <input className={classNameInput} {...registerResult} {...rest} />
      <div className={classNameError}>{errorMessage}</div>
    </div>
  )
}
