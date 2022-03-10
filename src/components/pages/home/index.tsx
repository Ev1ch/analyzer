import React from 'react';
import { Container } from 'components/basic';
import { Header, Footer } from 'components/common';
import styles from './home.module.scss';

export default function Home(): JSX.Element {
  return (
    <>
      <Header />
      <main className={styles.main}>
        <section>
          <Container></Container>
        </section>
      </main>
      <Footer />
    </>
  );
}
