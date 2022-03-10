import React, { HTMLAttributes } from 'react';
import clsx from 'clsx';
import styles from './divider.module.scss';

export default function Divider(props: HTMLAttributes<HTMLDivElement>) {
  return (
    <div {...props} className={clsx(styles.divider, props.className)}>
      {props.children && (
        <div className={styles.divider__content}>{props.children}</div>
      )}
    </div>
  );
}
