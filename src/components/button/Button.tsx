import { ComponentProps, ReactNode } from 'react';

interface ButtonProps extends ComponentProps<'button'> {
  children: ReactNode;
}
function Button({ children, ...props }: ButtonProps) {
  return (
    <button {...props} className="bg-black text-white py-2 px-5 rounded-md hover:bg-balck/70">
      {children}
    </button>
  );
}

export default Button;
