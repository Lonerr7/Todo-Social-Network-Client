import { User } from './authSliceTypes';
import { Comment, TodoSmall } from './todoSliceTypes';

export interface CurrentTodoState {
  currentTodo: null | TodoSmall;
  currentTodoComments: Comment[];
  currentTodoOwner: User | null;
  isTodoCommentsAndOwnerFetching: boolean;
  currentCommentOnDeletion: string;
  isCommentDeleting: boolean;
  isCommentSending: boolean;
  errMsg: string;
  sendCommentErrMsg: string;
}
