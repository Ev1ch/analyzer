import React, { HTMLAttributes } from 'react';
import clsx from 'clsx';
import { Container } from 'components/basic';
import { Navigation } from 'components/common';
import styles from './footer.module.scss';

export default function Footer(
  props: HTMLAttributes<HTMLElement>,
): JSX.Element {
  return (
    <footer {...props} className={clsx(styles.footer, props.className)}>
      <Container>
        <Navigation />
      </Container>
    </footer>
  );
}
