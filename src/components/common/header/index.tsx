import React, { HTMLAttributes } from 'react';
import clsx from 'clsx';
import { useNavigate } from 'react-router';
import { Container, Logotype } from 'components/basic';
import { Navigation } from 'components/common';
import styles from './header.module.scss';
import { Routes } from 'common/enums';

export default function Header(
  props: HTMLAttributes<HTMLElement>,
): JSX.Element {
  const navigate = useNavigate();

  const logoClickHandler = () => {
    navigate(Routes.HOME);
  };

  return (
    <header {...props} className={clsx(styles.header, props.className)}>
      <Container className={styles.header__container}>
        <Logotype onClick={logoClickHandler} />
        <Navigation />
      </Container>
    </header>
  );
}
