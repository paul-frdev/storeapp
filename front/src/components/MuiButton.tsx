import Button from '@mui/material/Button';
import { FC } from 'react';
import { IconType } from 'react-icons/lib';

interface BaseButtonProps {
  label: string;
  onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void;
  disabled?: boolean;
  icon?: IconType;
  variant?: any;
  type?: any
}
export const MuiButton: FC<BaseButtonProps> = ({ label, type, onClick, disabled, icon: Icon, variant = 'outlined' }) => {
  return (
    <Button
      variant={variant}
      type={type}
      className='group relative w-full h-[40px] flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md'
    >
      {Icon && <Icon size={24} className='absolute left-3 top-3' />}
      {label}
    </Button>
  )
}
