import React, { InputHTMLAttributes } from 'react';
import { Sizes } from 'components/basic';
import clsx from 'clsx';
import styles from './input.module.scss';

const CheckboxSizes: Record<Sizes, string> = {
  SM: styles.checkbox_sm,
  MD: styles.checkbox_md,
  LG: styles.checkbox_lg,
};

interface ICheckboxProps {
  size?: Sizes;
}

export default function Checkbox({
  size = Sizes.SM,
  ...props
}: ICheckboxProps &
  Omit<InputHTMLAttributes<HTMLInputElement>, 'size' | 'type'>): JSX.Element {
  return (
    <input
      {...props}
      type="checkbox"
      className={clsx(
        styles.input,
        size && CheckboxSizes[size],
        props.className,
      )}
    />
  );
}
