import React, { useState } from 'react'
import Box from '@mui/material/Box';
import { Input } from '../../inputs/Input';
import { FieldValues, SubmitHandler, useForm } from 'react-hook-form';
import { Heading } from '../Heading';
import { MuiButton } from '../MuiButton';
import { MuiCheckbox } from '../MuiCheckbox';
import { Link } from 'react-router-dom';

export const LoginForm = () => {

  const [visible, setVisible] = useState(false)

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FieldValues>({
    defaultValues: {
      email: '',
      password: '',
      rememberMe: false
    },
  });

  const onSubmit: SubmitHandler<FieldValues> = (data) => {
    console.log('data', data);
  };
  return (
    <Box className='min-h-screen flex flex-col justify-center py-12 sm:px-6 lg:px-8'>
      <Box className="sm:mx-auto sm:w-full sm:max-w-md mb-6" >
        <Heading title='Login to your account' center />
      </Box>
      <Box className="mb-8 sm:mx-auto sm:w-full sm:max-w-xl">
        <Box className="bg-white py-8 px-4 shadow sm:rounded-lg sm:px-10">
          <form className='space-y-6' onSubmit={handleSubmit(onSubmit)}>
            <Box>
              <Input id='email' label='email' errors={errors} register={register} />
            </Box>
            <Box>
              <Input showPassword setVisible={setVisible} visible={visible} id='password' label='password' type={visible ? 'text' : 'password'} errors={errors} register={register} />
            </Box>
            <Box className='flex justify-between items-center'>
              <MuiCheckbox label="Remember-me" errors={errors} register={register} id='rememberMe' />
              <a href="/forgot-password" className='font-medium text-blue-600 hover:text-blue-500'>
                Forgot your password?
              </a>
            </Box>
            <Box className='flex justify-start items-center'>
              <MuiButton label='Submit' variant="contained" type="submit" />
            </Box>
            <Box className='flex justify-start items-center'>
              <p className='text-sm font-normal'>Not have any account?</p>
              <Link to='/sign-up' className='text-blue-600 cursor-pointer pl-2'>Sign Up</Link>
            </Box>
          </form>
        </Box>
      </Box>
    </Box>
  )
}
