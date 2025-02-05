import { useRef } from 'react';

import Input from './Input.jsx';
import Modal from './Modal.jsx';

export default function NewProject({ onAdd, onCancel }) {
  const modal = useRef();

  const title = useRef();
  const description = useRef();
  const dueDate = useRef();

  function handleSave() {
    const enteredTitle = title.current.value;
    const enteredDescription = description.current.value;
    const enteredDueDate = dueDate.current.value;

    if (
      enteredTitle.trim() === '' ||
      enteredDescription.trim() === '' ||
      enteredDueDate.trim() === ''
    ) {
      modal.current.open();
      return;
    }

    onAdd({
      title: enteredTitle,
      description: enteredDescription,
      dueDate: enteredDueDate,
    });
  }

  return (
    <>
      <Modal ref={modal} buttonCaption="Okay">
        <div className="p-6 text-center">
          <svg 
            xmlns="http://www.w3.org/2000/svg" 
            className="w-16 h-16 text-red-500 mx-auto mb-4" 
            fill="none" 
            viewBox="0 0 24 24" 
            stroke="currentColor"
          >
            <path 
              strokeLinecap="round" 
              strokeLinejoin="round" 
              strokeWidth={2} 
              d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" 
            />
          </svg>
          <h2 className="text-2xl font-bold text-gray-800 mb-4">Invalid Input</h2>
          <p className="text-gray-600 mb-2">
            Oops ... looks like you forgot to enter a value.
          </p>
          <p className="text-gray-600">
            Please make sure you provide a valid value for every input field.
          </p>
        </div>
      </Modal>
      <div className="w-full max-w-2xl mx-auto px-4 py-12">
        <div className="bg-white shadow-xl rounded-xl overflow-hidden border border-gray-100">
          <div className="bg-gray-50 px-6 py-4 border-b border-gray-200">
            <h1 className="text-2xl font-bold text-gray-800 flex items-center">
              <svg 
                xmlns="http://www.w3.org/2000/svg" 
                className="w-7 h-7 mr-3 text-indigo-600" 
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
              Create New Project
            </h1>
          </div>
          <div className="p-6 space-y-6">
            <menu className="flex items-center justify-end gap-4 mb-6">
              <li>
                <button
                  className="text-gray-600 hover:text-gray-900 transition-colors duration-300 px-4 py-2 rounded-md hover:bg-gray-100"
                  onClick={onCancel}
                >
                  Cancel
                </button>
              </li>
              <li>
                <button
                  className="flex items-center space-x-2 px-6 py-2 rounded-lg bg-indigo-600 text-white hover:bg-indigo-700 transition-all duration-300 ease-in-out transform hover:scale-[1.02] focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                  onClick={handleSave}
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
                      d="M8 7H5a2 2 0 00-2 2v9a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-3m-1 4l-3 3m0 0l-3-3m3 3V4" 
                    />
                  </svg>
                  <span>Add Project</span>
                </button>
              </li>
            </menu>
            <div className="space-y-6">
              <Input type="text" ref={title} label="Title" />
              <Input ref={description} label="Description" textarea />
              <Input type="date" ref={dueDate} label="Due Date" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}