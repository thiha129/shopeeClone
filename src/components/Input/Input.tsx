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
  type,
  name,
  register,
  className,
  errorMessage,
  placeholder,
  rules,
  classNameInput = 'p-3 w-full outline-none border border-gray-300 focus:border-gray-500 rounded-sm shadow-sm',
  classNameError = 'nt-1 text-red-600 min-h-[1.25rem] text-sm'
}: Props) {
  const registerResult = register && name ? register(name, rules) : {}
  return (
    <div className={className}>
      <input type={type} placeholder={placeholder} className={classNameInput} {...registerResult} />
      <div className={classNameError}>{errorMessage}</div>
    </div>
  )
}
