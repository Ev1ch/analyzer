import { createAction } from 'store/helpers';
import * as actionsTypes from './actions-types';

export const action = createAction<actionsTypes.IActionProps>(
  actionsTypes.ACTION_TYPE,
);
