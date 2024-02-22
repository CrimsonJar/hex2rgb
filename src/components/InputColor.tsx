import React from "react";
import "./Input.css";

type InputProps = {
  inputValue: string;
  onChange: (value: string) => void;
};

const InputColor: React.FC<InputProps> = ({ inputValue, onChange }) => {
  return (
    <div>
      <input
        className='input'
        type='text'
        value={inputValue}
        onChange={(e) => onChange(e.target.value)}
        placeholder='enter hex value'
      />
    </div>
  );
};

export default InputColor;
