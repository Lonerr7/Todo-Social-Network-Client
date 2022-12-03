import { TodoWithComments } from './todoSliceTypes';

export interface CurrentTodoState {
  currentTodo: null | TodoWithComments;
  isTodoFetching: boolean;
  errMsg: string;
}
