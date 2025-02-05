import React from 'react';
import noProjectImage from '../assets/no-projects.png';
import Button from './Button.jsx';

export default function NoProjectSelected({ onStartAddProject }) {
  return (
    <div className="text-center w-2/3 flex flex-col items-center justify-center min-h-[calc(100vh-4rem)] bg-gray-50 p-6">
      <div className="text-center max-w-md bg-white rounded-xl shadow-2xl p-8 border border-gray-100 transform transition-all duration-300 hover:shadow-lg">
        <div className="mb-6 bg-indigo-50 p-4 rounded-full w-24 h-24 flex items-center justify-center mx-auto">
          <img
            src={noProjectImage}
            alt="An empty task list"
            className="w-16 h-16 object-contain"
          />
        </div>
        <h2 className="text-2xl font-bold text-gray-800 mb-4">
          No Project Selected
        </h2>
        <p className="text-gray-600 mb-6 leading-relaxed">
          It looks like you haven't selected a project yet. Start by creating a new project or choosing an existing one from the sidebar.
        </p>
        <div className="flex justify-center">
          <Button 
            onClick={onStartAddProject}
            className="flex items-center space-x-2 bg-indigo-600 hover:bg-indigo-700 text-white py-3 px-6 rounded-lg transition-all duration-300 ease-in-out transform hover:scale-[1.02] focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
          >
            <svg 
              xmlns="http://www.w3.org/2000/svg" 
              className="w-5 h-5" 
              fill="none" 
              viewBox="0 0 24 24" 
              stroke="currentColor"
            >
              <path 
                strokeLinecap="round" 
                strokeLinejoin="round" 
                strokeWidth={2} 
                d="M12 4v16m8-8H4" 
              />
            </svg>
            <span>Create New Project</span>
          </Button>
        </div>
      </div>
    </div>
  );
}
