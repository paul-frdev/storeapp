import React from 'react';
import { FieldErrors, FieldValues, UseFormRegister } from 'react-hook-form';
import { AiOutlineEye, AiOutlineEyeInvisible } from 'react-icons/ai';

interface InputProps {
  id: string;
  label?: string;
  type?: string;
  disabled?: boolean;
  required?: boolean;
  register: UseFormRegister<FieldValues>;
  errors: FieldErrors;
  showPassword?: boolean;
  visible?: boolean;
  setVisible?: (data: boolean) => void;
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
  name?: string;
  accept?: string;
}
export const Input: React.FC<InputProps> = ({
  id,
  label,
  type = 'text',
  disabled,
  required,
  register,
  errors,
  visible,
  setVisible,
  showPassword = false,
  onChange,
  name,
  accept
}) => {
  return (
    <div className='relative w-full'>
      <input
        id={id}
        disabled={disabled}
        {...register(id, { required })}
        name={name}
        accept={accept}
        onChange={onChange}
        placeholder=' '
        type={type}
        className={`peer w-full rounded-md border border-gray-300 shadow-sm px-3 py-3 pb-2 font-light focus:border-blue-500 focus:ring-blue-500 outline-none transition disabled:cursor-not-allowed disabled:opacity-70 tracking-wide
        ${showPassword && 'tracking-[1px]'}
        ${errors[id]
            ? 'border-rose-500 focus:border-rose-500'
            : 'border-neutral-300 focus:border-black'
          }
          ${type === 'file' && 'border-transparent  focus:border-transparent sr-only'}
        `}
      />
      <label
        className={`text-md absolute top-2 left-3 z-10 origin-[0] -translate-y-3 transform duration-150
     peer-placeholder-shown:translate-y-0 peer-placeholder-shown:scale-100 peer-focus:-translate-y-2 peer-focus:scale-75
      ${errors[id] ? 'text-rose-500' : 'text-zinc-400'}
      `}
      >
        {label}
      </label>
      {errors[id] && (
        <span className='text-rose-500 font-semibold text-sm'>{errors.root?.message}</span>
      )}
      {showPassword && (
        visible ? (
          <AiOutlineEye
            size={25}
            className='absolute top-3 right-2 cursor-pointer'
            onClick={() => setVisible?.(false)}
          />
        ) : (
          <AiOutlineEyeInvisible
            size={25}
            className='absolute top-3 right-2 cursor-pointer'
            onClick={() => setVisible?.(true)}
          />
        )
      )}
    </div>
  );
};