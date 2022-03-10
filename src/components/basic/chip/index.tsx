import React, { HTMLAttributes } from 'react';
import clsx from 'clsx';
import { Sizes } from 'components/basic';
import styles from './chip.module.scss';

const ChipSizes: Record<Sizes, string> = {
  SM: styles.chip_sm,
  MD: styles.chip_md,
  LG: styles.chip_lg,
};

interface IChipProps {
  size?: Sizes;
}

export default function Chip({
  size = Sizes.SM,
  ...props
}: IChipProps & HTMLAttributes<HTMLSpanElement>): JSX.Element {
  return (
    <span
      {...props}
      className={clsx(styles.chip, size && ChipSizes[size], props.className)}
    />
  );
}
