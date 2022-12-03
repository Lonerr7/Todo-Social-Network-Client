export interface TodoTaskProps {
  taskText: string;
  isCompleted: boolean;
  difficulty: 'easy' | 'medium' | 'hard';
  createdAt: string;
  id: string;
}
