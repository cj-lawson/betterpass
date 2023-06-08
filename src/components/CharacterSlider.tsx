// Types
import { ISettings } from "../types/Settings";
// Radix UI Slider
// import * as Slider from "@radix-ui/react-slider";
import { useState } from "react";

interface ISlider {
  id: string;
  min: number;
  max: number;
  setValue: React.Dispatch<React.SetStateAction<ISettings>>;
}

const CharacterSlider = ({ id, min, max, setValue }: ISlider) => {
  const [sliderValue, setSliderValue] = useState(6);

  const moveSlider = (event: any) => {
    const target = event.target;

    const min = target.min;
    const max = target.max;
    const value: any = target.value;

    setSliderValue(value);

    target.style.backgroundSize =
      ((value - min) * 100) / (max - min) + "% 100%";

    setValue(event);
  };

  return (
    <div className="flex flex-col space-y-4">
      <div className="flex flex-row justify-between items-center">
        <h1>Character Length</h1>
        <h3 className="text-xl">{sliderValue}</h3>
      </div>
      <input
        type="range"
        id={id}
        min={min}
        max={max}
        value={sliderValue}
        onChange={moveSlider}
        className="w-full"
      />

      {/* <Slider.Root
        id={id}
        defaultValue={value}
        min={0}
        max={20}
        step={1}
        aria-label="Character Length"
        className="relative flex items-center select-none touch-none w-full h-5"
      >
        <Slider.Track className="bg-[#24272C] relative grow rounded-full h-[3px]">
          <Slider.Range className="absolute bg-[#00C3AD] rounded-full h-full" />
        </Slider.Track>
        <Slider.Thumb className="block w-5 h-5 bg-white shadow-[0_2px_5px] shadow-blackA7 rounded-[10px] hover:bg-violet3 focus:outline-none focus:cursor-grab" />
      </Slider.Root> */}
    </div>
  );
};

export default CharacterSlider;
