import React, { ImgHTMLAttributes } from 'react';
import clsx from 'clsx';
import styles from './logotype.module.scss';

export default function Logotype(
  props: Omit<ImgHTMLAttributes<HTMLImageElement>, 'src'>,
) {
  return (
    <img
      {...props}
      className={clsx(
        styles.logotype,
        props.onClick && styles.logotype_clickable,
        props.className,
      )}
      src={undefined}
    />
  );
}
