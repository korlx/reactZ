import { LockClosedIcon } from '@heroicons/react/24/outline'
import React from 'react'
import { useForm } from 'react-hook-form'
import { SIGN_UP_URL } from '../../constant/constant'
import { apiPost } from '../../services/services'

const SignUp = () => {
  const { getValues, register, handleSubmit, formState: { errors } } = useForm()

  const emailReg = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i

  const signUp = async (_body) => {
    const { data } = await apiPost(SIGN_UP_URL, _body)
    console.log(data)
  }

  const onSub = (data) => {
    delete data.confirmPassword
    console.log(data)
    const obj = {
      fullName: data.fullName,
      email: data.email,
      password: data.password
    }
    console.log(obj)

    signUp(obj)
  }
  return (
    <div className="flex min-h-full items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
      <div className="w-full max-w-md space-y-8">
        <div>
          <img
            className="mx-auto h-12 w-auto"
            src="https://wadoo.ru/upload/iblock/4a2/4a2ba11b7ed01597930cb331a9c04947.jpg"
            alt="Your Company"
          />
          <h2 className="mt-6 text-center text-3xl font-bold tracking-tight text-gray-900">
            Sign Up
          </h2>

        </div>
        <form onSubmit={handleSubmit(onSub)} className="mt-8 space-y-6" >
          <input type="hidden" name="remember" defaultValue="true" />
          <div className="-space-y-px rounded-md shadow-sm">
            <div >
              <label className="sr-only">
                FullName
              </label>
              <input
                className={`w-full px-3 py-2 text-sm leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline
                                        ${errors.FirstName && "border-red-500"}
                                        `}
                id="firstName"
                type="text"
                placeholder="First Name"
                {...register("FirstName",
                  {
                    required: "Must provide first name ", minLength: {
                      value: 2, message: "Must be at least 2 characters"
                    }, maxLength: {
                      value: 30, message: "Must be at most 30 characters"
                    }, pattern: {
                      value: /^[A-Za-z]+$/i, message: "Must be only letters"
                    }
                  })}
              />
              {errors.FirstName && <p className="text-xs  text-red-500">{errors.FirstName.message}</p>}
              {errors.name && <p className='text-red-600'>Name is required </p>}
            </div>

            <div >
              <label className="sr-only">
                Email address
              </label>
              <input
                {...register('email', { required: true, pattern: emailReg })}
                type="email"

                className="mt-3 relative block w-full appearance-none rounded-none rounded-t-md border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
                placeholder="Email address"
              />
              {errors.email && <p className='text-red-600'>Email is required </p>}
            </div>
            <div >
              <label className="sr-only">
                Password
              </label>
              <input
                {...register('password', { required: true, minLength: 3, maxLength: 20 })}
                type="password"

                className="mt-3 relative block w-full appearance-none rounded-none rounded-t-md border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
                placeholder="Password.."
              />
              {errors.password && <p className='text-red-600'>Password is required </p>}

            </div>
            <div >
              <label className="sr-only">
                Confirm password...
              </label>
              <input
                {...register('confirmPassword', { required: true, validate: (value) => value == getValues('password') })}
                type="password"

                className="mt-3 relative block w-full appearance-none rounded-none rounded-t-md border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
                placeholder="Confirm password....."
              />
              {errors.confirmPassword && <p className='text-red-600'>Password is not match </p>}

            </div>

          </div>

          <div className="flex items-center justify-between">
            <div className="flex items-center">
              <input
                id="remember-me"
                name="remember-me"
                type="checkbox"
                className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"
              />
              <label htmlFor="remember-me" className="ml-2 block text-sm text-gray-900">
                Remember me
              </label>
            </div>

            <div className="text-sm">
              <a href="#" className="font-medium text-indigo-600 hover:text-indigo-500">
                Forgot your password?
              </a>
            </div>
          </div>

          <div>
            <button
              type="submit"
              className="group relative flex w-full justify-center rounded-md border border-transparent bg-indigo-600 py-2 px-4 text-sm font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
            >
              <span className="absolute inset-y-0 left-0 flex items-center pl-3">
                <LockClosedIcon className="h-5 w-5 text-indigo-500 group-hover:text-indigo-400" aria-hidden="true" />
              </span>
              Sign Up
            </button>
          </div>
        </form>
      </div>
    </div>

  )
}

export default SignUp