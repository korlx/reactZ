import React from 'react'
import { useForm } from 'react-hook-form'

import { Link } from 'react-router-dom';
import { LOGIN_URL } from '../../constant/constant';
import { apiPost } from '../../services/services';



export default function Login() {
    const { register, handleSubmit, formState: { errors } } = useForm()
    const emailReg = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i


    const login = async (_body) => {
        const{data}=await apiPost(LOGIN_URL,_body)
        console.log(data)
    }

    const onSub = (data) => {
        console.log(data)
        const obj = {
            email: data.email,
            password: data.password
        }
        console.log(obj)
        login(obj)
    }
        return (
            <div className='w-full h-screen flex'>
                <div className='w-[70%] my-4 grid grid-cols-1 md:grid-cols-2 m-auto h-[550px] shadow-lg shadow-gray-600 sm:max-w-[950px]'>
                    <div className='w-full h-[550px] hidden md:block'>
                        <img className='w-full h-full' src="https://github.com/fireclint/tailwind-react-login/blob/main/src/assets/trees.jpg?raw=true" alt="/" />
                    </div>
                    <div className='p-4 flex flex-col justify-around'>
                        <form onSubmit={handleSubmit(onSub)}>
                            <h2 className='text-4xl font-bold text-center mb-8'>Toys Shop</h2>
                            <div>
                                <input className='mt-3 relative block w-full appearance-none rounded-none rounded-t-md border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm ' type="email" placeholder='Email'{...register("email", {
                                    required: true, pattern: emailReg
                                })} />
                                {errors.email && <p className='text-red-600'>Email is required</p>}
                                <input className='mt-3 relative block w-full appearance-none rounded-none rounded-t-md border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm' type="password" placeholder='Password' {...register("password", { required: true, minLength: 3, maxLength: 150 })} />
                                {errors.password && <p className='text-red-600'>Password is required</p>}
                            </div>

                            <button className='w-full py-2 my-4 bg-green-600 hover:bg-green-500'>Sign In</button>


                        </form>
                        <Link className='inline-block text-sm text-blue-500  hover:text-blue-800' to={"/signUp"}>Create an Account!</Link>


                    </div>
                </div>
            </div>
        )
    }