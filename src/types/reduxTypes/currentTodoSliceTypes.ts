import { User } from './authSliceTypes';
import { Comment, TodoSmall } from './todoSliceTypes';

export interface CurrentTodoState {
  currentTodo: null | TodoSmall;
  currentTodoComments: Comment[];
  totalCommentsCount: number;
  currentTodoOwner: User | null;
  isCurrentTodoFetching: boolean;
  isTodoOwnerFetching: boolean;
  isTodoCommentsFetching: boolean;
  currentCommentOnDeletion: string;
  isCommentDeleting: boolean;
  isCommentSending: boolean;
  errMsg: string;
  sendCommentErrMsg: string;
}
