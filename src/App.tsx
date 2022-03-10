import React from 'react';
import { Provider } from 'react-redux';
import { Router } from 'containers';
import store from './store';
import 'styles/index.scss';

export default function App(): JSX.Element {
  return (
    <Provider store={store}>
      <Router />
    </Provider>
  );
}
