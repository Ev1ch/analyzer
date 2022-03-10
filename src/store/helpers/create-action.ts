import { AnyAction } from 'redux';

export function createAction(type: string): () => AnyAction;
export function createAction<TArgs>(
  type: string,
): (args: TArgs) => AnyAction & TArgs;

export default function createAction<TArgs>(type: string) {
  return (args?: TArgs): AnyAction & TArgs => {
    return Object.assign({ type }, args);
  };
}
