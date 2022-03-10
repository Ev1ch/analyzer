import React, { InputHTMLAttributes } from 'react';
import { Sizes } from 'components/basic';
import clsx from 'clsx';
import styles from './radio.module.scss';

const RadioSizes: Record<Sizes, string> = {
  SM: styles.radio_sm,
  MD: styles.radio_md,
  LG: styles.radio_lg,
};

interface IRadioProps {
  size?: Sizes;
}

export default function Radio({
  size = Sizes.SM,
  ...props
}: IRadioProps &
  Omit<InputHTMLAttributes<HTMLInputElement>, 'size' | 'type'>): JSX.Element {
  return (
    <input
      {...props}
      type="radio"
      className={clsx(styles.input, size && RadioSizes[size], props.className)}
    />
  );
}
