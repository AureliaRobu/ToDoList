import Tasky from './Tasky';
import { Task } from './types';

function TodoList({
  tasks,
  onDeleteTask,
  onCompleteTask,
}: {
  tasks: Task[];
  onDeleteTask: (id: number) => void;
  onCompleteTask: (id: number) => void;
}) {
  return (
    <div className="w-full max-w-2xl mx-auto my-1.5">
      <div className="bg-white rounded-lg shadow-md p-6">
        <table className="w-full">
          <thead>
            <tr>
              <th className="px-4 py-2 border-b font-bold">Name</th>
              <th className="px-4 py-2 border-b font-bold">Description</th>
              <th className="px-4 py-2 border-b font-bold">Actions</th>
            </tr>
          </thead>
          <tbody>
            {tasks.map((task) => (
              <Tasky
                task={task}
                key={task.id}
                onDeleteTask={onDeleteTask}
                onCompleteTask={onCompleteTask}
              />
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default TodoList;
