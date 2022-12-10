import { User } from './authSliceTypes';
import { TodoWithComments } from './todoSliceTypes';

export interface CurrentTodoState {
  currentTodo: null | TodoWithComments;
  currentTodoOwner: User | null;
  isTodoFetching: boolean;
  currentCommentOnDeletion: string;
  isCommentDeleting: boolean;
  errMsg: string;
}
