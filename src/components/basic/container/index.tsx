import React, { HTMLAttributes } from 'react';
import clsx from 'clsx';
import styles from './container.module.scss';

interface IContainerProps {
  fluid?: boolean;
}

export default function Container({
  fluid = false,
  ...props
}: IContainerProps & HTMLAttributes<HTMLDivElement>) {
  return (
    <div
      {...props}
      className={clsx(
        styles.container,
        fluid && styles.container_fluid,
        props.className,
      )}
    />
  );
}
