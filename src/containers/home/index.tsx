import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import * as actions from 'store/home/actions';
import { Home as HomePage } from 'components/pages';

export default function Home(): JSX.Element {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(actions.action({ prop: '' }));
  }, []);

  return <HomePage />;
}
