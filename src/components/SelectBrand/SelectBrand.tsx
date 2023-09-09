import { SelectBrandOption } from "../../types/select-options.type";
import arrowDown from "../../assets/icons.svg";
import css from "./SelectBrand.module.css";
import { useState } from "react";

interface Props {
  options: SelectBrandOption[];
  value?: string | undefined;
  onChange: (value: string | undefined) => void;
}

export const SelectBrand = ({ options, value, onChange }: Props) => {
  const [isOpen, setIsOpen] = useState(false);

  const selectOption = (option: string) => {
    if (option !== value) {
      onChange(option);
    }
  }

  return (
    <div
      className={css.container}
      tabIndex={0}
      onBlur={() => setIsOpen(false)}
      onClick={(() => setIsOpen(prev => !prev))}
    >
      <span className={css.value}>{value}</span>
      <ul className={`${css.options} ${isOpen ? css.show : ""}`}>
        {options.map((option) => (
          <li
            className={css.option}
            key={option.id}
            onClick={e => {
              e.stopPropagation();
              selectOption(option.name);
              setIsOpen(false);
            }}
          >
            {option.name}
          </li>
        ))}
      </ul>
      <svg width={20} height={20} className={css.caret}>
        <use href={arrowDown + "#icon-chevron-down"}></use>
      </svg>
    </div>
  )
}
