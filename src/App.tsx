import React, { useState } from "react";
import "./App.css";
import InputColor from "./components/InputColor";
import FieldRGB from "./components/Field4Convert";
type RGBColor = {
  r: number;
  g: number;
  b: number;
};

const hexToRgb = (color: string): RGBColor | null => {
  const hex = color.replace(/^#/, "");
  if (hex.length !== 3 && hex.length !== 6) {
    return null;
  }
  const num = parseInt(hex, 16);
  const r = (num >> 16) & 255;
  const g = (num >> 8) & 255;
  const b = num & 255;
  return { r, g, b };
};

const hexColorRegex = /^#([A-Fa-f0-9]{6}|[A-Fa-f0-9]{3})$/;

const isHexColor = (input: string): boolean => {
  return hexColorRegex.test(input);
};
const invertHexColor = (hex: string): string => {
  hex = hex.replace("#", "");
  const invertedHex = (0xffffff - parseInt(hex, 16)).toString(16);
  return "#" + ("000000" + invertedHex).slice(-6);
};
function App() {
  const [color, setColor] = useState<string>("");
  const [inputValue, setInputValue] = useState<string>("");
  const [bgColor, setBgColor] = useState("#f5f5dc");
  const [convertedColor, setConvertedColor] = useState("");
  const [invertedColor, setInvertedColor] = useState("#0a0a23");

  // const defaultValue: string = "#f5f5dc";
  const defaultValue: string = "RGB(245, 245, 220)";
  const handleClick = () => {
    console.log(inputValue);
    setColor(inputValue);
  };

  const handleInputChange = (value: string) => {
    setInputValue(value);
    const colorChek = isHexColor(value);
    if (colorChek && value.length === 7) {
      setBgColor(value);
      const rgbColor = hexToRgb(value);
      if (rgbColor) {
        setConvertedColor(`RGB (${rgbColor.r}, ${rgbColor.g}, ${rgbColor.b})`);
        const inverted = invertHexColor(bgColor);
        setInvertedColor(inverted);
      }
    }
    if (!colorChek && value.length >= 7) {
      setConvertedColor("Ошибка!11");
    }
  };

  return (
    <div className='App' style={{ backgroundColor: bgColor }}>
      <div className='body'>
        <InputColor
          inputValue={inputValue}
          onChange={function (value: string): void {
            handleInputChange(value);
          }}
        />
        <FieldRGB
          convertedColor={convertedColor}
          defaultValue={defaultValue}
          invertedColor={invertedColor}
        />
      </div>
    </div>
  );
}

export default App;
