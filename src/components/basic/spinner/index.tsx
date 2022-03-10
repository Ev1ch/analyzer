import React from 'react';
import clsx from 'clsx';
import styles from './spinner.module.scss';

interface ISpinnerProps {
  className?: string;
}

export default function Spinner({ className }: ISpinnerProps): JSX.Element {
  return <div className={clsx(styles.spinner, className)}></div>;
}
