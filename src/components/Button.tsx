interface ButtonProps {
  children: string;
  onClick: () => void;
}

const Button = ({ children, onClick }: ButtonProps) => {
  return (
    <button
      onClick={onClick}
      className="bg-[#00C3AD] rounded-md py-4 text-[#26282B] font-semibold"
    >
      {children}
    </button>
  );
};

export default Button;
