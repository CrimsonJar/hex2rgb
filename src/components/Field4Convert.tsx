import React from "react";
import "./Input.css";

type fieldRGBProps = {
  convertedColor: string;
  defaultValue: string;
  invertedColor: string;
};

const FieldRGB: React.FC<fieldRGBProps> = ({
  convertedColor,
  defaultValue,
  invertedColor,
}) => {
  const color = convertedColor ? convertedColor : defaultValue;
  console.log("invertedColor", invertedColor);
  console.log("color", color);
  return (
    <div>
      <div
        className='outputRGB'
        style={{
          backgroundColor: invertedColor,
          color: color,
        }}
      >
        {color}
      </div>
    </div>
  );
};

export default FieldRGB;
