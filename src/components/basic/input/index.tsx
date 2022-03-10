import React, { InputHTMLAttributes } from 'react';
import { Sizes } from 'components/basic';
import clsx from 'clsx';
import styles from './input.module.scss';

const InputSizes: Record<Sizes, string> = {
  SM: styles.input_sm,
  MD: styles.input_md,
  LG: styles.input_lg,
};

interface IInputProps {
  size?: Sizes;
}

export default function Input({
  size = Sizes.SM,
  ...props
}: IInputProps &
  Omit<InputHTMLAttributes<HTMLInputElement>, 'size'>): JSX.Element {
  return (
    <input
      {...props}
      className={clsx(styles.input, size && InputSizes[size], props.className)}
    />
  );
}
