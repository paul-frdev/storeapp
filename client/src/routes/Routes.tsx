import App from '../App';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { LoginPage } from '../pages/LoginPage';
import { SignUpPage } from '../pages/SignUpPage';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
  },
  {
    path: 'login',
    element: <LoginPage />
  },
  {
    path: 'sign-up',
    element: <SignUpPage />
  }

])

export const Routes = () => {
  return (
    <RouterProvider router={router} />
  )
}
