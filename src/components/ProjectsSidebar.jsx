import React from 'react';
import Button from './Button.jsx';

export default function ProjectsSidebar({
  onStartAddProject,
  projects,
  onSelectProject,
  selectedProjectId,
}) {
  return (
    <aside className="w-full md:w-72 bg-gray-900 text-gray-50 p-6 rounded-xl shadow-2xl border border-gray-800 transform transition-all duration-300 hover:shadow-lg">
      <div className="flex items-center mb-8 space-x-3">
        <svg xmlns="http://www.w3.org/2000/svg" className="w-8 h-8 text-indigo-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 10h16M4 14h16M4 18h16" />
        </svg>
        <h2 className="text-xl font-bold uppercase text-gray-200 tracking-wider">
          Project Management
        </h2>
      </div>
      
      <Button 
        onClick={onStartAddProject} 
        className="w-full flex items-center justify-center space-x-2 bg-indigo-600 hover:bg-indigo-700 text-white py-3 rounded-lg transition-all duration-300 ease-in-out transform hover:scale-[1.02] focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
      >
        <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
        </svg>
        <span>New Project</span>
      </Button>
      
      <div className="mt-6 space-y-2">
        <p className="text-xs uppercase text-gray-500 mb-2 tracking-wider">
          Your Projects
        </p>
        <ul className="space-y-1">
          {projects.map((project) => {
            const isSelected = project.id === selectedProjectId;
            
            return (
              <li key={project.id}>
                <button
                  className={`
                    w-full text-left px-4 py-2 rounded-md flex items-center space-x-2 transition-all duration-300
                    ${isSelected 
                      ? 'bg-gray-800 text-gray-100 ring-2 ring-indigo-500' 
                      : 'text-gray-400 hover:bg-gray-800 hover:text-gray-200'}
                  `}
                  onClick={() => onSelectProject(project.id)}
                >
                  <svg 
                    xmlns="http://www.w3.org/2000/svg" 
                    className={`w-5 h-5 ${
                      isSelected ? 'text-indigo-500' : 'text-gray-600'
                    }`} 
                    fill="none" 
                    viewBox="0 0 24 24" 
                    stroke="currentColor"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 7v10a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-6l-2-2H5a2 2 0 00-2 2z" />
                  </svg>
                  <span className="truncate">{project.title}</span>
                </button>
              </li>
            );
          })}
        </ul>
      </div>
    </aside>
  );
}