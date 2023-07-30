import Tasky from './Tasky';
import { Task } from './types';

function TodoList({ tasks }: { tasks: Task[] }) {
  return (
    <div className="w-full max-w-md mx-auto my-1.5">
      <div className="bg-white rounded-lg shadow-md p-6">
        <table className="w-full">
          <thead>
            <tr>
              <th className="px-4 py-2 border-b font-bold">Name</th>
              <th className="px-4 py-2 border-b font-bold">Description</th>
            </tr>
          </thead>
          <tbody>
            {tasks.map((task) => (
              <Tasky task={task} key={task.id} />
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default TodoList;
