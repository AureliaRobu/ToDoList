import { Task } from './types';

export default function Tasky({
  task,
  onDeleteTask,
  onCompleteTask,
}: {
  task: Task;
  onDeleteTask: (id: number) => void;
  onCompleteTask: (id: number) => void;
}) {
  const isTaskCompleted = task.status === 'completed';
  return (
    <tr className={isTaskCompleted ? 'line-through text-gray-400' : ''}>
      <td className="px-4 py-2 border-b">{task.name}</td>
      <td className="px-4 py-2 border-b">{task.description}</td>
      <td className="px-4 py-2 border-b text-right">
        {!isTaskCompleted && (
          <button
            type="button"
            className="bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded mr-2"
            onClick={() => onCompleteTask(task.id)}
          >
            Complete
          </button>
        )}

        <button
          type="button"
          className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded"
          onClick={() => onDeleteTask(task.id)}
        >
          Delete
        </button>
      </td>
    </tr>
  );
}
