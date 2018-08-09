import { createActionCreator, IAsyncAction } from 'src/utils';

const createAsyncAction = createActionCreator('RESPONSE');

const create  = createAsyncAction('CREATE');
const read    = createAsyncAction('READ');
const update  = createAsyncAction('UPDATE');
const destroy = createAsyncAction('DESTROY');

export interface IResponseActions {
  create: IAsyncAction<{}>;
  read: IAsyncAction<{}>;
  update: IAsyncAction<{}>;
  destroy: IAsyncAction<{}>;
}

export const ResponseActions: IResponseActions = {
  create,
  read,
  update,
  destroy,
};