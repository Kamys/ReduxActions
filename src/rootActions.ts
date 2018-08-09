import { IResponseActions, responseActions } from 'src/entries/response/actions';
import { bindModuleAction } from 'src/utils';
import { store } from 'src/Store';

export interface IUserActions {
  response: IResponseActions;
}

export const UserActions: IUserActions = {
  response: bindModuleAction<IResponseActions>(responseActions, store.dispatch),
};