import React from 'react'
import { useForm } from "react-hook-form";

const Form = () => {
    const { register, handleSubmit, getValues, formState: { errors } } = useForm();
    const emailReg=/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i;
    // email,password,confirm password,fullname,birthdate
   const onSub=(_bodyData)=>{
    console.log(_bodyData)
   }

    return (
        <div className='d-flex justify-content-center'>

            <form onSubmit={handleSubmit(onSub)} className='col-lg-3 col-md-6 col-8 mt-3 shadow p-3 rounded-5'>
                <h1>Sign Up</h1>
               
                <label  className='mt-3'>FullName:</label>
                <input {...register('fullName',{required:true, minLength:2,maxLength:20})} placeholder='Example:Suka' className='form-control' type="text" />
                
                <label className='mt-4'>Email:</label>
                <input {...register('email',{required:true, pattern:emailReg})}  className='form-control' type="text" />
                
                <label className='mt-4'>Password:</label>
                <input {...register('password',{required:true, minLength:4,maxLength:20})} className='form-control' type="password" />
                
                <label className='mt-4'>Confirm Password:</label>
                <input {...register('confirmPassword',{required:true, validate:(item)=>getValues('password')})} className='form-control' type="password" />
                
                <label className='mt-4'>Birthdate:</label>
                <input {...register('BirthDate',{required:true})} className='form-control text-start' type="date" />
                
                <button className='btn btn-dark mt-3 px-4 py-2'>Sign Up</button>
            </form>

        </div>
    )
}

export default Form