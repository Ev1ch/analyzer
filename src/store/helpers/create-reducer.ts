import { Reducer, AnyAction } from 'redux';

type THandlers<TState> = Record<string, (state: TState, action: any) => TState>;

export default function createReducer<TState>(
  initialState: TState,
  handlers: THandlers<TState>,
): Reducer<TState> {
  return function reducer(state = initialState, action: AnyAction) {
    if (Object.prototype.hasOwnProperty.call(handlers, action.type)) {
      return handlers[action.type](state, action);
    } else {
      return state;
    }
  };
}
