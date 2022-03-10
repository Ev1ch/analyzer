import React from 'react';
import clsx from 'clsx';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Icons, IconsValues } from './values';
import { Sizes } from 'components/basic';
import styles from './icon.module.scss';

const IconsSizes: Record<Sizes, string> = {
  SM: styles.icon_sm,
  MD: styles.icon_md,
  LG: styles.icon_lg,
};

interface IIconProps {
  icon: Icons;
  size?: Sizes;
  className?: string;
}

export default function Icon({ icon, size = Sizes.SM, className }: IIconProps) {
  return (
    <FontAwesomeIcon
      icon={IconsValues[icon]}
      className={clsx(styles.icon, size && IconsSizes[size], className)}
    />
  );
}

export { Icons };
