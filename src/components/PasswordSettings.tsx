import { ISettings } from "../types/Settings";
import CharacterSlider from "./CharacterSlider";
import Checkbox from "./Checkbox";

interface IPasswordSettings {
  settings: ISettings;
  changeSettings: React.Dispatch<React.SetStateAction<ISettings>>;
}

const PasswordSettings = ({ settings, changeSettings }: IPasswordSettings) => {
  return (
    <div className="px-4 py-8 bg-[#2C3036] rounded-md border border-1 border-[#3B3F44] shadow-lg">
      <form action="" className="flex flex-col space-y-8">
        <div>
          <CharacterSlider
            id={"range"}
            min={6}
            max={24}
            setValue={changeSettings}
          />
        </div>
        <div>
          <Checkbox
            id={""}
            label={""}
            value={settings.uppercase}
            setValue={changeSettings}
          />
          <Checkbox
            id={""}
            label={""}
            value={settings.uppercase}
            setValue={changeSettings}
          />
          <Checkbox
            id={""}
            label={""}
            value={settings.uppercase}
            setValue={changeSettings}
          />
          <Checkbox
            id={""}
            label={""}
            value={settings.uppercase}
            setValue={changeSettings}
          />
        </div>
      </form>
    </div>
  );
};

export default PasswordSettings;
