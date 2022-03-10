import React from 'react';
import clsx from 'clsx';
import styles from './error.module.scss';

interface IErrorProps {
  className?: string;
}

export default function ErrorPage({ className }: IErrorProps): JSX.Element {
  return <div className={clsx(styles.error, className)}></div>;
}
