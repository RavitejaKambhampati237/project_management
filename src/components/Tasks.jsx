import React from 'react';
import NewTask from './NewTask.jsx';

export default function Tasks({ tasks, selectedProjectId, onAdd, onDelete }) {
  const filteredTasks = tasks.filter(task => task.projectId === selectedProjectId);

  return (
    <section className="bg-white rounded-xl shadow-lg p-6 border border-gray-100">
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-2xl font-bold text-gray-800 flex items-center space-x-3">
          <svg 
            xmlns="http://www.w3.org/2000/svg" 
            className="w-7 h-7 text-indigo-600" 
            fill="none" 
            viewBox="0 0 24 24" 
            stroke="currentColor"
          >
            <path 
              strokeLinecap="round" 
              strokeLinejoin="round" 
              strokeWidth={2} 
              d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4" 
            />
          </svg>
          <span>Project Tasks</span>
        </h2>
      </div>
      
      <NewTask onAdd={onAdd} />

      {filteredTasks.length === 0 ? (
        <div className="bg-gray-50 border border-gray-200 rounded-lg p-4 text-center mt-6">
          <svg 
            xmlns="http://www.w3.org/2000/svg" 
            className="w-12 h-12 text-gray-400 mx-auto mb-4" 
            fill="none" 
            viewBox="0 0 24 24" 
            stroke="currentColor"
          >
            <path 
              strokeLinecap="round" 
              strokeLinejoin="round" 
              strokeWidth={2} 
              d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" 
            />
          </svg>
          <p className="text-gray-600">
            This project does not have any tasks yet.
          </p>
        </div>
      ) : (
        <ul className="bg-gray-50 rounded-lg border border-gray-200 divide-y divide-gray-200 mt-6">
          {filteredTasks.map((task) => (
            <li 
              key={task.id} 
              className="px-4 py-3 flex items-center justify-between hover:bg-gray-100 transition-colors duration-300"
            >
              <div className="flex items-center space-x-3">
                <span className="text-gray-700">{task.text}</span>
              </div>
              <button
                className="text-gray-500 hover:text-red-600 transition-colors duration-300 flex items-center space-x-1 group"
                onClick={() => onDelete(task.id)}
              >
                <svg 
                  xmlns="http://www.w3.org/2000/svg" 
                  className="w-5 h-5 text-gray-500 group-hover:text-red-600" 
                  fill="none" 
                  viewBox="0 0 24 24" 
                  stroke="currentColor"
                >
                  <path 
                    strokeLinecap="round" 
                    strokeLinejoin="round" 
                    strokeWidth={2} 
                    d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" 
                  />
                </svg>
                <span className="text-sm">Clear</span>
              </button>
            </li>
          ))}
        </ul>
      )}
    </section>
  );
}