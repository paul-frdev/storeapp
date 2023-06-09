import React, { useEffect, useState } from 'react'
import Box from '@mui/material/Box';
import { Input } from '../../inputs/Input';
import { FieldValues, SubmitHandler, useForm } from 'react-hook-form';
import { Heading } from '../Heading';
import { MuiButton } from '../MuiButton';
import { Link } from 'react-router-dom';
import { RxAvatar } from "react-icons/rx"

export interface IFiles {
  preview: string;
  file: File | undefined;
}
export const SignUpForm = () => {

  const [visible, setVisible] = useState(false)
  const [image, setImage] = useState<IFiles>({ preview: "", file: undefined })

  const {
    setError,
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FieldValues>({
    defaultValues: {
      name: '',
      email: '',
      password: '',
      rememberMe: false,
      avatar: null,
    },
  });

  // const file = data.selectedfile[0];
  // if (file.type != "application/pdf") {
  //   setError("selectedfile", {
  //     type: "filetype",
  //     message: "Only PDFs are valid."
  //   });
  //   return;
  // }

  const onSubmit: SubmitHandler<FieldValues> = (data) => {
    console.log(data);

  };

  const handleUploadImage = (event: React.ChangeEvent<HTMLInputElement>) => {



    if (event.target.files?.length) {
      setImage({
        preview: URL.createObjectURL(event.target.files[0]),
        file: event.target.files[0]
      })
    }
  }

  return (
    <Box className='min-h-screen flex flex-col justify-center py-12 sm:px-6 lg:px-8'>
      <Box className="sm:mx-auto sm:w-full sm:max-w-md mb-6" >
        <Heading title='Register as a new user' center />
      </Box>
      <Box className="mb-8 sm:mx-auto sm:w-full sm:max-w-xl">
        <Box className="bg-white py-12 px-4 shadow sm:rounded-lg sm:px-10">
          <form className='space-y-6' onSubmit={handleSubmit(onSubmit)}>
            <Input id='name' label='full name' errors={errors} register={register} />
            <Input id='email' label='email' errors={errors} register={register} />
            <Input showPassword setVisible={setVisible} visible={visible} id='password' label='password' type={visible ? 'text' : 'password'} errors={errors} register={register} />
            <div className='flex justify-start items-center'>
              <span className='inline-block rounded-full overflow-hidden h-8 w-8'>
                {image.preview?.length ? <img src={image.preview} alt='avatar' className='h-full w-full object-cover rounded-full' /> : <RxAvatar className='h-8 w-8' />}
              </span>
              <label className="ml-5 cursor-pointer w-[8rem] flex items-center justify-center px-4 py-2 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 bg-white hover:bg-gray-50">
                <span className='whitespace-nowrap'>Upload file</span>
                <Input accept='.jpg,.png,.jpeg' name='name' onChange={handleUploadImage} type='file' id='file' errors={errors} register={register} />
              </label>
            </div>
            <Box className='flex justifynt-start items-center'>
              <MuiButton label='Submit' variant="contained" type="submit" />
            </Box>
            <Box className='flex justify-start items-center'>
              <p className='text-sm font-normal'>Already have an account?</p>
              <Link to='/login' className='text-blue-600 cursor-pointer pl-2'>Sign In</Link>
            </Box>
          </form>
        </Box>
      </Box>
    </Box>
  )
}