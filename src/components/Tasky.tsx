import { Task } from './types';

export default function Tasky({
  task,
  onDeleteTask,
}: {
  task: Task;
  onDeleteTask: (id: number) => void;
}) {
  return (
    <tr>
      <td className="px-4 py-2 border-b">{task.name}</td>
      <td className="px-4 py-2 border-b">{task.description}</td>
      <td className="px-4 py-2 border-b">
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
