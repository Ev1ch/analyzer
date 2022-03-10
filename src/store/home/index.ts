import { createReducer } from 'store/helpers';
import { initialState, IHomeState } from './state';
import * as actionsTypes from './actions-types';
import * as actions from './actions';

const reducer = createReducer<IHomeState>(initialState, {
  [actionsTypes.ACTION_TYPE]: (
    state,
    { prop }: ReturnType<typeof actions.action>,
  ) => {
    console.log('Action executed', prop);

    return {
      ...state,
    };
  },
});

export default reducer;
