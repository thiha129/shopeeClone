import type { UseFormRegister, RegisterOptions } from 'react-hook-form'
interface Props {
  type: React.HTMLInputTypeAttribute
  errorMessage?: string
  placeholder?: string
  className?: string
  name: string
  register: UseFormRegister<any>
  rules?: RegisterOptions
}

export default function Input({ type, name, register, className, errorMessage, placeholder, rules }: Props) {
  return (
    <div className={className}>
      <input
        type={type}
        placeholder={placeholder}
        className='p-3 w-full outline-none border border-gray-300 focus:border-gray-500 rounded-sm shadow-sm'
        {...register(name, rules)}
      />
      <div className='nt-1 text-red-600 min-h-[1.25rem] text-sm'>{errorMessage}</div>
    </div>
  )
}
