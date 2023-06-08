// Types
import { ISettings } from "../types/Settings";

interface ICheckbox {
  id: string;
  label: string;
  value: boolean;
  setValue: React.Dispatch<React.SetStateAction<ISettings>>;
}

const Checkbox = ({ id, label, value, setValue }: ICheckbox) => {
  return (
    <div className="flex gap-4 items-center">
      <input
        type="checkbox"
        id={id}
        checked={value}
        onChange={(e) =>
          setValue((prev) => ({ ...prev, [id]: e.target.checked }))
        }
        className="h-4 w-4 rounded border-gray-300"
      />
      <label htmlFor={id} className="text-base sm:text-body">
        {label}
      </label>
    </div>
  );
};

export default Checkbox;
