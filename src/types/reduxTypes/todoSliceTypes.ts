export enum TodoFiltersEnum {
  ALL = 'All',
  COMPLETED = 'Completed',
  UNCOMPLETED = 'Uncompleted',
}

export interface Comments {
  _id: string;
  id: string;
  comment: string;
  createdAt: string;
  todo: string;
  user: {
    _id: string;
    id: string;
    nickname: string;
    photo: string;
  };
}

export type Todo = {
  _id: string;
  taskText: string;
  difficulty: 'easy' | 'medium' | 'hard';
  isCompleted: boolean;
  createdAt: string;
  user: string;
  slug: string;
  __v: number;
  id: string;
  errorMsg: string;
  comments: Comments[];
};

export type TodoState = {
  todos: Array<Todo>;
  isTodoCreating: boolean;
  areAllTodosDeleting: boolean;
  activeTodoFilter: TodoFiltersEnum;
  todoSearchText: string;
  todoInputErrMsg: string;
  todoErrMsg: string;
};

export type TodoParams = {
  taskText: string;
  difficulty?: 'easy' | 'medium' | 'hard';
};

export type UpdateTodoParams = {
  id: string;
  isCompleted?: boolean;
  taskText?: string;
  difficulty?: 'easy' | 'medium' | 'hard';
};
