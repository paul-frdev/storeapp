import { Box } from "@mui/material";

interface HeadingProps {
  title: string;
  subtitle?: string;
  center?: boolean;
}
export const Heading = ({ title, subtitle, center }: HeadingProps) => {
  return (
    <Box className={`${center ? 'text-center' : 'text-start'}`}>
      <h2 className='text-center text-3xl font-extrabold text-gray-900'>{title}</h2>
      <p className='mt-2 font-light text-neutral-500'>{subtitle}</p>
    </Box>
  );
};