import React, { useState } from 'react';
import { Task } from './types';

function TodoInputForm({
  setTasks,
}: {
  setTasks: React.Dispatch<React.SetStateAction<Task[]>>;
}) {
  const [name, setName] = useState<string>('');
  const [description, setDescription] = useState<string>('');

  function handleNameChange(event: React.ChangeEvent<HTMLInputElement>) {
    setName(event.target.value);
  }

  function handleDescriptionChange(event: React.ChangeEvent<HTMLInputElement>) {
    setDescription(event.target.value);
  }

  function handleAddTask() {
    const newTask: Task = {
      id: Date.now(),
      name,
      description,
      status: 'new',
    };

    setTasks((prevTasks: Task[]) => [...prevTasks, newTask]);

    // Reset the input fields after adding the task
    setName('');
    setDescription('');
  }
  return (
    <div className="w-full max-w-2xl mx-auto">
      <div className="bg-white rounded-lg shadow-md p-6">
        <h2 className="text-2xl font-bold mb-4">My To-Do List</h2>
        <div className="flex flex-wrap">
          <div className="w-full md:w-1/2 pr-4 mb-4">
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
          <div className="w-full">
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
