import { useState } from "react";
import PasswordDisplay from "./PasswordDisplay";
import PasswordSettings from "./PasswordSettings";
// import CharacterSlider from "./CharacterSlider";
// import Checkbox from "./Checkbox";
// import { ISettings } from "../types/Settings";

interface Settings {
  length: number;
  uppercase: boolean;
  lowercase: boolean;
  numbers: boolean;
  symbols: boolean;
}

const PasswordGenerator = () => {
  const [password, setPassword] = useState("");
  const [settings, setSettings] = useState<Settings>({
    length: 15,
    uppercase: true,
    lowercase: true,
    numbers: true,
    symbols: true,
  });

  const generatePassword = () => {
    let charSet = "";
    if (settings.uppercase) charSet += "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    if (settings.lowercase) charSet += "abcdefghijklmnopqrstuvwxyz";
    if (settings.numbers) charSet += "0123456789";
    if (settings.symbols) charSet += "!()-.?[]`~;@#$%^&*+=";
    let password = "";

    for (let i = 0; i < settings.length; i++) {
      let char = charSet[Math.floor(Math.random() * charSet.length)];
      if (password.length === 0) {
        while (char === "." || char === "-") {
          char = charSet[Math.floor(Math.random() * charSet.length)];
        }
      }
      password += char;
    }

    setPassword(password);
  };

  return (
    <>
      <div className="flex flex-col w-full w-11/12 sm:w-2/3 lg:w-1/2 max-w-[500px] flex flex-col space-y-6 rounded-md p-2">
        <div className="w-full">
          <PasswordDisplay password={password} />
        </div>
        <div>
          <PasswordSettings settings={settings} changeSettings={setSettings} />
        </div>
      </div>
    </>
  );
};

export default PasswordGenerator;
