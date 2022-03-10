import { IHomeState } from './state';
import { TSelector } from 'store/helpers';
import { useAppSelector } from 'store/hooks';

export function useHomeSelector<TPart>(selector: TSelector<IHomeState, TPart>) {
  return useAppSelector<TPart>((state) => selector(state.home));
}
