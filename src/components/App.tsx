import { useState, useCallback } from 'react';
import { Task } from './types';
import ToDoInputForm from './ToDoInputForm';
import TodoList from './ToDoList';

export default function App() {
  const [tasks, setTasks] = useState<Task[]>([]);
  const [sortBy, setSortBy] = useState<'' | 'name' | 'priority'>('');
  const [sortAsc, setSortAsc] = useState(true);

  const handleSort = (option: '' | 'name' | 'priority') => {
    if (option === sortBy) {
      setSortAsc(!sortAsc); // Toggle sort order when clicking the same option again
    } else {
      setSortBy(option);
      setSortAsc(true); // Reset sort order to ascend when selecting a new option
    }
  };

  const sortedTasks = [...tasks].sort((a, b) => {
    if (sortBy === 'name') {
      return sortAsc
        ? a.name.toLowerCase().localeCompare(b.name.toLowerCase())
        : b.name.toLowerCase().localeCompare(a.name.toLowerCase());
    }
    if (sortBy === 'priority') {
      return sortAsc
        ? Number(a.priority) - Number(b.priority)
        : Number(b.priority) - Number(a.priority);
    }
    return 0;
  });

  const handleDeleteTask = useCallback((id: number) => {
    setTasks((prevTasks: Task[]) => prevTasks.filter((task) => task.id !== id));
  }, []);

  const handleCompleteTask = useCallback(
    (id: number) => {
      setTasks((prevTasks) =>
        prevTasks.map((task) =>
          task.id === id ? { ...task, status: 'completed' } : task
        )
      );
    },
    [setTasks]
  );
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
    <div className="w-3/4 mx-auto">
      <ToDoInputForm
        setTasks={setTasks}
        handleSort={handleSort}
        sortBy={sortBy}
        sortAsc={sortAsc}
      />
      <TodoList
        tasks={sortTasksWithCompletedLast(sortedTasks)}
        onDeleteTask={handleDeleteTask}
        onCompleteTask={handleCompleteTask}
      />
    </div>
  );
}
