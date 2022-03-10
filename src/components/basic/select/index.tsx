import React, { useState, HTMLAttributes, useRef } from 'react';
import clsx from 'clsx';
import styles from './select.module.scss';

type TValue = string | number;
type TLabel = string | JSX.Element;

interface IOption {
  value: TValue;
  label: TLabel;
}

interface ISelectProps {
  options: IOption[];
  value?: IOption;
  onChange?: (option: IOption) => void;
}

export default function Select({
  options,
  value,
  onChange,
  ...props
}: ISelectProps & Omit<HTMLAttributes<HTMLDivElement>, 'onChange'>) {
  const [selectedOption, setSelectedOption] = useState(
    value || (options.length > 0 ? options[0] : null),
  );
  const selectRef = useRef<HTMLDivElement>(null);

  const selectHandler = (option: IOption) => {
    setSelectedOption(option);
    toggleHandler();

    if (onChange) {
      onChange(option);
    }
  };

  const toggleHandler = () => {
    selectRef.current?.classList.toggle(styles.select_opened);
  };

  return (
    <div ref={selectRef} className={clsx(styles.select, props.className)}>
      <div className={styles.select__value} onClick={toggleHandler}>
        {selectedOption && selectedOption.label}
      </div>
      <div className={styles.select__options}>
        {options
          .filter(({ value }) => value !== selectedOption?.value)
          .map((option) => (
            <div
              className={styles.select__option}
              onClick={() => selectHandler(option)}
              key={option.value}
            >
              {option.label}
            </div>
          ))}
      </div>
    </div>
  );
}
