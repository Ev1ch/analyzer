import React, { HTMLAttributes } from 'react';
import clsx from 'clsx';
import { NavLink } from 'react-router-dom';
import { Routes } from 'common/enums';
import styles from './navigation.module.scss';

export default function Navigation(
  props: HTMLAttributes<HTMLElement>,
): JSX.Element {
  return (
    <nav {...props} className={clsx(styles.navigation, props.className)}>
      <NavLink to={Routes.HOME} className={styles.navigation__link}>
        Home
      </NavLink>
      <NavLink to={Routes.SIGN_IN} className={styles.navigation__link}>
        Sign in
      </NavLink>
      <NavLink to={Routes.SIGN_UP} className={styles.navigation__link}>
        Sign up
      </NavLink>
    </nav>
  );
}
