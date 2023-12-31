export interface Task {
  id: number;
  name: string;
  description: string;
  status: 'new' | 'completed';
  priority: number;
}
