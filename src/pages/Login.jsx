import Cookies from 'js-cookie';
import React from 'react'
import { useForm } from 'react-hook-form';
import { useDispatch } from 'react-redux';
import {  useNavigate } from 'react-router-dom';
import { useLoginMutation } from '../features/Auth/authApi';
import { addUser } from '../services/AuthSlice';

const Login = () => {
    const [loginUser,{error}] = useLoginMutation(); 
    const dispatch = useDispatch();
    const nav = useNavigate();

    const { register, handleSubmit, watch, formState: { errors } } = useForm();
    const onSubmit = async({username,password,remember_me}) =>{
        const user = {username,password,remember_me};
        const {data,error} = await loginUser(user);
        if(data){
            const sendData = {user : data , token : data?.token}
            dispatch(addUser(sendData))
            Cookies.set('user',JSON.stringify(data),{ expires: 10 });
            Cookies.set('token', data?.token,{ expires: user.remember_me ? 10 : null });        
            nav('/dashboard');
        }
        
    }

  return (
    <div className=' container mx-auto '>
        <div className="h-screen w-full flex items-center justify-center">
            <form action="" onSubmit={handleSubmit(onSubmit)}>
            <div className=" flex flex-col gap-3 justify-center  items-center bg-gray-900 py-10 px-10 shadow rounded">
                    <div className="flex flex-col gap-5">
                        <div className=" mb-5">
                            <h3 className=' font-bold text-center text-3xl uppercase'>Login Account</h3>
                        </div>
                        <div className=" text-red-500 ">
                              {error?.data.message}
                        </div>
                        <div className="form-control">
                          <label className="input-group">
                            <span>Username</span>
                            <input type="text" defaultValue={'kminchelle'} { ...register('username', { required : 'username is required' , maxLength : { value : 20 , message : 'username must be maximun length 20'}})} placeholder="eg.BaBa" className="input input-bordered" />
                          </label>
                          <div className=" text-red-500 ">
                                {errors.username && errors.username?.message}
                          </div>
                        </div>
                        <div className="form-control">
                          <label className="input-group">
                            <span>Password</span>
                            <input type="password" defaultValue={'0lelplR'} {...register('password', {required : 'password is required' , min : { value : 6 , message : 'password must have minium 6 characters'} })} placeholder="eg.A40ijjsdfk@" className="input input-bordered" />
                          </label>
                          <div className=" text-red-500 ">
                                {errors.password && errors.password?.message}
                          </div>
                        </div>
                    </div>
                    <div className="form-control">
                      <label className="cursor-pointer label">
                        <span className="label-text mr-3">Remember me</span>
                        <input type="checkbox" { ...register('remember_me')}  className="checkbox checkbox-success" />
                      </label>
                    </div>
                    <button type='submit' className="btn btn-primary px-10">Login</button>
                </div>
            </form>
        </div>

    </div>
  )
}

export default Login