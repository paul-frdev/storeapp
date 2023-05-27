import React, { useState } from 'react'
import Box from '@mui/material/Box';
import { Input } from '../../inputs/Input';
import { FieldValues, SubmitHandler, useForm } from 'react-hook-form';
import { Heading } from '../Heading';
import { MuiButton } from '../MuiButton';
import { Link } from 'react-router-dom';
import { RxAvatar } from "react-icons/rx"

export const SignUpForm = () => {

  const [visible, setVisible] = useState(false)
  const [picture, setPicture] = useState(null)

  const {
    getValues,
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FieldValues>({
    defaultValues: {
      name: '',
      email: '',
      password: '',
      rememberMe: false
    },
  });



  const onSubmit: SubmitHandler<FieldValues> = (data) => {
    setPicture(data.file[0])
    console.log(data);
  };



  return (
    <Box className='min-h-screen flex flex-col justify-center py-12 sm:px-6 lg:px-8'>
      <Box className="sm:mx-auto sm:w-full sm:max-w-md mb-6" >
        <Heading title='Register as a new user' center />
      </Box>
      <Box className="mb-8 sm:mx-auto sm:w-full sm:max-w-xl">
        <Box className="bg-white py-8 px-4 shadow sm:rounded-lg sm:px-10">
          <form className='space-y-6' onSubmit={handleSubmit(onSubmit)}>
            <Input id='name' label='full name' errors={errors} register={register} />
            <Input id='email' label='email' errors={errors} register={register} />
            <Input showPassword setVisible={setVisible} visible={visible} id='password' label='password' type={visible ? 'text' : 'password'} errors={errors} register={register} />
            <div className='flex justify-center items-center'>
              <span className='inline-block rounded-full overflow-hidden h-8 w-8'>
                {picture ? <img src={URL.createObjectURL(picture)} alt='avatar' className='h-full w-full object-cover rounded-full' /> : <RxAvatar className='h-8 w-8' />}
              </span>
              <Input type='file' id='file' errors={errors} register={register} />
            </div>
            <Box className='flex justifynt-start items-center'>
              <MuiButton label='Submit' variant="contained" type="submit" />
            </Box>
            <Box className='flex justify-start items-center'>
              <p className='text-sm font-normal'>Already have an account?</p>
              <Link to='/login' className='text-blue-600 cursor-pointer pl-2'>Log In</Link>
            </Box>
          </form>
        </Box>
      </Box>
    </Box>
  )
}