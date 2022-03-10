import IRootState from './state';
import { useDispatch, TypedUseSelectorHook, useSelector } from 'react-redux';
import store from './index';

export type TAppDispatch = typeof store.dispatch;
export const useAppDispatch = () => useDispatch<TAppDispatch>();
export const useAppSelector: TypedUseSelectorHook<IRootState> = useSelector;
