import { useState, useCallback } from 'react';
import { Task } from './types';
import ToDoInputForm from './ToDoInputForm';
import TodoList from './ToDoList';

export default function App() {
  const [tasks, setTasks] = useState<Task[]>([]);

  const handleDeleteTask = useCallback((id: number) => {
    setTasks((prevTasks: Task[]) => prevTasks.filter((task) => task.id !== id));
  }, []);

  return (
    <div className="app">
      <ToDoInputForm setTasks={setTasks} />
      <TodoList tasks={tasks} onDeleteTask={handleDeleteTask} />
    </div>
  );
}
