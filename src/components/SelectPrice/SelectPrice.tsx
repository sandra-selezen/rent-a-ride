import { useState } from "react";
import arrowDown from "../../assets/icons.svg";
import css from "./SelectPrice.module.css";

interface Props {
  value?: number | undefined;
  onChange: (value: number | undefined) => void;
}

export const SelectPrice = ({ value, onChange }: Props) => {
  const [isOpen, setIsOpen] = useState(false);

  const priceRange = Array.from({ length: 48 }, (_, index) => 30 + index * 10);

  const selectOption = (price: number) => {
    if (price !== value) {
      onChange(price);
    }
  }

  return (
    <div
      className={css.container}
      tabIndex={0}
      onBlur={() => setIsOpen(false)}
      onClick={(() => setIsOpen(prev => !prev))}
    >
      <span className={css.badge}>To $ </span>
      <span className={css.value}>{value}</span>
      <ul className={`${css.options} ${isOpen ? css.show : ""}`}>
        {priceRange.map((price) => (
          <li
            className={css.option}
            key={price}
            onClick={e => {
              e.stopPropagation();
              selectOption(price);
              setIsOpen(false);
            }}
          >
            {price}
          </li>
        ))}
      </ul>
      <svg width={20} height={20} className={css.caret}>
        <use href={arrowDown + "#icon-chevron-down"}></use>
      </svg>
    </div>
  )
}
