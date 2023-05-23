import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import React from 'react'
import { LoginPage } from '../pages/LoginPage';

const router = createBrowserRouter([
  {
    path: '/login',
    element: <LoginPage />
  }
])

export const Routes = () => {
  return (
    <RouterProvider router={router} />
  )
}
