import React from 'react'
import { useForm } from "react-hook-form";

const From = () => {
    const { register, handleSubmit, getValues, formState: { errors } } = useForm();
    const emailReg = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i;
    // email,password,confirm password,fullname,birthdate
    const onSub = (_bodyData) => {
        console.log(_bodyData)
    }

    return (
        <div className='d-flex justify-content-center' >

            <form onSubmit={handleSubmit(onSub)} className='col-md-3 col-lg-2 col-8 mt-3' >
                <div class="mb-3">
                    <label for="exampleInputEmail1" class="form-label">Email address</label>
                    <input {...register('email', { required: true, pattern: emailReg })} type="email" className='form-control' />
                    {errors.email && <span className='d-block text-danger'>Invalid email.You fucking stupid</span>}
                </div>
                <div class="mb-3">
                    <label for="exampleInputPassword1" class="form-label">Password</label>
                    <input {...register('password', { required: true, minLength: 4, maxLength: 20 })} type="password" className='form-control' />
                    {errors.password && <span className='d-block text-danger'>Invalid password.Bullshit.</span>}
                </div>
                <button type="submit" class="btn btn-primary">Submit</button>
            </form>
        </div >
    )
}

export default From