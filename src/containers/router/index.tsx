import React from 'react';
import { BrowserRouter, Routes as Switch, Route } from 'react-router-dom';
import { Routes } from 'common/enums';
import { Home } from 'containers';

export default function Router(): JSX.Element {
  return (
    <BrowserRouter>
      <Switch>
        <Route path={Routes.HOME} element={<Home />} />
      </Switch>
    </BrowserRouter>
  );
}
