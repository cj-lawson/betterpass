import { FaRegCopy } from "react-icons/fa";

interface IPassword {
  password: string;
}

const PasswordDisplay = ({ password }: IPassword) => {
  const PasswordNotEmpty = password !== "";

  return (
    <div className="bg-[#2C3036] py-4 rounded-md px-4 flex justify-between items-center text-center border border-1 border-[#3B3F44] shadow-lg">
      <span className={`${PasswordNotEmpty ? "" : "opacity-25"}`}>
        {PasswordNotEmpty ? password : "P4$5W0rD!"}
      </span>
      <button>
        <FaRegCopy />
      </button>
    </div>
  );
};

export default PasswordDisplay;
