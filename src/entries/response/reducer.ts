import { createReducer } from 'redux-act';
import { ResponseActions } from 'src/entries/response/actions';

const initialState = () => ({});

const reducer = createReducer({}, initialState());

reducer.on(ResponseActions.read.REQUEST, (state, payload) => ({
  ...payload,
}));