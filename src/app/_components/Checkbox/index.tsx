import { type ChangeEvent, type FC, useState } from 'react';

interface CheckboxProps {
  label: string;
  value: string;
  isSelected: boolean;
  onClickHandler: (value: string) => void;
}

export const Checkbox: FC<CheckboxProps> = ({ label, value, isSelected, onClickHandler }) => {
  const [isChecked, setIsChecked] = useState(isSelected);

  const handleCheckboxChange = (e: ChangeEvent<HTMLInputElement>) => {
    setIsChecked(e.target.checked);
    onClickHandler(value);
  };

  return (
    <label className="flex items-center gap-2.5 whitespace-nowrap cursor-pointer">
      <input
        type="checkbox"
        checked={isChecked}
        onChange={handleCheckboxChange}
        className="appearance-none w-6 h-6 rounded-[5px] bg-white border-2 border-slate-500 outline-none cursor-pointer checked:relative checked:bg-slate-500 checked:before:content-['\2713'] checked:before:text-sm checked:before:text-white checked:before:absolute checked:before:right-[5px] checked:before:top-0 checked:before:font-bold"
      />
      {label}
    </label>
  );
};
