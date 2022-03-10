import React, { HTMLAttributes } from 'react';
import clsx from 'clsx';
import styles from './loader.module.scss';

export default function Loader(props: HTMLAttributes<HTMLDivElement>) {
  return (
    <div {...props} className={clsx(styles.loader, props.className)}></div>
  );
}
