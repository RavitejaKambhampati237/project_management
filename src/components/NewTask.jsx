import { useState } from 'react';

export default function NewTask({ onAdd }) {
  const [enteredTask, setEnteredTask] = useState('');

  function handleChange(event) {
    setEnteredTask(event.target.value);
  }

  function handleClick() {
    if (enteredTask.trim() === '') {
      return;
    }
    onAdd(enteredTask);
    setEnteredTask('');
  }

  return (
    <div className="flex items-center gap-4 mb-4 flex-wrap w-full">
      <input
        type="text"
        placeholder="Enter a new task"
        onChange={handleChange}
        value={enteredTask}
        className="flex-grow w-72 p-3 border border-gray-300 rounded-lg text-base bg-gray-50 text-gray-800 placeholder-gray-400 transition-all duration-300 focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-200"
      />
      <button
        onClick={handleClick}
        className="bg-blue-500 text-white border-none rounded-lg py-3 px-6 text-base cursor-pointer transition-all duration-300 transform hover:bg-blue-600 hover:translate-y-[-2px] active:bg-blue-700 active:translate-y-[2px]"
      >
        Add Task
      </button>
    </div>
  );
}