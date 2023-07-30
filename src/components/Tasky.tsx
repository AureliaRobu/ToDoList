import { Task } from './types';

export default function Tasky({ task }: { task: Task }) {
  return (
    <tr>
      <td className="px-4 py-2 border-b">{task.name}</td>
      <td className="px-4 py-2 border-b">{task.description}</td>
    </tr>
  );
}
