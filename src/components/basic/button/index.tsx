import React, { ButtonHTMLAttributes, MouseEvent } from 'react';
import clsx from 'clsx';
import { useNavigate, To } from 'react-router';
import { Sizes } from 'components/basic';
import styles from './button.module.scss';

const ButtonSizes: Record<Sizes, string> = {
  SM: styles.button_sm,
  MD: styles.button_md,
  LG: styles.button_lg,
};

interface IButtonProps {
  size?: Sizes;
  url?: To;
}

export default function Button({
  size = Sizes.SM,
  url,
  ...props
}: IButtonProps & ButtonHTMLAttributes<HTMLButtonElement>): JSX.Element {
  const navigate = useNavigate();

  const clickHandler = (event: MouseEvent<HTMLButtonElement>) => {
    if (props.onClick) {
      props.onClick(event);
    }

    if (url) {
      navigate(url);
    }
  };

  return (
    <button
      {...props}
      className={clsx(
        styles.button,
        size && ButtonSizes[size],
        props.className,
      )}
      onClick={clickHandler}
    />
  );
}
