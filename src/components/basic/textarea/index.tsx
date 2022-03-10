import React, { TextareaHTMLAttributes } from 'react';
import clsx from 'clsx';
import styles from './textarea.module.scss';

export default function Textarea({
  ...props
}: TextareaHTMLAttributes<HTMLTextAreaElement>): JSX.Element {
  return (
    <textarea {...props} className={clsx(styles.textarea, props.className)} />
  );
}
