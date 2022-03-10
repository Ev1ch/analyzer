export interface IHomeState {
  isLoading: boolean;
  isError: boolean;
}

export const initialState: IHomeState = {
  isLoading: false,
  isError: false,
};

export default initialState;
