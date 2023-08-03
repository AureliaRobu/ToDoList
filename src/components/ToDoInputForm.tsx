import React, { useState } from 'react';
import { Task } from './types';

interface TodoInputFormProps {
  setTasks: React.Dispatch<React.SetStateAction<Task[]>>;
  handleSort: (sortKey: 'name' | 'priority') => void; // Define the type of handleSort
  sortBy: 'name' | 'priority' | '';
  sortAsc: boolean;
}

function TodoInputForm({
  setTasks,
  handleSort,
  sortBy,
  sortAsc,
}: TodoInputFormProps) {
  const [name, setName] = useState<string>('');
  const [description, setDescription] = useState<string>('');
  const [priority, setPriority] = useState<number>(1);

  function handleNameChange(event: React.ChangeEvent<HTMLInputElement>) {
    setName(event.target.value);
  }

  function handleDescriptionChange(event: React.ChangeEvent<HTMLInputElement>) {
    setDescription(event.target.value);
  }

  function handlePriorityChange(event: React.ChangeEvent<HTMLSelectElement>) {
    setPriority(Number(event.target.value));
  }

  function handleAddTask() {
    if (!name || !description) return;
    const newTask: Task = {
      id: Date.now(),
      name,
      description,
      status: 'new',
      priority,
    };

    setTasks((prevTasks: Task[]) => [...prevTasks, newTask]);

    // Reset the input fields after adding the task
    setName('');
    setDescription('');
  }
  return (
    <div className="w-full mx-auto">
      <div className="bg-white rounded-lg shadow-md p-6">
        <h2 className="text-2xl font-bold mb-4">My To-Do List</h2>
        <div className="flex flex-wrap">
          <div className="w-full md:w-1/4 pr-4 mb-4">
            <label
              htmlFor="name"
              className="block text-gray-700 font-semibold mb-2"
            >
              Name
              <input
                type="text"
                id="name"
                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring focus:border-blue-300"
                value={name}
                onChange={handleNameChange}
              />
            </label>
          </div>
          <div className="w-full md:w-1/2 pl-4 mb-4">
            <label
              htmlFor="description"
              className="block text-gray-700 font-semibold mb-2"
            >
              Description
              <input
                type="text"
                id="description"
                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring focus:border-blue-300"
                value={description}
                onChange={handleDescriptionChange}
              />
            </label>
          </div>
          <div className="w-full md:w-1/4 pl-4 mb-4">
            <label
              htmlFor="priority"
              className="block text-gray-700 font-semibold mb-2"
            >
              Priority
              <select
                id="priority"
                value={priority}
                onChange={handlePriorityChange}
                className="w-full flex-shrink px-4 py-2 mr-2 border rounded focus:outline-none focus:ring focus:border-blue-300"
              >
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
              </select>
            </label>
          </div>
          <div className="w-full text-right">
            <button
              type="button"
              onClick={() => handleSort('name')}
              className={`mr-4 ${
                sortBy === 'name' ? 'bg-gray-400' : 'bg-gray-300'
              } hover:bg-gray-400 text-gray-800 px-4 py-2 rounded-lg`}
            >
              Sort by Name {sortBy === 'name' && sortAsc ? '↑' : '↓'}
            </button>
            <button
              type="button"
              onClick={() => handleSort('priority')}
              className={`mr-4 ${
                sortBy === 'priority' ? 'bg-gray-400' : 'bg-gray-300'
              } hover:bg-gray-400 text-gray-800 px-4 py-2 rounded-lg`}
            >
              Sort by Priority {sortBy === 'priority' && sortAsc ? '↑' : '↓'}
            </button>
            <button
              type="button"
              className="bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-600"
              onClick={handleAddTask}
            >
              Add
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default TodoInputForm;
