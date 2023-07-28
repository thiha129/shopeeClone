import { Link, useNavigate } from 'react-router-dom'
import { useForm } from 'react-hook-form'
import { schema, Schema } from 'src/utils/rules'
import { useMutation } from '@tanstack/react-query'
import { omit } from 'lodash'

import { yupResolver } from '@hookform/resolvers/yup'
import Input from 'src/components/Input'
import { registerAccount } from 'src/apis/auth.api'
import { isAxiosUnprocessableEntityError } from 'src/utils/utils'
import { ErrorResponse } from 'src/types/utils.type'
import { useContext } from 'react'
import { AppContext } from 'src/contexts/app.context'

type FormData = Schema
export default function Register() {
  const { setIsAuthenticated } = useContext(AppContext)
  const navigate = useNavigate()

  const {
    register,
    handleSubmit,
    setError,
    formState: { errors }
  } = useForm<FormData>({
    resolver: yupResolver(schema)
  })
  const registerAccountMutation = useMutation({
    mutationFn: (body: Omit<FormData, 'confirm_password'>) => registerAccount(body)
  })
  const onSubmit = handleSubmit((data) => {
    const body = omit(data, ['confirm_password'])
    registerAccountMutation.mutate(body, {
      onSuccess: () => {
        setIsAuthenticated(true)
        navigate('/')
      },
      onError: (error) => {
        if (isAxiosUnprocessableEntityError<ErrorResponse<Omit<FormData, 'confirm_password'>>>(error)) {
          const formError = error.response?.data.data
          //cách 1
          if (formError) {
            Object.keys(formError).forEach((key) => {
              setError(key as keyof Omit<FormData, 'confirm_password'>, {
                message: formError[key as keyof Omit<FormData, 'confirm_password'>],
                type: 'Server'
              })
            })
          }
          //cách 2
          // if (formError?.email) {
          //   setError('email', {
          //     message: formError.email,
          //     type: 'Server'
          //   })
          // }
          // if (formError?.password) {
          //   setError('password', {
          //     message: formError.email,
          //     type: 'Server'
          //   })
          // }
        }
      }
    })
  })
  return (
    <div className='bg-orange'>
      <div className='container'>
        <div className='grid grid-cols-1 lg:grid-cols-5 py-12 lg:py-32 lg:pr-10'>
          <div className='lg:col-span-2 lg:col-start-4'>
            <form className='p-10 bg-white shadow-sm' onSubmit={onSubmit} noValidate>
              <div className='text-2xl'>Đăng ký</div>
              <Input
                name='email'
                type='email'
                placeholder='Email'
                className='mt-8'
                errorMessage={errors.email?.message}
                register={register}
              />
              {/* <div className='mt-8'>
                <input
                  type='email'
                  placeholder='Email'
                  className='p-3 w-full outline-none border border-gray-300 focus:border-gray-500 rounded-sm shadow-sm'
                  {...register('email', rules.email)}
                />
                <div className='nt-1 text-red-600 min-h-[1.25rem] text-sm'>{errors.email?.message}</div>
              </div> */}
              <Input
                name='password'
                type='password'
                placeholder='Password'
                className='mt-2'
                errorMessage={errors.password?.message}
                register={register}
              />
              {/* <div className='mt-2'>
                <input
                  type='password'
                  placeholder='Password'
                  autoComplete='on'
                  className='p-3 w-full outline-none border border-gray-300 focus:border-gray-500 rounded-sm shadow-sm'
                  {...register('password', rules.password)}
                />
                <div className='nt-1 text-red-600 min-h-[1.25rem] text-sm'>{errors.password?.message}</div>
              </div> */}
              <Input
                name='confirm_password'
                type='password'
                placeholder='Confirm Password'
                className='mt-2'
                errorMessage={errors.confirm_password?.message}
                register={register}
              />
              {/* <div className='mt-2'>
                <input
                  type='password'
                  placeholder='Confirm Password'
                  autoComplete='on'
                  className='p-3 w-full outline-none border border-gray-300 focus:border-gray-500 rounded-sm shadow-sm'
                  {...register('confirm_password', {
                    ...rules.confirm_password
                  })}
                />
                <div className='nt-1 text-red-600 min-h-[1.25rem] text-sm'>{errors.confirm_password?.message}</div>
              </div> */}
              <div className='mt-2'>
                <button className='w-full text-center py-4 px-2 uppercase bg-red-500 text-white text-sm hover:bg-red-600'>
                  Đăng ký
                </button>
              </div>
              <div className='mt-8 '>
                <div className='flex items-center justify-center'>
                  <span className='text-gray-400'>Bạn đã có tài khoản?</span>
                  <Link to='/login' className='text-red-400 ml-1'>
                    Đăng nhập
                  </Link>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}
