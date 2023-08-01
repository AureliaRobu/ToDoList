import { useState, useCallback } from 'react';
import { Task } from './types';
import ToDoInputForm from './ToDoInputForm';
import TodoList from './ToDoList';

export default function App() {
  const [tasks, setTasks] = useState<Task[]>([]);

  const handleDeleteTask = useCallback((id: number) => {
    setTasks((prevTasks: Task[]) => prevTasks.filter((task) => task.id !== id));
  }, []);

  function handleCompleteTask(id: number) {
    setTasks((prevTasks) =>
      prevTasks.map((task) =>
        task.id === id ? { ...task, status: 'completed' } : task
      )
    );
  }
  function sortTasksWithCompletedLast(tasksToSort: Task[]) {
    const completedTasks = tasksToSort.filter(
      (task) => task.status === 'completed'
    );
    const nonCompletedTasks = tasksToSort.filter(
      (task) => task.status !== 'completed'
    );
    return [...nonCompletedTasks, ...completedTasks];
  }

  return (
    <div className="app">
      <ToDoInputForm setTasks={setTasks} />
      <TodoList
        tasks={sortTasksWithCompletedLast(tasks)}
        onDeleteTask={handleDeleteTask}
        onCompleteTask={handleCompleteTask}
      />
    </div>
  );
}
