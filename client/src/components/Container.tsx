import React from 'react';


interface ContainerProps {
  children: React.ReactNode;
}
export const Container = ({ children }: ContainerProps) => {
  return (
    <div className='bg-gray-50 max-auto max-w-[2120px] px-4 sm:px-2 md:px-10 xl:px-20'>{children}</div>
  )
}
